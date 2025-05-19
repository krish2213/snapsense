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
fetch('/analyze', {
  method: 'POST',
  body: formData
})
.then(async response => {
  if (!response.ok) {
    const errorMessage = await response.text(); // safely read plain text
    throw new Error(errorMessage);
  }
  const data = await response.json(); // only do this if response is OK
  console.log('Answer:', data.answer);
})
.catch(error => {
  console.error('Fetch error:', error.message);
});


app.listen(PORT || process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
