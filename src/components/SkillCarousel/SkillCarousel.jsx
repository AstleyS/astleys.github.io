import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './SkillCarousel.css';

const SkillCarousel = ({ title, skillLogos }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const scroll = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 1;
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
          carouselRef.current.scrollLeft = 0;
        }
      }
    };
    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">{title}</h2>
      <div className="carousel-wrapper" ref={carouselRef}>
        <div className="carousel-track">
          {[...skillLogos, ...skillLogos].map((logo, index) => (
            <motion.img
              key={index}
              src={logo.url}
              alt={logo.alt}
              className="carousel-logo"
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCarousel;