'use client'

import React, { useState, useEffect } from 'react';
import '../app/globals.css'

const Carousel = () => {
    const images = [
        {
          "id": 1,
          "url": "https://design-habitat.nyc3.cdn.digitaloceanspaces.com/banners/bane-aditya.png",
          "name": "Pranali Bankar",
          "profile": "Cofounder & Mentor"
        },
        {
          "id": 2,
          "url": "https://design-habitat.nyc3.cdn.digitaloceanspaces.com/banners/banner-rushab.png",
          "name": "Vinayak Kulkarni",
          "profile": "Co-founder & Mentor"      
        },
        {
          "id": 3,
          "url": "https://design-habitat.nyc3.cdn.digitaloceanspaces.com/banners/banner-ssaj.png",
          "name": "Aditya Wadher",
          "profile": "Mentor"
        },
        {
          "id": 4,
          "url": "https://design-habitat.nyc3.cdn.digitaloceanspaces.com/banners/banner-vijay.png",
          "name": "Rushab Kataria",
          "profile": "Mentor"
        },
      ];  const [currentImageIndex, setCurrentImageIndex] = useState(0);

      useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 5000); // Change slide every 5 seconds
    
        return () => clearInterval(intervalId);
      }, [images]);
    
      const prevSlide = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      };
    
      const nextSlide = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      };
    
      return (
        <div className="carousel">
          <button className="prev" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="next" onClick={nextSlide}>
            &#10095;
          </button>
          {/* <div className="carousel-container">
            <div className={`carousel-slide ${currentImageIndex === 0 ? 'active' : ''}`}>
            <img src={images[0]} alt={`Slide 0`} />
            </div>
            <div className={`carousel-slide ${currentImageIndex === 1 ? 'active' : ''}`}>
            <img src={images[1]} alt={`Slide 1`} />
            </div>
            <div className={`carousel-slide ${currentImageIndex === 2 ? 'active' : ''}`}>
            <img src={images[2]} alt={`Slide 2`} />
            </div>
        </div> */}
          <div className="carousel-container">
            {images.map((image, index) => (
              <div key={index} className={`carousel-slide ${index === currentImageIndex ? 'active' : ''}`}>
                <img src={image.url} alt={`Slide ${index}`} />
              </div>
            ))}
          </div>

          {/* dots */}
          <div className="carousel-dots">
            {images.map((image, index) => (
              <span key={index} className={`dot ${index === currentImageIndex ? 'active' : ''}`} onClick={() => setCurrentImageIndex(index)}></span>
            ))}
          </div>
        </div>
      );
};

export default Carousel;
