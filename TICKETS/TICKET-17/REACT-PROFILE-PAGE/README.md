# React Profile Page — Ticket-17

A personal profile page built with React and Vite, showcasing reusable components and props-driven data flow.

---

## 🚀 Getting Started

**Install dependencies:**

```bash
npm install
```

**Start the development server:**

```bash
npm run dev
```

**Open in browser:**

```
http://localhost:5173
```

---

## 🗂️ File Structure

```
src/
├── assets/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   └── Interest.jsx
│   ├── image/
│   │   └── profile.jpg
│   └── styles/
├── App.jsx
├── App.css
└── main.jsx
```

---

## 📦 Components

### `Header`

Displays the profile picture, name, and tagline at the top of the page.

| Prop | Type | Description |
|------|------|-------------|
| `name` | string | Full name |
| `tagline` | string | Short personal tagline |
| `avatar` | image | Imported local image |

---

### `About`

Shows a bio paragraph, location, and list of interests.

| Prop | Type | Description |
|------|------|-------------|
| `bio` | string | Personal biography |
| `location` | string | Current city and country |
| `interests` | array | List of interest strings |

---

### `Skills`

Renders a list of skills with visual progress bar indicators.

| Prop | Type | Description |
|------|------|-------------|
| `skills` | array | Array of `{ name, percentage }` objects |

---

### `Interests`

Displays hobbies as a grid of cards with icons and descriptions.

| Prop | Type | Description |
|------|------|-------------|
| `hobbies` | array | Array of `{ title, icon, description }` objects |

---

## ✅ Requirements Met

- [x] 4 separate components in their own files
- [x] All data passed via props from `App.jsx`
- [x] Props destructured in every component
- [x] Local image imported and used as avatar
- [x] Lists rendered with `.map()` and `key` prop
- [x] No console errors or warnings
- [x] CSS styling applied

---

## 📤 Submission

```
TICKET-17 Submission
Name: Aboi Samson Aboi
GitHub: [Repository URL]
Screenshot: [Attach profile page screenshot]
Components: ✅ Header ✅ About ✅ Skills ✅ Interests


---
