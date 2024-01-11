import React from "react";
import "./Card.css";
import Slider from "./Slider.jsx";
import test from "./image4.jpg";


export default function Card({ entries }) {
  return (
    <div class="auto-rows-auto	grid-container">
      <Slider entries={entries} />
    </div>
  );
}

