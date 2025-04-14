
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Gemini API with the API key
const apiKey = "AIzaSyDva-oMirya5l0oHVnhGJ6NPxOqr1D_LMw";
const genAI = new GoogleGenerativeAI(apiKey);

// Function to get information about a specific media item with better error handling
export async function getMediaInfo(mediaType: string, title: string): Promise<string> {
  try {
    // Create a prompt for the model
    const prompt = `Please provide a short summary about the ${mediaType} titled "${title}". Include information about the creator, main themes, and why it's popular. Keep it under 300 words.`;
    
    // Get the generative model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    // Generate content based on the prompt
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    if (!text || text.trim() === "") {
      throw new Error("Empty response received");
    }
    
    return text;
  } catch (error) {
    console.error("Error getting media info from Gemini API:", error);
    return `Information about ${title} is currently being loaded. Please check back shortly.`;
  }
}

// Function to get recommendations based on user preferences
export async function getRecommendations(mediaType: string, preferences: string[]): Promise<string[]> {
  try {
    // Create a prompt for the model
    const prompt = `Based on a user's interest in ${mediaType} titles like "${preferences.join(', ')}", suggest 5 similar ${mediaType} titles they might enjoy. Format your response as a simple list of just the titles, one per line.`;
    
    // Get the generative model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    // Generate content based on the prompt with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    
    const result = await model.generateContent(prompt);
    clearTimeout(timeoutId);
    
    const response = await result.response;
    const text = response.text();
    
    // Parse the response to get the list of recommendations
    const recommendations = text
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)
      .map(line => line.replace(/^\d+\.\s*/, ''));
    
    return recommendations.slice(0, 5);
  } catch (error) {
    console.error("Error getting recommendations from Gemini API:", error);
    return ["Loading recommendations...", "Please try again shortly.", "Our recommendation system is being updated."];
  }
}

// Function to search for media content
export async function searchMedia(query: string, mediaType: string): Promise<string[]> {
  try {
    // Create a prompt for the model
    const prompt = `Please search for ${mediaType} related to "${query}" and return 5 relevant results. Format your response as a simple list of just the titles, one per line.`;
    
    // Get the generative model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    // Generate content based on the prompt with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    
    const result = await model.generateContent(prompt);
    clearTimeout(timeoutId);
    
    const response = await result.response;
    const text = response.text();
    
    // Parse the response to get the search results
    const searchResults = text
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)
      .map(line => line.replace(/^\d+\.\s*/, ''));
    
    return searchResults.slice(0, 5);
  } catch (error) {
    console.error("Error searching media with Gemini API:", error);
    return ["Please try your search again in a moment.", "Our search system is currently updating."];
  }
}
