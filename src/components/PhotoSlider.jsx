import React, { useState } from 'react';
import './PhotoSlider.css'; // Import CSS for styling

const PhotoSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        {images.map((image, index) => (
          <div
            key={index}
            className={
              index === currentIndex
                ? 'slide active'
                : index === currentIndex - 1 ||
                  (currentIndex === 0 && index === images.length - 1)
                ? 'slide prev'
                : 'slide next'
            }
          >
            <img src={image} alt={`slide ${index}`} />
          </div>
        ))}
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
      <div className="indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? 'indicator active' : 'indicator'}
            onClick={() => handleIndicatorClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default PhotoSlider;
