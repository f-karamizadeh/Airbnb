import express from "express";
// import data from "./data.js";
import cors from "cors";
import api from "./api.js";

const app = express();
const PORT = 3000;

app.use(cors());

// app.get("/data", (req, res) => res.json(data));
app.get("/contentful", async (req, res) => {
  try {
    const contentfulData = await fetch(api);
    const data = await contentfulData.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
