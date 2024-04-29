// components/Slider.js
import { useState, useEffect } from 'react';
import styles from '../../../styles/Style.module.scss';

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    let intervalId;
  
    if (slides.length > 1) {
      intervalId = setInterval(() => {
        setCurrentSlide((prevSlide) => {
          // Check if it's not the last slide
          if (prevSlide < slides.length - 1) {
            return prevSlide + 1;
          } else {
            // Reverse the order of slides and return to start from the first slide
            const reversedSlides = slides.map((slide) => ({ ...slide })).reverse();
            return reversedSlides.length; // Start from the first slide
          }
        });
      }, 3000);
    }
  
    return () => clearInterval(intervalId);
  }, [slides.length]);
  // Handle manual scrolling to the first slide if there are no more slides
  useEffect(() => {
    if (slides.length <= 1) {
      setCurrentSlide(0);
    }
  }, [slides.length]);

  return (
    <div className={styles.slider}>
      <div className={styles.slides} style={{ transform: `translatex(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className={styles.slide}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
