// backend/server.js
const express = require('express');
const cors = require('cors');
// const pool = require('./config/db'); // Commented out for now - using in-memory data

const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory data storage (temporary solution until PostgreSQL is set up)
let events = [
  { id: 1, title: 'ورشة برمجة', date: '2025-11-10', location: 'قاعة 3', description: 'ورشة عمل حول تطوير الويب', created_at: new Date() },
  { id: 2, title: 'مسابقة ثقافية', date: '2025-11-15', location: 'المسرح', description: 'مسابقة ثقافية للطلاب', created_at: new Date() }
];
let nextId = 3;

// GET: جلب جميع الفعاليات
app.get('/api/events', (req, res) => {
  try {
    // Sort by date
    const sortedEvents = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));
    res.json(sortedEvents);
  } catch (err) {
    console.error('Error fetching events:', err);
    res.status(500).json({ error: 'فشل في جلب البيانات' });
  }
});

// POST: إنشاء فعالية جديدة
app.post('/api/events', (req, res) => {
  const { title, date, location, description } = req.body;

  if (!title || !date || !location) {
    return res.status(400).json({ error: 'العنوان، التاريخ، والموقع مطلوبة' });
  }

  try {
    const newEvent = {
      id: nextId++,
      title,
      date,
      location,
      description: description || '',
      created_at: new Date()
    };
    events.push(newEvent);
    res.status(201).json(newEvent);
  } catch (err) {
    console.error('Error creating event:', err);
    res.status(500).json({ error: 'فشل في الحفظ' });
  }
});

// DELETE: حذف فعالية
app.delete('/api/events/:id', (req, res) => {
  const { id } = req.params;
  const eventId = parseInt(id);

  try {
    const eventIndex = events.findIndex(event => event.id === eventId);

    if (eventIndex === -1) {
      return res.status(404).json({ error: 'الفعالية غير موجودة' });
    }

    events.splice(eventIndex, 1);
    res.json({ message: 'تم حذف الفعالية بنجاح', id: eventId });
  } catch (err) {
    console.error('Error deleting event:', err);
    res.status(500).json({ error: 'فشل في الحذف' });
  }
});

app.listen(PORT, () => {
  console.log(`🟢 الخادم يعمل على http://localhost:${PORT}`);
});