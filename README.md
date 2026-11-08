# 🎪 Eventoo — University Club Event Platform

A full-stack web platform for discovering and managing university club events.

> University team project — work in progress. The event API and the main frontend screens are implemented; authentication and the admin flow are being integrated.

---

## Features

- 🏠 **Landing page** with hero, categories and featured events
- 📅 **Events listing** fetched from the API
- ➕ **Create events** through a REST endpoint
- 🔐 **Authentication UI** with Clerk (frontend)
- 🎨 **Modern UI** — Tailwind CSS 4, GSAP and Three.js animations
- 📱 **Responsive design**
- 🆘 **Help center** page

---

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite, React Router 7, Tailwind CSS 4, Clerk |
| Animations | GSAP, Three.js, OGL |
| Backend | Node.js, Express 5, PostgreSQL (`pg`), Helmet, CORS |
| Database | PostgreSQL (schema in `database/`) |

---

## Project structure

```
.
├── frontend/            # React + Vite app
│   └── src/
│       ├── components/
│       └── screens/
├── backend/             # Express API
│   ├── routes/event.js  # GET/POST /api/events
│   ├── db.js            # PostgreSQL pool
│   └── server.js
└── database/            # SQL schema and seed data
```

---

## Getting started

### 1. Database

Create a PostgreSQL database and run the schema:

```bash
psql -U postgres -d eventoo -f database/eventDBB.sql
```

### 2. Backend

```bash
cd backend
npm install
```

Create `backend/.env`:

```env
PORT=3000
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=eventoo
```

Run it:

```bash
npm run dev
```

The API starts on `http://localhost:3000` and exposes `GET/POST /api/events`.

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

Create `frontend/.env` if you use Clerk:

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
```

The app starts on `http://localhost:5173`.

---

## API

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/events` | List all events ordered by date |
| `POST` | `/api/events` | Create an event (`title`, `description`, `date`, `location`) |

---

## Roadmap

- [ ] Complete JWT authentication on the backend
- [ ] Event registration and ticketing
- [ ] Admin dashboard for clubs
- [ ] Real-time updates with Socket.io
- [ ] Deploy frontend and API

---

## Team

University team project. See the commit history for contributors.

---

## License

MIT — see the [LICENSE](LICENSE) file.
