// backend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import eventsRouter from "./routes/event.js";
import { getPool } from "./db.js";

// const pool = require('./config/db'); // Commented out for now - using in-memory data
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// In-memory data storage (temporary solution until PostgreSQL is set up)




app.listen(PORT, async () => {
  await getPool().then(() => {
    console.log("Database successfully connected ");
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  
});
app.use('/api/events', eventsRouter);