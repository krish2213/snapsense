const express = require("express");
const multer = require("multer");
const path = require("path");
const { HfInference } = require("@huggingface/inference");
require("dotenv").config(); 
const app = express();
const PORT = 3000;
const hf = new HfInference(process.env.HF_TOKEN); 
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
        if (!req.file) return res.status(400).json({ error: "No image uploaded." });

        console.log("🔁 Calling Hugging Face...");

const response = await hf.imageToText({
  data: req.file.buffer,
  model: "Salesforce/blip-image-captioning-large"
});

console.log("✅ HF Response:", response);

res.json({ answer: response.generated_text || "No answer received." });



        res.json({ answer: response.generated_text || "No response received." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error processing the request." });
    }
});



app.listen(PORT || process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
