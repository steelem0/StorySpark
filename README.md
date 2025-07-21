# ⚡ StorySpark

**A modular, AI-powered micro-story generator blending creativity, interaction, and system design — built with Nuxt 4, Vue 3 Composition API, Tailwind CSS, and the Google Gemini API.**


---

## ✨ Overview

StorySpark is a playful, interactive web application that lets users generate original short stories with the help of AI. Designed as part of Marcy Steele’s personal portfolio, the project showcases modular system architecture, reusable components, AI integration, and responsive UI — all wrapped in a beautifully themed, dark-mode-ready interface.

---

## 🚀 Features

- ⚡ Generate micro-stories with Google Gemini API  
- 🛠 Modular architecture using Nuxt 4 + Vue 3 Composition API  
- 🎨 Dark mode support via custom theme CSS  
- 💬 Interactive UI with HeroBanner, NavHeader, and AppFooter components  
- 📱 Fully responsive design with Tailwind CSS  
- 🧩 Expandable system for future genres, prompts, or features

---

## 🖥 Tech Stack

- **Nuxt 4**  
- **Vue 3 Composition API**  
- **Tailwind CSS** (with custom theme file for dark mode)  
- **Google Gemini API** for generative storytelling  
- Optional: Deployed with Netlify / Vercel (your setup)

---

## 💾 Installation

```bash
# Clone the repository
git clone https://github.com/steelem0/storyspark.git

# Navigate into the project
cd storyspark

# Install dependencies
npm install

# Run the development server
npm run dev
```

🔑 Configuration
1️⃣ Get a free API key from Google AI Studio
2️⃣ Create a .env file in the project root:

NUXT_PUBLIC_GEMINI_API_KEY=your_google_gemini_api_key_here
✅ Note: Only the public key is exposed client-side.


---


🏗 Project Structure


```

'/components
  ├── NavHeader.vue
  ├── HeroBanner.vue
  ├── AppFooter.vue
  └── DarkModeToggle.vue

/pages
  ├── index.vue
  └── about.vue

/composables
  └── useGeminiStory.js

/assets/css
  └── theme.css
'
```
-----

🌟 Future Ideas
Genre and theme selectors

Scene randomizers or “add a twist” button

Story history / save feature

Typewriter or fade-in animations

Share-to-social or export-to-markdown


-----

🙏 Credits
Created and maintained by Marcy Steele && Creative Director Lexi.

Thanks to:

The open-source community

Google Gemini API team

Nuxt + Vue ecosystems