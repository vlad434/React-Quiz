# ⚛️ React Quiz App

A fast and modern quiz application built with **React 19**, **TypeScript**, and **Vite 6**. It challenges your knowledge of React concepts through a timed multiple-choice quiz, with real-time scoring and visual feedback.

---

## Features

- Multiple-choice questions loaded dynamically
- Countdown timer with automatic game end
- Real-time progress indicator and score tracking
- Highscore tracking between attempts
- Restart functionality
- Built with functional components and `useReducer`
- Fully typed with TypeScript
- Mocked backend via `json-server`

---

## Tech Stack

| Technology      | Role                            |
| --------------- | ------------------------------- |
| **React 19**    | Core UI framework               |
| **TypeScript**  | Type safety and autocompletion  |
| **Vite 6**      | Ultra-fast dev environment      |
| **json-server** | Mock API for quiz questions     |
| **ESLint**      | Code linting and best practices |

---

### 1. Install & Run

npm install

### 2. Start the local JSON server

npm run server

### 3. Start the dev server

npm run dev

🧪 How It Works

The app fetches a list of questions from a mocked API (via json-server)

The user answers each question — their answers are scored

A timer runs and ends the quiz if it reaches zero

The UI displays a performance summary, with a motivational emoji

User can restart the quiz and try to beat the highscore

Project Structure

```ts
React-Quiz/
│
├── public/               # Static files
│
├── src/
│   ├── components/       # React components
│   │   ├── Home.jsx
│   │   ├── QuestionCard.jsx
│   │   └── Score.jsx
│   │
│   ├── data/             # Static JSON files (backup questions)
│   │   └── questions.json
│   │
│   ├── App.jsx           # Root component with routing
│   ├── main.jsx          # Entry point
│   └── index.css         # Styles
│
├── db.json               # JSON Server mock API data
├── package.json          # Dependencies and scripts
└── vite.config.js        # Vite configuration
```

### Technologies Used

- React
- React Router DOM
- Vite
- JSON Server
- TailwindCSS

### API Mock (JSON Server)

The quiz data is served from a local endpoint powered by JSON Server.

Endpoint: http://localhost:3001/questions
