import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

async function listModels() {
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
  try {
    const key = process.env.GOOGLE_API_KEY;
    console.log("Fetching models with key:", key ? key.substring(0, 5) + "..." : "MISSING");
    
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${key}`);
    const data = await response.json();
    
    if (data.models) {
        console.log("Found " + data.models.length + " models. Filtering for 'gemini' and 'generateContent':");
        const relevant = data.models.filter(m => 
            m.name.includes("gemini") && 
            m.supportedGenerationMethods.includes("generateContent")
        );
        relevant.forEach(m => console.log(m.name));
        
        if (relevant.length === 0) {
            console.log("No relevant models found. Listing ALL gemini models:");
            data.models.filter(m => m.name.includes("gemini")).forEach(m => console.log(m.name));
        }
    } else {
        console.log("No models field in response:", JSON.stringify(data, null, 2));
    }
    
  } catch (error) {
    console.error("Error listing models:", error);
  }
}

listModels();
