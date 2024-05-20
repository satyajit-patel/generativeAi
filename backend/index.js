// // import dotenv from "dotenv";
// const dotenv = require('dotenv');
// // import { GoogleGenerativeAI } from "@google/generative-ai";
// const { GoogleGenerativeAI } = require("@google/generative-ai");

// dotenv.config();

// const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// async function run() {
//     const model = genAI.getGenerativeModel({ model: "gemini-pro" });

//     const prompt =
//         "Write a sonnet about a programmers life, but also make it rhyme.";

//     const result = await model.generateContent(prompt);
//     const response = await result.response;
//     const text = response.text();
//     console.log(text);
// }

// run();


const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // Enable CORS
app.use(bodyParser.json());

const genAI = new GoogleGenerativeAI(process.env.API_KEY); // Initialize genAI with the API key

app.post('/generate-sonnet', async (req, res) => {
    const { prompt } = req.body;

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = await response.text();

        res.json({ sonnet: text });
    } catch (error) {
        console.error('Error generating sonnet:', error);
        res.status(500).json({ error: 'An error occurred while generating the sonnet' });
    }
});

// Just for checking
app.get('/home', (req, res) => {
    res.send("HELLO WORLD");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
