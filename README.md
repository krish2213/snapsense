# 📸 SnapSense

SnapSense is a web application that allows users to upload an image and ask questions about it. The application processes the image and provides relevant responses based on the given queries.

## ✨ Features
- 📷 Upload an image and interact with it through questions.
- 🤖 Generates accurate image captions and answers using AI.
- ⚡ Powered by **Google's Gemini 2.0 Flash** multimodal model for intelligent responses.
- 🌍 Deployed on **Vercel** for seamless access.

## 🛠 Tech Stack
- **Backend:** Google Gemini API (`gemini-2.0-flash`)
- **Frontend & Deployment:** Vercel

## 🌐 Live Demo
🔗 [https://snapsense.vercel.app/](https://snapsense.vercel.app/)

## 🛠 Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/krish2213/snapsense.git
   cd snapsense
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Add your **Gemini API Key** in the environment variables:
   ```sh
   echo "GEMINI_API_KEY=your_gemini_api_key" > .env.local
   ```
4. Run the development server:
   ```sh
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Usage
1. 📤 Upload an image.
2. ❓ Ask questions related to the image.
3. 🤓 Get AI-generated responses based on the image content using Gemini 2.0 Flash.


## 📧 Contact
For any issues or suggestions, feel free to open an issue or reach out! 🚀
