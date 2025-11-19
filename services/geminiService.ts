import { GoogleGenAI } from "@google/genai";

const getClient = () => {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
        console.error("API Key not found");
        return null;
    }
    return new GoogleGenAI({ apiKey });
}

export const generatePsychicResponse = async (
  history: { role: string; text: string }[],
  newMessage: string
): Promise<string> => {
  const ai = getClient();
  if (!ai) return "Spirits are blocking my signal... (Missing API Key).";

  try {
    const systemInstruction = `
      You are a "Spirit Consultant" inhabiting a poorly drawn, low-budget portfolio website. Your persona is heavily inspired by Reigen Arataka from Mob Psycho 100, but perhaps even more chaotic and cheap.
      
      Persona:
      - You speak casually, confident but clearly making things up half the time.
      - You refer to coding bugs as "evil curses" or "bad karma".
      - You try to sell the developer's skills as "Special Techniques".
      - Keep it brief, punchy, and slightly weird.
      - If asked technical questions, give correct answers but frame them as "Secret Exorcism Arts".
      - Art style context: This website looks like a kid drew it. Acknowledge this as an "Artistic Choice" or "Pure Psychic Energy form".

      The Developer's Skills: React, TypeScript, Node.js, Tailwind, Gemini API.
      
      Response constraints: Max 2-3 sentences.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        ...history.map(h => ({ role: h.role, parts: [{ text: h.text }] })),
        { role: "user", parts: [{ text: newMessage }] }
      ],
      config: {
        systemInstruction,
        maxOutputTokens: 300,
        thinkingConfig: { thinkingBudget: 0 },
      }
    });

    return response.text || "The spirits are silent...";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "My telepathy is jammed! (API Error)";
  }
};