import React from "react";
import "./Card.css";
import Slider from "./Slider.jsx";

export default function Card({ entries }) {
  if (!entries || !entries.unterkuenfte || entries.unterkuenfte.length === 0) {
    return <div>loading...</div>;
  }

  const unterkunftArray = entries.unterkuenfte;
  return (
    <div className="auto-rows-auto	grid-container">
      {unterkunftArray.map((unterkunft) => (
        <Slider key={unterkunft.id} unterkunft={unterkunft} />
      ))}
    </div>
  );
}
