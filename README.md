# 💼 GitHired

---

🔗 **Live Site:** [githired-1.onrender.com](https://githired-1.onrender.com/)  

---
![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)

---

## 📚 Table of Contents
- 📝 [Description](#-description)
- 💾 [Installation](#-installation)
- 🚀 [Usage](#-usage)
- 📡 [Deployment](#-deployment)
- ✨ [Features](#-features)
- 🧠 [Future Ideas](#-future-ideas)
- 🙌 [Credits](#-credits)
- 📄 [License](#-license)

## 📝 Description
GitHired is a developer candidate search app that uses the GitHub API to showcase real users in a swipe-style interface. You can choose to accept (🟩) or reject (🟥) candidates, and review your saved picks on a dedicated "Potential Candidates" page. It’s built with **React + TypeScript**, styled in custom CSS with mobile-first design, and deployed on **Render**.

## 💾 Installation
Before running locally, make sure you’ve got Node.js installed 👉 [Install Node.js](https://nodejs.org)

```bash
git clone https://github.com/a-angulo/GitHired.git
cd GitHired
npm install
```

Create a `.env` file in the root:

```env
VITE_GITHUB_TOKEN=your_personal_access_token
```

Then run the dev server:

```bash
npm run dev
```

## 🚀 Usage
- Launches on the Home page, showing GitHub users one at a time  
- Click 🟩 to accept and save them  
- Click 🟥 to reject and load the next  
- Use the nav bar to switch to Potential Candidates  
- Data is saved with `localStorage` and survives refresh  

## 📡 Deployment
App is hosted on Render using Node 20

**Build command:**
```bash
npm run build
```

**Start command:**
```bash
npm run preview
```

**Add this to `render.yaml`:**
```yaml
build:
  environment:
    nodeVersion: 20.11.1
```

Set `VITE_GITHUB_TOKEN` in your Render environment variables.

## ✨ Features
- 🔍 Real-time GitHub user fetching  
- 🟩/🟥 Accept or reject with one click  
- 💾 Persistent data via localStorage  
- 📱 Fully mobile-first, responsive layout  
- 🌒 Maintains clean dark mode  
- 📊 (Optional) Sorting and filtering logic  
- 🎨 Hover effects and animated transitions  

## 🧠 Future Ideas
- 👉 Swipe gesture support for touch  
- 🏷️ Add notes or labels to saved candidates  
- 📤 Export saved profiles  
- 🌐 Advanced GitHub search query support  
- 🤖 Recommendation engine powered by activity  

## 🙌 Credits
- Starter provided by edX  
- GitHub REST API  
- Built with React, Vite, TypeScript  
- Styled with custom CSS  
- README written with ☕️ and determination  

## 📄 License
Licensed under the MIT License  
“Swipe right on your next star developer.” — The GitHired Team
