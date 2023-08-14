import React, { useState } from "react";
import  '../components/Intro.css'

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevious = () => {
    setCurrentSlide(currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide + 1);
  };

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${currentSlide === index ? "active" : ""}`}
        >
          <img src={image.src} alt={image.alt} className={image.className} />
        </div>
      ))}
      <div className="navigation">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

const images = [
  {
    src: "https://picsum.photos/id/100/200",
    alt: "Image 1",
    className: "my-class",
  },
  {
    src: "https://picsum.photos/id/8/400",
    alt: "Image 2",
    className: "my-class",
  },
  {
    src: "D:\project90\Sayansi\frontend\sayansi\src\app\background.jpg",
    alt: "Image 3",
    className: "my-class",
  },
];

export default Carousel;
