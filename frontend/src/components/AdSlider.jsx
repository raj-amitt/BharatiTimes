import { useState, useEffect } from "react";

const AdSlider = () => {
  const ads = ["../../ad1.jpg", "../../ad2.jpg", "../../ad3.jpg"];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ads.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + ads.length) % ads.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ads.length);
    }, 5000);

    return () => clearInterval(interval); 
  }, [ads.length]);

  return (
    <div className="slider-container">
      <div className="slider">
        <img
          src={ads[currentIndex]}
          alt={`Ad ${currentIndex + 1}`}
          className="slider-image"
        />
      </div>
      <button className="prev-btn" onClick={handlePrev}>
        ‹
      </button>
      <button className="next-btn" onClick={handleNext}>
        ›
      </button>
    </div>
  );
};

export default AdSlider;
