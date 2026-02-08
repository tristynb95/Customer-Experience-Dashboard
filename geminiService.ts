import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const analyzeFeedback = async (employeeName: string, comments: string[]): Promise<string> => {
  if (comments.length === 0) return "No comments available for analysis.";
  if (!ai) {
    return "Missing Gemini API key. Set VITE_GEMINI_API_KEY in your .env.local file and restart the dev server.";
  }

  const prompt = `
    You are an expert HR and Customer Experience analyst for GAIL's Bakery. 
    Analyze the following customer feedback comments received during shifts worked by employee "${employeeName}".
    
    Context: GAIL's Bakery values artisanal quality, community, and efficient but warm service. 
    Terms like "flat white", "sourdough", "croissant", "bun", "loaf" are common products.
    
    Identify:
    1. Key strengths and positive themes (e.g., warmth, coffee quality, efficiency).
    2. Specific areas for improvement (e.g., table cleanliness, product availability, wait times).
    3. The general sentiment regarding their shifts.
    
    Keep the response concise (under 150 words) and professional. Use markdown for formatting.

    Comments:
    ${comments.map(c => `- "${c}"`).join('\n')}
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    
    return response.text || "Analysis failed to generate text.";
  } catch (error) {
    console.error("Gemini analysis error:", error);
    return "Unable to perform AI analysis at this time. Please check your API key.";
  }
};
