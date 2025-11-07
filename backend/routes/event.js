import { Router } from "express";
import { getPool } from "../db.js";

const router = Router();
// GET /api/events
router.get('/', async (req, res) => {
  try {
    const pool = await getPool();
    const result = await pool.query('SELECT * FROM events ORDER BY date ASC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/events
router.post('/', async (req, res) => {
  const pool = await getPool();
  const { title, description, date, location } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO events (title, description, date, location) VALUES ($1, $2, $3, $4) RETURNING *',
      [title, description, date, location]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;