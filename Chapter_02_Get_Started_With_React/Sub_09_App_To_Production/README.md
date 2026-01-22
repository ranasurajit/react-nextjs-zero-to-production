# 🚀 Taking React (Vite) App to Production

<p align="center">
  <img src="https://raw.githubusercontent.com/github/explore/main/topics/react/react.png" width="60" alt="React" />
  <img src="https://vitejs.dev/logo.svg" width="60" alt="Vite" />
  <img src="https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico" width="48" alt="Vercel" />
  <img src="https://www.netlify.com/v3/img/components/netlify-color-accent.svg" width="70" alt="Netlify" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19+-61DAFB?logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-Build%20Tool-646CFF?logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Deployed%20On-Vercel-black?logo=vercel" />
  <img src="https://img.shields.io/badge/Deployed%20On-Netlify-00C7B7?logo=netlify&logoColor=white" />
</p>

---

This section documents the process of **building and deploying a React application created with Vite** to a real production environment using **Vercel** and **Netlify**.

The goal is to understand **what actually happens when React apps go live**, not just how to run them locally.

---

## 🎯 Objectives
- Understand the **production build process** in React
- Learn how **Vite bundles and optimizes code**
- Deploy a React app to:
  - ✅ Vercel
  - ✅ Netlify
- Handle common deployment pitfalls

---

## 🛠️ Tech Stack
- React
- Vite
- Node.js
- Vercel / Netlify

---

## 📦 Production Build with Vite

### Install dependencies
```bash
npm install
```

### Create production build
```bash
npm run build
```

📁 This generates a `dist/` folder containing:
- Minified JavaScript
- Optimized CSS
- Static assets
- `index.html`

👉 **Only this `dist/` folder is deployed to production.**

---

## ▶️ Preview Production Build Locally
```bash
npm run preview
```

This simulates how the app behaves in production.

---

## 🚀 Deployment Options

## 🌐 Deploy to Vercel

### Steps
1. Push project to GitHub
2. Go to https://vercel.com
3. Import GitHub repository
4. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**

---

## 🌐 Deploy to Netlify

### Netlify UI
1. Import GitHub repository
2. Set:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
3. Deploy 🚀

---

## ⚠️ Common Deployment Issues

### Blank page after deployment
✔ Ensure build output directory is `dist`

### Routing issues
**Netlify**
```
/*    /index.html   200
```

---

## 🧠 Key Learnings
- React apps become **static assets** in production
- Vite optimizes aggressively
- CI/CD is automatic with Vercel & Netlify

---

## ✅ Completion Status
- [x] Build React app for production
- [x] Deploy to Vercel
- [x] Deploy to Netlify

---

## 🏁 Status
> ✅ Completed — React app successfully deployed to production 🚀
