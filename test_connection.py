import os
import google.generativeai as genai
from dotenv import load_dotenv

# 1. Carregar credenciais
load_dotenv()
api_key = os.getenv("GOOGLE_API_KEY")

if not api_key:
    raise ValueError("Chave não encontrada!")

genai.configure(api_key=api_key)

# 2. Selecionando o modelo que CONFIRMAMOS que você tem acesso
# Usando a versão mais recente e rápida disponível na sua lista
model_name = 'gemini-flash-latest' 

print(f"--- INICIANDO SISTEMA MARROC ({model_name}) ---")

try:
    model = genai.GenerativeModel(model_name)
    
    # 3. O Prompt de Teste
    print("Enviando sinal para a Matrix...")
    response = model.generate_content("Responda apenas: 'Sistemas da Marroc: ONLINE e Operantes.'")
    
    print("\nRESPOSTA RECEBIDA:")
    print(f">> {response.text}")
    print("---------------------------------")

except Exception as e:
    print(f"\nERRO: {e}")