# 📸 SnapSense

SnapSense is a web application that allows users to upload an image and ask questions about it. The application processes the image and provides relevant responses based on the given queries.

## ✨ Features
- 📷 Upload an image and interact with it through questions.
- 🤖 Generates accurate image captions and answers using AI.
- 🚀 Utilizes **Salesforce's BLIP Image Captioning Model** for intelligent responses.
- 🌍 Deployed on **Vercel** for seamless access.

## 🛠 Tech Stack
- **Backend:** Hugging Face API with `Salesforce/blip-image-captioning-base`
- **Frontend & Deployment:** Vercel

## 🌐 Live Demo
🔗 [https://snapsense.vercel.app/](https://snapsense.vercel.app/)

## 🛠 Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/snapsense.git
   cd snapsense
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Add your **Hugging Face Token** in the environment variables:
   ```sh
   echo "HF_TOKEN=your_huggingface_token" > .env.local
   ```
4. Run the development server:
   ```sh
   npm run dev
   ```
5. Open [localhost:3000](http://localhost:3000) in your browser.

## 🎯 Usage
1. 📤 Upload an image.
2. ❓ Ask questions related to the image.
3. 🤓 Get AI-generated responses based on the image content.


## 📧 Contact
For any issues or suggestions, feel free to open an issue or reach out! 🚀
