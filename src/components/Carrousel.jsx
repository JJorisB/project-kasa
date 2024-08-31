import React, { useState } from "react";
import "./Carrousel.css";

function Carrousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = slides.length;

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className="slide-carrousel">
      {length > 1 && (
        <p className="left-arrow" onClick={goToPrevious}>
          <img
            src={"/arrow-left.png"}
            alt="left-arrow"
            className="left-arrow-img"
          />
        </p>
      )}
      {length > 1 && (
        <p className="right-arrow" onClick={goToNext}>
          <img
            src={"/arrow-right.png"}
            alt="right-arrow"
            className="right-arrow-img"
          />
        </p>
      )}
      {slides.map((image, index) => {
        return (
          <div
            key={index}
            className={index === currentIndex ? "slider active" : "slider"}
          >
            {index === currentIndex && (
              <img src={image} alt="images-location" className="slide-images" />
            )}
            {index === currentIndex && length > 1 && (
              <span className="slide-number">
                {currentIndex + 1}/{length}
              </span>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Carrousel;
