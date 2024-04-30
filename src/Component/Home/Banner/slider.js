// components/Slider.js
import { useState, useEffect } from 'react';
import styles from '../../../styles/Style.module.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   let intervalId;
  
  //   if (slides.length > 1) {
  //     intervalId = setInterval(() => {
  //       setCurrentSlide((prevSlide) => {
  //         // Check if it's not the last slide
  //         if (prevSlide < slides.length - 1) {
  //           return prevSlide + 1;
  //         } else {
  //           // Reverse the order of slides and return to start from the first slide
  //           // const reversedSlides = slides.map((slide) => ({ ...slide })).reverse();
  //           // return reversedSlides.length;
  //            // Start from the first slide
  //            return 0
  //         }
  //       });
  //     }, 3000);
  //   }
  
  //   return () => clearInterval(intervalId);
  // }, [slides.length]);
  // useEffect(() => {
  //   if (slides.length <= 1) {
  //     setCurrentSlide(0);
  //   }
  // }, [slides.length]);

  return (
    <div className={styles.slider}>
      <div className={styles.slides} style={{ transform: `translatex(-${currentSlide * 100}%)` }}>
    
        <Splide aria-label="My Favorite Images"  options={ {
        perPage: 1,
        type   : 'loop',
        autoplay: true,
        interval: 3000,
        pagination:false,
        arrows:false,
      } }
    > 
          {slides.map((slide, index) => (
            <SplideSlide className='w-100' key={index}>
                <div  className={styles.slide}>
                  {slide}
                </div>
            </SplideSlide>
          ))}
           
          </Splide>
      </div>
    </div>
  );
};

export default Slider;
