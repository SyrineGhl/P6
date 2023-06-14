import React, { useState } from "react";

const Slideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="slideshow">
      <button className="slideshow-button prev-button" onClick={handlePreviousImage}>
        <span>&lt;</span> {/* Icône de flèche précédente */}
      </button>
      <img className="slideshow-image" src={images[currentImageIndex]} alt="Slideshow" />
      <button className="slideshow-button next-button" onClick={handleNextImage}>
        <span>&gt;</span> {/* Icône de flèche suivante */}
      </button>
    </div>
  );
};

export default Slideshow;
