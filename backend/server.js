// server.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json()); // لقراءة JSON من الـ requests

// مسار تجريبي
app.get('/', (req, res) => {
  res.json({ message: 'مرحباً من Eventoo Backend! ✅' });
});

// مسار تجريبي للـ events
app.get('/api/events', (req, res) => {
  res.json([
    { id: 1, title: 'ورشة برمجة', date: '2025-11-10', location: 'قاعة 3' },
    { id: 2, title: 'مسابقة ثقافية', date: '2025-11-15', location: 'المسرح' }
  ]);
});

// تشغيل الخادم
app.listen(PORT, () => {
  console.log(`🟢 الخادم يعمل على http://localhost:${PORT}`);
});

 