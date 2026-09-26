# FLIXUP-CLONE
FlixUp is a full-stack Netflix clone featuring a sleek React frontend built with Vite and an Express backend. It includes secure mock authentication and responsive CSS styling.

# 🍿 FlixUp - Watch TV Shows & Movies Online (Coming Soon!)

**FlixUp** is a full-stack, Netflix-inspired streaming web platform application built using a decoupled architecture. It features a modern user interface frontend powered by React, Vite, and CSS3, interacting with a secure Node.js/Express backend server framework.

---

## 📁 Full-Stack Project Structure

The repository is cleanly divided into standalone server and client environments as detailed below:

flixup-root/
├── backend/
│   ├── node_modules/       # Server dependency distribution assets
│   ├── .gitignore          # Backend environment ignores
│   ├── package-lock.json   # Server lockfile manifest
│   ├── package.json        # Backend dependencies & boot scripts
│   └── server.js           # Core Express server & Mock Auth API routes
│
├── frontend/
│   ├── node_modules/       # Client dependency distribution assets
│   ├── src/
│   │   ├── components/
│   │   │   └── LoginForm.jsx   # Input validated authentication form component
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx   # Main authenticated content layout view
│   │   │   └── Login.jsx       # Landing frame container (FLIXUP branded)
│   │   ├── App.css         # Global user interface style properties
│   │   ├── App.jsx         # Component routing maps & route guard parameters
│   │   ├── index.css       # Baseline styling resets
│   │   └── main.jsx        # Client app virtual DOM engine mount entry point
│   ├── .gitignore          # Client-side configuration ignoring rules
│   ├── eslint.config.js    # Code quality syntax analysis guidelines
│   ├── index.html          # Core document anchor window template layout
│   ├── package-lock.json   # Frontend production package lock snapshot
│   ├── package.json        # Frontend dependency records & Vite commands
│   └── vite.config.js      # Vite compilation configuration & API server proxies
│
└── vercel.json             # Global application cloud deployment parameters
```

---

## 🚀 Execution & Running Instructions

To launch the entire platform environment, you must run both the server ecosystem and the development compiler pipeline simultaneously in separate workspace terminals.

### 1. Initialize and Start the Backend Server
Navigate into the backend workspace directory, provision required components, and boot the server application script:
```bash
cd backend
npm install
node server.js
```
*The simulated API gateway instance will boot directly up on **http://localhost:5000**.*

### 2. Initialize and Start the Frontend Application
Open a secondary terminal console split panel, target the client folder, bind internal packages, and run the hot-reloading development compiler:
```bash
cd frontend
npm install
npm run dev
```
*The Vite development instance will deploy your interface directly to: **http://localhost:5173**.*

---

## 🔐 Credentials Management (Mock Login)

The backend layer utilizes a secure sandbox environment check for logging user access attempts. To successfully bypass validation screens during interface runtime inspections, use these specific parameters:
* **Email User Target:** `login@example.com`
* **Secure Access Key Pass:** `Flixup@3116` *(Ensure case-sensitivity rules match exactly)*

---

## ⚙️ Vite API Reverse Proxy Binding Configuration

To guarantee unified resource path resolutions without triggering Cross-Origin Resource Sharing (CORS) exceptions across local tracking domains, the client configuration handles internal system proxying inside `frontend/vite.config.js`:

javascript
server: {
  proxy: {
    "/api": {
      target: "http://localhost:5000",
      changeOrigin: true,
    },
  },
}

## 🛠️ Technology Stack Ecosystem

* **Frontend Engine Layer:** React.js (Vite Build Core Bundle Wrapper)
* **Application API Layer:** Axios / Node.js Express Framework Runtime
* **Style Mechanics Architecture:** Flexbox layout grids via standard semantic CSS3 sheets
* **Deployment Orchestration Engine:** Multi-stage Vercel Cloud Serverless targets
