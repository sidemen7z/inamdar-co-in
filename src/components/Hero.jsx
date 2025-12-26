import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/img/slider1.webp',
      title: 'Premium Financial Services',
      subtitle: 'Expert Guidance for Your Business Success',
    },
    {
      image: '/img/slider2.webp',
      title: 'Comprehensive Business Solutions',
      subtitle: 'From Registration to Compliance',
    },
    {
      image: '/img/slider3.webp',
      title: 'Trusted by Thousands',
      subtitle: 'Your Partner in Financial Excellence',
    },
    {
      image: '/img/slider4.webp',
      title: 'Professional Excellence',
      subtitle: 'Delivering Quality Services Since Day One',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroSlider}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.heroSlide} ${index === currentSlide ? styles.active : ''}`}
            style={{ 
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className={styles.heroOverlay}></div>
            <div className={styles.heroContent}>
              <div className="container">
                <div className={`${styles.heroText} fade-in-up`}>
                  <h1 className={styles.heroTitle}>{slide.title}</h1>
                  <p className={styles.heroSubtitle}>{slide.subtitle}</p>
                  <div className={styles.heroCta}>
                    <Link to="/#services" className={`${styles.btn} ${styles.btnPrimary}`}>
                      Explore Services
                    </Link>
                    <a href="tel:+919552319748" className={`${styles.btn} ${styles.btnOutline}`}>
                      <i className="fas fa-phone"></i>
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.heroIndicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

