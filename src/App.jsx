import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Card from './components/Card'

function App() {
  return (
    <>
      <Header />
      <Card />
      <Footer />
    </>
  );
}

export default App;
