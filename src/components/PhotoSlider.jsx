import React, { useState, useEffect } from 'react';
import './PhotoSlider.css'; 

const PhotoSlider = ({ images }) => {
  const [startX, setStartX] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === 8 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);


  // const handleTouchStart = (e) => {
  //   setStartX(e.touches[0].clientX);
  // };

  // const handleTouchMove = (e) => {
  //   if (!startX) return;
  //   const currentX = e.touches[0].clientX;
  //   const difference = startX - currentX;
  //   if (difference > 50) {
  //     nextSlide();
  //   } else if (difference < -50) {
  //     prevSlide();
  //   }
  // };

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
    console.log(index);
  };

  return (
    <div
      className="slider-container"
      // onTouchStart={handleTouchStart}
      // onTouchMove={handleTouchMove}
      
    >
      <div className="slider-wrapper">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={image} alt={`slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
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
