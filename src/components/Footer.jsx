import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  const usefulLinks = [
    { name: 'Start a Business', path: '/' },
    { name: 'Licence/Registration', path: '/' },
    { name: 'GST & Taxes', path: '/' },
    { name: 'Trademark', path: '/' },
  ];

  const socialLinks = [
    { icon: 'fab fa-facebook-f', url: '#' },
    { icon: 'fab fa-twitter', url: '#' },
    { icon: 'fab fa-instagram', url: '#' },
    { icon: 'fab fa-linkedin-in', url: '#' },
  ];

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>About Us</h4>
            <p className={styles.footerDescription}>
              Pioneering the industry for over a decade, we equip businesses with affordable resources and expert guidance to meet their goals. Backed by visionary investors, we have the foundation to continuously innovate and deliver exactly what businesses need to succeed.
            </p>
            <div className={styles.footerSocial}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={styles.socialLink}
                  aria-label={social.icon}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Useful Links</h4>
            <ul className={styles.footerLinks}>
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    <i className="fas fa-angle-right"></i>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Instagram</h4>
            <div className={styles.footerInstagram}>
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className={styles.instagramItem}>
                  <img
                    src={`/img/instagram-footer-${num}.jpg`}
                    alt={`Instagram ${num}`}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Contact Us</h4>
            <div className={styles.footerContact}>
              <a href="tel:+919552319748" className={styles.contactPhone}>
                <i className="fas fa-phone"></i>
                <div className={styles.contactText}>
                  <span>Call Our Experts</span>
                  <strong>+91 9552319748</strong>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerInfo}>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className={styles.infoContent}>
                <h4>Address</h4>
                <div className={styles.addressBlock}>
                  <p className={styles.addressTitle}>Head Office – Pune</p>
                  <p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Office+No+120+Konark+Mall+Beside+Bank+of+Baroda+Kondhwa+Pune+Maharashtra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.clickableLink}
                    >
                      Office No 120, Konark Mall, Beside Bank of Baroda, Kondhwa, Pune (MH)
                    </a>
                  </p>
                </div>
                <div className={styles.addressDivider}></div>
                <div className={styles.addressBlock}>
                  <p className={styles.addressTitle}>Branch Office – Bijapur</p>
                  <p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Opposite+Madina+KKGS+Road+Nisar+Mohalla+Bijapur+Karnataka"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.clickableLink}
                    >
                      Opposite Madina KKGS Road, Nisar Mohalla, Bijapur (KA)
                    </a>
                  </p>
                </div>
                <div className={styles.addressDivider}></div>
                <div className={styles.addressBlock}>
                  <p className={styles.addressTitle}>Branch Office – Solapur</p>
                  <p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Office+No+06+Rahat+Central+Park+Apartment+Siddheshwar+Peth+Solapur+Maharashtra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.clickableLink}
                    >
                      Office No 06, Rahat Central Park Apartment, Siddheshwar Peth, Solapur (MH)
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <i className="fas fa-envelope"></i>
              </div>
              <div className={styles.infoContent}>
                <h4>Mail Us</h4>
                <p>
                  <a href="mailto:info@inamdarco.in" className={styles.clickableLink}>
                    info@inamdarco.in
                  </a>
                </p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <i className="fas fa-phone"></i>
              </div>
              <div className={styles.infoContent}>
                <h4>Telephone</h4>
                <p>
                  <a href="tel:+919552319748" className={styles.clickableLink}>
                    +91 9552319748
                  </a>
                </p>
                <p>
                  <a href="tel:+919449482632" className={styles.clickableLink}>
                    +91 9449482632
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerCopyright}>
          <div className={styles.copyrightContent}>
            <p>
              <i className="fas fa-copyright"></i>
              inamdarco.in, All right reserved.
            </p>
            <p>
              Designed by{' '}
              <a href="https://aise360.com" target="_blank" rel="noopener noreferrer">
                aise360
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

