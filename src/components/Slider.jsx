import React, { useState } from "react";
import * as Unicons from "@iconscout/react-unicons";
import "./Card.css";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import image4 from "./image4.jpg";

const Slider = ({ entries }) => {
  if (!entries || !entries.unterkuenfte || entries.unterkuenfte.length === 0) {
    console.log(entries);
    return <div>loading...</div>;
  }
  const images = entries.unterkuenfte[0].bilder;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="card">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="image  "
      />

      <button
        className="absolute left-0 top-1/2   px-1 py-1 left"
        onClick={prevSlide}
      >
        <Unicons.UilAngleLeftB />
      </button>

      <button
        className="absolute right-0 top-1/2  px-1 py-1  right"
        onClick={nextSlide}
      >
        <Unicons.UilAngleRightB />
      </button>
      <p className="pbold">Tiny House in Drimnin, Vereinigtes Königreich</p>
      <p>2 Gäste1 Schlafzimmer1 Bett1 Badezimmer</p>
      <p className="pdate">7.-12. Okt.</p>
      <p className="pprice">
        {" "}
        231 € <p>Nacht</p>{" "}
      </p>
    </div>
  );
};

export default Slider;
