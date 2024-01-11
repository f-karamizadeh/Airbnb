import React, { useState } from "react";
import * as Unicons from '@iconscout/react-unicons';
import "./Card.css";
import image1 from "./image1.jpg"
import image2 from "./image2.jpg"
import image3 from "./image3.jpg"
import image4 from "./image4.jpg"

const Slider = () => {
  const images = [image1, image2, image3, image4];
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
    <>
    <div className="card grid-item">
            <img 
              src={images[currentIndex]}
              alt={`Slide ${currentIndex}`}
              className="image  "
          />
          <Unicons.UilHeart className="heart"/>
          <span className="guestfav text-gray-600 font-semibold 
                          rounded-xl  text-sm px-2 py-0.5">Guest favorite</span>
      <button
        className="absolute left-0 top-1/2   px-1 py-1 left"
        onClick={prevSlide}
      >
        <Unicons.UilAngleLeftB className="toggle"/>
      </button>
      
      <button
        className="absolute right-0 top-1/2  px-1 py-1  right"
        onClick={nextSlide}
      >
        <Unicons.UilAngleRightB className="toggle"/>
      </button>
      <p className="pbold">Tiny House Berlin , Königreich </p> <span className="pstar"><Unicons.UilFavorite className="star"/>  4,94</span>
      <p>2 Gäste1 Schlafzimmer1 Bett1 Badezimmer</p>
      <p className="pdate ">7.-12. Okt.</p>
      <p className="pprice inlineblock"> 231 € </p> <p className="inlineblock"> Nacht</p>
       
    </div>
    
    </>
  );
};

export default Slider;