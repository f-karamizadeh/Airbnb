import { useState } from "react";
import "./Card.css";
import Slider from "./Slider.jsx";
import ClipLoader from "react-spinners/ClipLoader";
import { Link, useSearchParams } from "react-router-dom";
import * as Unicons from "@iconscout/react-unicons";

export default function Card({ entries }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const typeFilter = searchParams.get("type");

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

  const displayedUnterkunft = typeFilter
    ? unterkunftArray.filter((unterkunft) => unterkunft.type === typeFilter)
    : unterkunftArray;

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <>
      <div className="flex justify-center gap-5 items-center mt-4 -mb-6">
        <button
          onClick={() => handleFilterChange("type", "city")}
          className={`simple
            ${typeFilter === "city" ? "border-b-2 border-gray-600" : ""}`}
        >
          <Unicons.UilBuilding size={30} />
          <p>City</p>
        </button>
        <button
          onClick={() => handleFilterChange("type", "nature")}
          className={`flex flex-col items-center 
            ${typeFilter === "nature" ? "border-b-2 border-gray-600" : ""}`}
        >
          <Unicons.UilTrees size={30} />
          <p>Nature</p>
        </button>
        <button
          onClick={() => handleFilterChange("type", "tiny")}
          className={`
            ${typeFilter === "tiny" ? "border-b-2 border-gray-600" : ""}`}
        >
          <Unicons.UilHome size={30} />
          <p>Tiny</p>
        </button>

        <button
          onClick={() => handleFilterChange("type", null)}
          className={`justify-self-auto ${
            typeFilter
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          Clear filter
        </button>
      </div>
      <div className="auto-rows-auto	grid-container">
        {displayedUnterkunft.map((unterkunft) => (
          <Slider key={unterkunft.id} unterkunft={unterkunft} />
        ))}
      </div>
    </>
  );
}
