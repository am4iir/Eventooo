-- Create database (run this separately if needed)
-- CREATE DATABASE eventoo_db;

-- Connect to the database and create the events table
CREATE TABLE IF NOT EXISTS events (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  location VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO events (title, date, location, description) VALUES
  ('ورشة برمجة', '2025-11-10', 'قاعة 3', 'ورشة عمل حول تطوير الويب'),
  ('مسابقة ثقافية', '2025-11-15', 'المسرح', 'مسابقة ثقافية للطلاب');

