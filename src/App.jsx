import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/footer";
import Card from "./components/Card";
import Details from "./components/Details";
import { createClient } from "contentful";
import { Routes, Route } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function App() {
  const client = createClient({
    space: "hxtsxz7l061e",
    accessToken: "utvoLJo4pyoCkWGeUmeSYnzcrucNPDnqIi1oaCKa0yw",
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const [entries, setEntries] = useState([]);

  const ortFilter = searchParams.get("ort");

  useEffect(() => {
    setLoading(true);
    client
      .getEntries()
      .then((response) => {
        setEntries(response.items[0].fields.accommodations.unterkuenfte);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  const filteredEntries = ortFilter
    ? entries.filter((entry) => entry.ort === ortFilter)
    : entries;

  return (
    <>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Card entries={filteredEntries} />} />
          <Route path="details/:id" element={<Details entries={entries} />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
