const express = require("express");
const dotenv = require("dotenv");
const { GoogleGenAI } = require("@google/genai");

dotenv.config();

const app = express();
const PORT = 3000;

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

app.use(express.json());
app.use(express.static(__dirname));

app.get("/test", (req, res) => {
    res.send("Server is working!");
});

app.post("/ask-ai", async (req, res) => {

    try {
        const question = req.body.question;

        if (!question) {
            return res.status(400).json({
                answer: "Please enter a question."
            });
        }

        console.log("Question received:", question);

        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: `You are the AI Travel Guide for Chitral, Pakistan.

Help tourists with:
- Places to visit
- Hotels and guest houses
- Festivals and cultural events
- Travel tips
- Local culture and traditions
- Suggested itineraries
- Transportation
- Food and local experiences

Give clear, friendly and useful answers.
Do not invent facts. If you are unsure, say that the information should be verified.

Tourist question:
${question}`
        });

        console.log("Gemini responded successfully.");

        res.json({
            answer: response.text
        });

    } catch (error) {

        console.error("GEMINI ERROR:");
        console.error(error);

        res.status(500).json({
            answer: "The AI service returned an error. Check the VS Code terminal."
        });
    }
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Chitral Tourism Guide is running at http://localhost:${PORT}`);
});