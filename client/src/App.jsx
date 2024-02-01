import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Details from "./components/Details";
import Create from "./components/Create";
import Login from "./components/Login";
import { createClient } from "contentful";
import { Routes, Route } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

function App() {
  // const client = createClient({
  //   space: "hxtsxz7l061e",
  //   accessToken: "utvoLJo4pyoCkWGeUmeSYnzcrucNPDnqIi1oaCKa0yw",
  // });
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const [entries, setEntries] = useState([]);

  const ortFilter = searchParams.get("ort");

  // useEffect(() => {
  //   setLoading(true);
  //   client
  //     .getEntries()
  //     .then((response) => {
  //       setEntries(response.items[0].fields.accommodations.unterkuenfte);
  //       setLoading(false);
  //     })
  //     .catch(console.error);
  // }, []);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const res = await fetch("https://bootbnb.onrender.com/")
        const data = await res.json()
        setEntries(data)
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);


  const filteredEntries = ortFilter
    ? entries.filter(
        (entry) => entry.ort.toLowerCase() === ortFilter.toLocaleLowerCase()
      )
    : entries;

  return (
    <>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Card entries={filteredEntries} />} />
          <Route path="details/:id" element={<Details entries={entries} />} />
          <Route path="login" element={<Login />} />  
          <Route path="create" element={<Create />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
