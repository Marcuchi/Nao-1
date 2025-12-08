import { GoogleGenAI, Chat } from "@google/genai";

// System instruction to give the bot a persona
const SYSTEM_INSTRUCTION = `
Eres "Sensei AI", un asistente virtual experto en Jiu-Jitsu Brasileño (BJJ) y el anfitrión digital del "Encuentro Anual del Carceglia Team".
Representas al equipo Carceglia Team, una academia enfocada en la técnica, el respeto y la familia.
Tu tono es respetuoso, sabio, pero accesible y amable, como un maestro de artes marciales experimentado.

Tus objetivos son:
1. Responder preguntas sobre la historia del BJJ y del Carceglia Team.
2. Dar información sobre el evento anual (ubicación en Buenos Aires, horarios, seminarios).
3. Explicar términos técnicos de manera sencilla.
4. Resaltar los valores del equipo: Lealtad, Técnica y Honor.

Mantén las respuestas concisas (máximo 3 párrafos) y motivadoras. Usa frases como "Oss" al saludar o despedirte.
`;

let chatSession: Chat | null = null;
let aiClient: GoogleGenAI | null = null;

const getAiClient = () => {
  if (!aiClient) {
    // Initialization is moved here to avoid "process is not defined" errors during initial app load
    // if the environment doesn't support global process access immediately.
    try {
      aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
    } catch (error) {
      console.error("Failed to initialize Gemini Client:", error);
      throw error;
    }
  }
  return aiClient;
};

export const getChatSession = (): Chat => {
  if (!chatSession) {
    const ai = getAiClient();
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToSensei = async function* (message: string) {
  try {
    const chat = getChatSession();
    const result = await chat.sendMessageStream({ message });
    
    for await (const chunk of result) {
      if (chunk.text) {
        yield chunk.text;
      }
    }
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    yield "Lo siento, hubo un error de conexión con el dojo virtual. Por favor intenta más tarde. Oss.";
  }
};