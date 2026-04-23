# 🔢 TICKET-18 — Counter Component Collection

> A collection of three progressively complex React counter components demonstrating `useState` mastery, styled with Tailwind CSS.

![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Components](#components)
- [Key Concepts](#key-concepts)
- [Assignment Info](#assignment-info)
- [License](#license)

---

## Overview

This project was built as part of **TICKET-18** — a React fundamentals assignment focused on `useState` hook mastery. It contains three standalone counter components, each increasing in complexity, all assembled into a single responsive dashboard.

---

## Features

| Component | Features |
|---|---|
| **Basic Counter** | Increment, decrement, reset |
| **Limited Counter** | Min/max bounds, disabled buttons, progress bar, status badges |
| **Multiple Counters** | Dynamic array state, add/remove counters, independent values, live total |

---

## Tech Stack

| Technology | Version | Role |
|---|---|---|
| [React](https://react.dev/) | 19.x | UI library |
| [Vite](https://vitejs.dev/) | 6.x | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Utility-first styling |
| [@tailwindcss/vite](https://tailwindcss.com/docs/installation/using-vite) | 4.x | Tailwind Vite integration |
| JavaScript | ES6+ | Core language |
| Node.js | 18+ | Runtime |

---

## Project Structure

```
TICKET-18/
├── src/
│   ├── App.jsx               # Root component — assembles all 3 counters
│   ├── BasicCounter.jsx      # Component 1 — simple increment/decrement/reset
│   ├── LimitedCounter.jsx    # Component 2 — bounded counter with progress bar
│   ├── MultipleCounters.jsx  # Component 3 — dynamic array of counters
│   ├── index.css             # Tailwind import
│   └── main.jsx              # React entry point
├── public/
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/ticket-18-counter-collection.git

# 2. Navigate into the project
cd ticket-18-counter-collection

# 3. Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Components

### 1. `BasicCounter`

The simplest counter — demonstrates core `useState` with direct state updates.

```jsx
const [count, setCount] = useState(0)

<button onClick={() => setCount(count + 1)}>+</button>
<button onClick={() => setCount(count - 1)}>−</button>
<button onClick={() => setCount(0)}>Reset</button>
```

---

### 2. `LimitedCounter`

Introduces boundary logic, derived values, and conditional UI rendering.

```jsx
const MIN = 0
const MAX = 10
const [count, setCount] = useState(0)

// Progress derived from state — no extra useState needed
const progress = ((count - MIN) / (MAX - MIN)) * 100

// Buttons disabled at limits
<button onClick={increment} disabled={count === MAX}>+</button>
<button onClick={decrement} disabled={count === MIN}>−</button>
```

---

### 3. `MultipleCounters`

The most complex component — state is an **array of objects**. Demonstrates immutable array patterns.

```jsx
const [counters, setCounters] = useState([
  { id: 1, label: 'Counter A', value: 0 },
])

// Add — spread existing array, append new object
const addCounter = () => setCounters([...counters, { id: Date.now(), ... }])

// Remove — filter by id (immutable)
const removeCounter = (id) => setCounters(counters.filter(c => c.id !== id))

// Update — map + spread (immutable)
const updateCounter = (id, delta) =>
  setCounters(counters.map(c => c.id === id ? { ...c, value: c.value + delta } : c))

// Derived total — no separate state needed
const total = counters.reduce((sum, c) => sum + c.value, 0)
```

---

## Key Concepts

| Concept | Where Applied |
|---|---|
| `useState` hook | All 3 components |
| Controlled state updates | `setCount`, `setCounters` never mutate directly |
| Derived state | `progress` in LimitedCounter, `total` in MultipleCounters |
| Immutable array patterns | `.map()` + spread, `.filter()` in MultipleCounters |
| Conditional rendering | Status badges in LimitedCounter |
| Conditional className | Dynamic text color on count display |
| Disabled button state | `disabled={count === MAX}` in LimitedCounter |
| `Date.now()` as unique ID | New counter creation in MultipleCounters |
| Responsive layout | `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` in App |

---

## Assignment Info

| Field | Details |
|---|---|
| Ticket | TICKET-18 |
| Type | Individual Task |
| Assigned | Week 5 — Tuesday |
| Due | Week 5 — Friday, 5:00 PM |
| Points | 12.5 |

### Submission

```
TICKET-18 Submission
Name: ABOI SAMSON ABOI 
GitHub: [Repository URL]
Screenshot: [Show all 3 counters]
Features: ✅ Basic  ✅ Limited  ✅ Multiple
```

---

## License

This project is open source and available under the [MIT License](LICENSE).
