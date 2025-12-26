import React from 'react';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <div className={styles.aboutContent}>
          <div className={styles.aboutImage}>
            <img 
              src="/img/about-1.png" 
              alt="About Inamdar & Co."
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
          <div className={styles.aboutText}>
            <h2 className={styles.aboutTitle}>About Inamdar & Co.</h2>
            <p className={styles.aboutDescription}>
              Pioneering the industry for over a decade, we equip businesses with affordable resources 
              and expert guidance to meet their goals. Backed by visionary investors, we have the 
              foundation to continuously innovate and deliver exactly what businesses need to succeed.
            </p>
            <p className={styles.aboutDescription}>
              Our team of experienced professionals is dedicated to providing comprehensive financial 
              and business solutions with transparency, integrity, and excellence.
            </p>
            <div className={styles.aboutStats}>
              <div className={styles.statItem}>
                <h3>10+</h3>
                <p>Years of Experience</p>
              </div>
              <div className={styles.statItem}>
                <h3>1000+</h3>
                <p>Happy Clients</p>
              </div>
              <div className={styles.statItem}>
                <h3>50+</h3>
                <p>Expert Team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

