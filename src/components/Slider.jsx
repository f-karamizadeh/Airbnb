import React, { useState } from "react";
import * as Unicons from "@iconscout/react-unicons";
import { Link, useParams } from "react-router-dom";
import "./Card.css";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import image4 from "./image4.jpg";

const Slider = ({ unterkunft }) => {
  const images = unterkunft.bilder;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = (e) => {
    e.preventDefault();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = (e) => {
    e.preventDefault();
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <Link to={`/details/${unterkunft.id}`}>
        <div className="card grid-item">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="image  "
          />
          <Unicons.UilHeart className="heart" />
          {unterkunft.guest_favorite && (
            <span
              className="guestfav text-gray-600 font-semibold 
                          rounded-xl  text-sm px-2 py-0.5"
            >
              Guest favorite
            </span>
          )}
          <button
            className="absolute left-0 top-1/2   px-1 py-1 left"
            onClick={(e) => {
              prevSlide(e);
            }}
          >
            <Unicons.UilAngleLeftB className="toggle" />
          </button>
          <button
            className="absolute right-0 top-1/2  px-1 py-1  right"
            onClick={(e) => {
              nextSlide(e);
            }}
          >
            <Unicons.UilAngleRightB className="toggle" />
          </button>
          <p className="pbold">
            {unterkunft.name}, {unterkunft.ort}
          </p>{" "}
          <span className="pstar">
            <Unicons.UilFavorite className="star" /> {unterkunft.bewertung}
          </span>
          <p>{unterkunft.ausstattung.join(",")}</p>
          <p className="pdate ">7.-12. Okt. </p>
          <p className="pprice inlineblock"> {unterkunft.preis} € </p>{" "}
          <p className="inlineblock"> Nacht</p>
        </div>
      </Link>
    </>
  );
};

export default Slider;
