import express from "express";
import pool from "./db/database.js";
// import data from "./data.js";
import cors from "cors";
//import api from "./api.js";
import router from "./routes/unterkuenfte.js";
import imgRouter from "./routes/images.js";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());
app.use("/", router);
app.use("/", imgRouter);

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
      const result = await pool.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password]);

      
      if (result.rows.length > 0) {
          res.json({ success: true });
      } else {
          res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
  } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
