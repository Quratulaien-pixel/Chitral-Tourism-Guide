const express = require("express");
const dotenv = require("dotenv");
const path = require("path"); // 1. ADDED THIS
const { GoogleGenAI } = require("@google/genai");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; // 2. CHANGED THIS FOR VERCEL

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

app.use(express.json());
app.use(express.static(__dirname));

// 3. ADDED THIS - THIS FIXES "Cannot GET /"
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/test", (req, res) => {
    res.send("Server is working!");
});

app.post("/ask-ai", async (req, res) => {
    try {
        const question = req.body.question;
        if (!question) {
            return res.status(400).json({ answer: "Please enter a question." });
        }

        console.log("Question received:", question);

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash", // 4. CHANGED THIS - "gemini-3-flash-preview" doesn't exist yet
            contents: `You are the AI Travel Guide for Chitral, Pakistan.
            Help tourists with: Places to visit, Hotels, Festivals, Travel tips, Culture, Itineraries, Transport, Food.
            Give clear, friendly and useful answers. Do not invent facts.
            Tourist question: ${question}`
        });

        console.log("Gemini responded successfully.");
        res.json({ answer: response.text });

    } catch (error) {
        console.error("GEMINI ERROR:", error);
        res.status(500).json({ answer: "The AI service returned an error." });
    }
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Chitral Tourism Guide is running at http://localhost:${PORT}`);
});