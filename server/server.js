import express from "express";
// import data from "./data.js";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());

// app.get("/data", (req, res) => res.json(data));
app.get("/contentful", async (req, res) => {
  try {
    const contentfulData = await fetch(
      "https://cdn.contentful.com/spaces/hxtsxz7l061e/entries?access_token=utvoLJo4pyoCkWGeUmeSYnzcrucNPDnqIi1oaCKa0yw"
    );
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
