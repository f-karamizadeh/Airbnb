import { useState } from "react";
import "./Card.css";
import Slider from "./Slider.jsx";
import ClipLoader from "react-spinners/ClipLoader";

export default function Card({ entries }) {
  const [loading, setLoading] = useState(true);

  if (!entries || !entries.unterkuenfte || entries.unterkuenfte.length === 0) {
    return (
      <div className="flex justify-center m-10">
        <ClipLoader
          color="#44b3be"
          loading={loading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
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
