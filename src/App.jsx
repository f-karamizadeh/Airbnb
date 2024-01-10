import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/Card";
import { createClient } from "contentful";

function App() {
  const client = createClient({
    space: "hxtsxz7l061e",
    accessToken: "utvoLJo4pyoCkWGeUmeSYnzcrucNPDnqIi1oaCKa0yw",
  });

  const [entries, setEntries] = useState([]);

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        setEntries(response.items[1].fields.accommodations);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <Header />
      <Card />
      <Footer />
    </>
  );
}

export default App;
