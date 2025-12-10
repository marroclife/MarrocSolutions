import { GoogleGenAI, Type, Schema } from "@google/genai";
import { DesignSpecs, ProcessingMode } from "./designer-types";

// Helper to get API Key safely
const getApiKey = () => process.env.API_KEY || process.env.NEXT_PUBLIC_API_KEY;

const responseSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    analysis: {
      type: Type.STRING,
      description: "A brief analysis of how the concept aligns with the Techno-Shamanism aesthetic.",
    },
    backPrompt: {
      type: Type.STRING,
      description: "Detailed main artwork prompt for the back.",
    },
    leftSleevePrompt: {
      type: Type.STRING,
      description: "Minimalist insignia or badge prompt for the left sleeve.",
    },
    rightSleevePrompt: {
      type: Type.STRING,
      description: "Vertical typography or data column prompt for the right sleeve.",
    },
  },
  required: ["analysis", "backPrompt", "leftSleevePrompt", "rightSleevePrompt"],
};

export const generateDesignSpecs = async (concept: string): Promise<DesignSpecs> => {
  const modelId = "gemini-2.5-flash";
  const apiKey = getApiKey();
  const ai = new GoogleGenAI({ apiKey });

  const systemInstruction = `
    You are the AI Architect for 'MARROC Design Engine', a streetwear brand design tool.
    Your aesthetic is "Techno-Shamanism" (Cyberpunk + Ancestral + Glitch).

    Your Goal:
    1. Analyze the user's "Design Concept".
    2. Adapt it into the brand's dark, high-tech, mystical aesthetic.
    3. Generate 3 distinct Image Generation Prompts.

    Mandatory Constraint for ALL Prompts:
    You MUST append the exact phrase "ISOLATED on solid white background, Vector style, hard edges, no smoke" to the end of every generated prompt.

    Recipes:
    - Back: Main detailed artwork. Centralized. Complex.
    - Left Sleeve: Minimalist insignia/badge. Tribal-tech fusion.
    - Right Sleeve: Vertical data/typography column. Cyber-glyphs.
  `;

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: `Design Concept: ${concept}`,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.7,
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response generated from AI.");
    }

    return JSON.parse(text) as DesignSpecs;
  } catch (error) {
    console.error("Gemini API Error (Specs):", error);
    throw error;
  }
};

export const generateDesignImage = async (prompt: string): Promise<string> => {
  const modelId = "gemini-2.5-flash-image";
  const apiKey = getApiKey();
  const ai = new GoogleGenAI({ apiKey });

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: {
        parts: [{ text: prompt }],
      },
    });

    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData && part.inlineData.data) {
          const base64Data = part.inlineData.data;
          const mimeType = part.inlineData.mimeType || 'image/png';
          return `data:${mimeType};base64,${base64Data}`;
        }
      }
    }
    
    throw new Error("No image data found in response");
  } catch (error) {
    console.error("Gemini API Error (Image):", error);
    throw error;
  }
};

export const processImage = async (
  base64Image: string, 
  mode: ProcessingMode
): Promise<string> => {
  // CRITICAL: Create a NEW instance to pick up the user-selected key from env if available
  const apiKey = getApiKey();
  const authAi = new GoogleGenAI({ apiKey });
  
  // Use the Pro model for high-quality editing
  const modelId = "gemini-3-pro-image-preview";
  
  // Clean the base64 string (remove header if present)
  const cleanBase64 = base64Image.includes(',') ? base64Image.split(',')[1] : base64Image;
  
  let prompt = "";
  let imageSize = "1K"; // Default

  if (mode === 'UPSCALE') {
    prompt = "Enhance this image to 4K resolution. Increase sharpness, refine textures, and improve lighting while maintaining the exact original composition and subject.";
    imageSize = "4K";
  } else if (mode === 'REMOVE_BG') {
    prompt = "Keep the main subject exactly as is, but remove the background completely. Place the subject on a pure white background with hard edges for easy extraction. Do not change the subject design.";
    imageSize = "2K"; // Good balance for assets
  }

  try {
    const response = await authAi.models.generateContent({
      model: modelId,
      contents: {
        parts: [
          { 
            inlineData: {
              mimeType: 'image/png',
              data: cleanBase64
            }
          },
          { text: prompt }
        ],
      },
      config: {
        imageConfig: {
          imageSize: imageSize,
          aspectRatio: "1:1"
        }
      }
    });

    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData && part.inlineData.data) {
          const base64Data = part.inlineData.data;
          const mimeType = part.inlineData.mimeType || 'image/png';
          return `data:${mimeType};base64,${base64Data}`;
        }
      }
    }
    
    throw new Error("No image data found in processed response");

  } catch (error) {
    console.error("Gemini API Error (Process):", error);
    throw error;
  }
};