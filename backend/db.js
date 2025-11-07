import { Pool } from "pg";

let poolInstance;

export const getPool = async () => {
  try {
    if (!poolInstance) {
      poolInstance = new Pool({
        user: process.env.DB_USER,
        host: 'localhost',
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,  
        port: 5432,
      });
    }
    return poolInstance;
  } catch (err) {
    console.error('Error creating pool:', err);
    throw err;
  }
}

export const pool = new Pool({
  user: process.env.DB_USER,
  host: 'localhost',
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,  
  port: 5432,
});