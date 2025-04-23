# 📝 Articles Application

A full-featured articles management app built with **React + TypeScript + Vite**, following the **Feature-Sliced Design (FSD)** architecture pattern. It allows users to **create**, **read**, **update**, and **delete** articles, with data persistence via **JSON Server**.

---

## 🚀 Tech Stack

- ⚡ **Vite** – blazing fast build tool
- ⚛️ **React** – modern UI library
- 🔷 **TypeScript** – typed JavaScript
- 🧠 **Redux Toolkit** – for state management
- 🧾 **React Hook Form** – for efficient form handling
- 💅 **shadcn/ui** – for accessible and beautiful UI components
- 🧱 **Feature-Sliced Design (FSD)** – scalable architecture for React apps
- 🗃 **JSON Server** – mock REST API backend for development

---

## 📂 Project Structure (FSD)

The app follows the **Feature-Sliced Design** methodology. Core layers include:

```
src/
├── app/                # App bootstrap & configuration
├── entities/           # Reusable domain models (e.g., Article)
├── features/           # Business-level features (e.g., ArticleCRUD)
├── shared/             # Shared utils, UI components, styles
├── pages/              # Page-level components with layout
└── widgets/            # UI building blocks (e.g., ArticleList)
```

---

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/mahmodjwily/FSD---Feature-Sliced-Design.git
cd FSD---Feature-Sliced-Design
```

2. **Install dependencies**

```bash
npm install
```

---

## 🛠 Development

Start both the frontend and the backend in separate terminals:

### 1. Start the Vite development server (Frontend)

```bash
npm run dev
# App runs on http://localhost:5173
```

### 2. Start JSON Server (Mock Backend)

```bash
npm run server
# JSON Server runs on http://localhost:3000
```

---

## 📃 Available Scripts

| Script           | Description                         |
| ---------------- | ----------------------------------- |
| `npm run dev`    | Starts Vite dev server on port 5173 |
| `npm run server` | Runs JSON Server on port 3000       |
| `npm run build`  | Builds the app for production       |
| `npm run lint`   | Runs ESLint checks                  |

---

## ✅ ESLint & Type-Aware Linting

To enhance code quality and maintainability, this project uses `@typescript-eslint` with type-aware linting.

**Recommended config:**

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    // Optional stricter or stylistic rules:
    // ...tseslint.configs.strictTypeChecked,
    // ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install React-specific lint rules:

```js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

---

## 📘 Notes

- Articles are stored and served from a `db.json` file using JSON Server.
- Forms are handled using **react-hook-form** for performance and simplicity.
- UI components follow **shadcn/ui** standards for accessibility and styling.
- The application follows a modular, scalable architecture using **FSD**.

---

## 🧪 Future Enhancements

- 🔐 Add authentication (JWT or OAuth)
- 📚 Add pagination and filtering options
- 🏷 Tag-based categorization of articles
- 💬 Add comments or reactions to articles

---

## 🔗 Live Demo

[![Live Demo](https://img.shields.io/badge/live-demo-blueviolet)](https://fsd-feature-sliced-design.vercel.app/)

Login:
- Email: test@example.com
- Password: password

---

## 📄 License

MIT License © Mahmoud Gewily
