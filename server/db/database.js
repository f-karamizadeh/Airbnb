import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
});

pool.connect((err) => {
  if (err) {
    console.log("error connecting to database", err.stack);
  } else {
    console.log("Connected to database! ♥︎");
  }
});

export default pool;
