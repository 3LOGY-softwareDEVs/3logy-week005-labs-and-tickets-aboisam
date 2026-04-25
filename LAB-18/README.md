# 📝 React Todo List App

A simple, clean, and fully functional Todo List application built with React and styled using Tailwind CSS.

---

## 🚀 Live Features

- ✅ Add new todos (via button click or pressing `Enter`)
- ✅ Mark todos as complete/incomplete with a checkbox
- ✅ Delete individual todos
- ✅ Filter todos by **All**, **Active**, or **Completed**
- ✅ Clear all completed todos at once
- ✅ Live counter showing remaining active items

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | 19.x | UI component library |
| [Vite](https://vitejs.dev/) | 6.x | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Utility-first CSS styling |
| [@tailwindcss/vite](https://tailwindcss.com/docs/installation/using-vite) | 4.x | Tailwind Vite plugin |
| JavaScript (ES6+) | — | Core language |
| Node.js | 18+ | Runtime environment |

---

## 📁 Project Structure

```
react-todo-app/
├── public/
├── src/
│   ├── TodoApp.jsx       # Main component (state, logic, JSX)
│   ├── main.jsx          # React entry point
│   └── index.css         # Tailwind import
├── vite.config.js        # Vite + Tailwind plugin config
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have **Node.js 18+** and **npm** installed.

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/react-todo-app.git

# 2. Navigate into the project
cd react-todo-app

# 3. Install dependencies
npm install
```

### Running the App

```bash
npm run dev
```

Then open your browser at `http://localhost:5173`

---

## 🧠 Key Concepts Used

| Concept | Where Applied |
|---|---|
| `useState` hook | Managing todos, input value, and filter state |
| Controlled inputs | Input field synced with React state |
| Array `.map()` | Rendering todo list and filter buttons |
| Array `.filter()` | Deleting todos, filtering by status |
| Spread operator `...` | Immutably updating state arrays |
| Conditional className | Strikethrough styling for completed todos |
| `onKeyDown` event | Adding todo on `Enter` key press |

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.0.0",
    "@vitejs/plugin-react": "^4.0.0",
    "tailwindcss": "^4.0.0",
    "vite": "^6.0.0"
  }
}
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
