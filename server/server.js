import express from "express";
import pool from "./db/database.js";
// import data from "./data.js";
import cors from "cors";
//import api from "./api.js";
import router from "./routes/unterkuenfte.js";
import imgRouter from "./routes/images.js";

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());
app.use("/", router);
app.use("/", imgRouter);

// app.get("/data", (req, res) => res.json(data));
// app.get("/contentful", async (req, res) => {
//   try {
//     const contentfulData = await fetch(api);
//     const data = await contentfulData.json();
//     res.json(data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Server Error");
//   }
// });

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
