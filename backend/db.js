// backend/db.js
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// اختبار الاتصال
pool.query('SELECT NOW()', (err) => {
  if (err) {
    console.error('❌ فشل الاتصال:', err.stack);
  } else {
    console.log('✅ PostgreSQL متصل!');
  }
});

module.exports = pool;