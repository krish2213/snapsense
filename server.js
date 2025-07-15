const express = require("express");
const multer = require("multer");
const path = require("path");
const axios = require('axios')
require("dotenv").config();
const app = express();
const PORT = 3000;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.get("/", (req, res) => {
    res.render("index");
});
app.post("/analyze", upload.single("image"), async (req, res) => {
    try {
        if (!req.file) return res.status(400).json({ error: "No image uploaded." });
        const base64Image = req.file.buffer.toString("base64");
        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
            {
                contents: [
                    {
                        role: "user",
                        parts: [
                            {
                                inline_data: {
                                    mime_type: req.file.mimetype,
                                    data: base64Image
                                }
                            },
                            {
                                text: req.body.question + ". return as a plain text without formatting"
                            }
                        ]
                    }
                ]
            },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        const caption = response.data.candidates?.[0]?.content?.parts?.[0]?.text || "No caption generated.";
        res.json({ answer: caption });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error processing the request." });
    }
});



app.listen(PORT || process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
