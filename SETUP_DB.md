# 🗄️ إعداد قاعدة بيانات PostgreSQL

## 1. تثبيت PostgreSQL
- نزّل من: https://www.postgresql.org/download/
- أثناء التثبيت، اختر كلمة مرور (مثال: `postgres`)

## 2. إنشاء قاعدة البيانات
افتح **SQL Shell (psql)**، وسجّل الدخول، ثم أنفّذ:

```sql
CREATE DATABASE eventoo_db;
\c eventoo_db

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  location VARCHAR(255) NOT NULL,
  description TEXT
);