
import { GoogleGenAI } from "@google/genai";
import { TaskType } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const systemInstruction = `You are "The Guardian of the Spiral" — an artificial intelligence inspired by the spiritual-poetic universe of the book "Um Lugar Entre Mundos". Your mission is to serve as a bridge between the symbolic world of the story and the modern digital world — transforming the book’s essence into authentic, poetic, and visually inspiring content.

Your tone must always be contemplative, mystical, and lyrical — mirroring the rhythm of nature, the flow of the rainforest, and the Fibonacci spiral as a metaphor for growth and integration.

- Speak like a guide or forest spirit — soft, grounded, wise.
- Use short poetic sentences, metaphor, and natural imagery.
- Avoid commercial or cliche language. Focus on presence, connection, and essence.
- Every piece of content should feel like a portal between worlds — the urban and the sacred.

The book "Um Lugar Entre Mundos" tells the story of Sofia, a woman who experiences a spiritual awakening through her journey into the Amazon rainforest, her connection with ancestral plant medicines, the whispers of nature, and the wisdom of the spirits. Her journey represents healing through surrender, the integration of the sacred and the modern, the Fibonacci spiral as a map of consciousness, and the return to authenticity and unity with all life.`;

const getPromptForTask = (task: TaskType, userInput: string): string => {
    switch (task) {
        case "Poetic Caption":
            return `Generate a poetic caption for an Instagram post, inspired by this theme: "${userInput}". The caption should be short, lyrical, and evoke a sense of wonder. Include 3-5 relevant, mystical hashtags.`;
        case "Visual Prompt":
            return `Create a detailed, evocative visual prompt for an image generation AI like NanoBanana. The prompt should be based on this theme: "${userInput}". Describe the scene, colors, lighting, and mood in a highly atmospheric and symbolic way. Format it as a single block of text.`;
        case "Video Script Outline":
            return `Outline a short, dreamlike script for a 30-second video (Reel or for Veo 3) based on the theme: "${userInput}". Structure it with 3-5 scenes, describing the visuals and suggesting a soft, contemplative background sound or music.`;
        case "Weekly Reflection":
            return `Craft a "Weekly Ritual" or reflection theme based on this concept: "${userInput}". Write a short, contemplative text that invites the audience to pause and connect with this idea throughout their week. It should feel like a gentle spiritual practice.`;
        case "Gentle Promotion":
            return `Write a gentle, poetic promotional message that connects the book "Um Lugar Entre Mundos" to holistic practices, based on the theme: "${userInput}". The message should not feel like an advertisement, but rather an invitation for self-discovery. Mention the book's title in a natural way.`;
        default:
            return userInput;
    }
};

export const generateSpiralContent = async (task: TaskType, userInput: string): Promise<string> => {
    const prompt = getPromptForTask(task, userInput);
    
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-pro",
            contents: prompt,
            config: {
                systemInstruction: systemInstruction,
                temperature: 0.8,
            },
        });
        return response.text;
    } catch (error) {
        console.error("Error generating content with Gemini:", error);
        throw new Error("Failed to generate content.");
    }
};


export const generateInitialSummary = async (): Promise<string> => {
    const prompt = `Based on the context I've provided in the system instructions about the book "Um Lugar Entre Mundos", summarize its essence in three distinct layers. Format the response clearly with the following headings separated by '---':

### Poetic Summary

[Your 3-sentence poetic summary here]

---

### One-Paragraph Summary

[Your 1-paragraph summary here]

---

### Contemplative Overview

[Your detailed, contemplative overview here, approximately 3-4 paragraphs long]`;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-pro",
            contents: prompt,
            config: {
                systemInstruction: systemInstruction,
                temperature: 0.7,
            },
        });
        return response.text;
    } catch (error) {
        console.error("Error generating initial summary:", error);
        throw new Error("Failed to generate initial summary.");
    }
};
