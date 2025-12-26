import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './ServicePage.module.css';

// Service image mapping
const serviceImages = {
  'Proprietorship': '/img/proprietorship.png',
  'Partnership': '/img/Partnership-Registration.png',
  'One Person Company': '/img/opc.webp',
  'Limited Liability Partnership': '/img/LLP.png',
  'Private Limited Company': '/img/creg.png',
  'Trust Registration': '/img/Trust.png',
  'Society Registration': '/img/Trust.png',
  'Digital Signature': '/img/digital-signature-india.png',
  'Udyam Registration': '/img/UDYAM-Registration.webp',
  'Startup India Registration': '/img/startup.png',
  'FSSAI Registration': '/img/FSSAI_Registration.png',
  'Professional Tax': '/img/Professional_Tax.png',
  'Darpan Registration': '/img/darpan-registration.png',
  'RCMC Registration': '/img/RCMC-Registration.jpg',
  'Halal Certificate': '/img/Halal-Certificate.jpg',
  'Import Export Code': '/img/import_export_india.png',
  'Trade License': '/img/Trade-License.png',
  'GST Registration': '/img/GST-Registration-software-india.jpg',
  'GST Filing': '/img/gst1.png',
  'LUT Filing Under GST': '/img/gst2.png',
  'ITR Filing': '/img/income-Tax-e-Filing-india.png',
  'GST Cancellation': '/img/GST-Notice.jpg',
  'Accounting': '/img/account.jpeg',
  'TDS Return Filing': '/img/tds-return-filing-india.png',
  'Professional Tax Registration': '/img/Professional_Tax.png',
  'Trademark Registration': '/img/Trademark.webp',
  'ISO 9001-2015': '/img/default.png',
};

const ServicePage = ({ service }) => {
  const serviceImage = serviceImages[service] || '/img/default.png';

  return (
    <>
      <Header />
      <div className={styles.servicePage}>
        <div className="container">
          <div className={styles.serviceHeader}>
            <div className={styles.serviceImageContainer}>
              <img 
                src={serviceImage} 
                alt={service}
                className={styles.serviceImage}
                onError={(e) => {
                  // Try default image, if that fails, hide the container
                  if (e.target.src !== '/img/default.png') {
                    e.target.src = '/img/default.png';
                  } else {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.display = 'none';
                  }
                }}
                loading="lazy"
              />
            </div>
            <h1 className={styles.serviceTitle}>{service}</h1>
            <p className={styles.serviceSubtitle}>
              Professional {service} services with expert guidance
            </p>
          </div>

          <div className={styles.serviceContent}>
            <div className={styles.serviceInfo}>
              <h2>About {service}</h2>
              <p>
                Get comprehensive {service} services from our team of experienced professionals. 
                We provide end-to-end support to ensure a smooth and hassle-free process.
              </p>

              <h3>What We Offer</h3>
              <ul className={styles.featureList}>
                <li>Expert consultation and guidance</li>
                <li>Complete documentation support</li>
                <li>Timely processing and updates</li>
                <li>Post-registration support</li>
              </ul>

              <h3>Why Choose Us</h3>
              <ul className={styles.featureList}>
                <li>Experienced team of professionals</li>
                <li>Transparent pricing with no hidden charges</li>
                <li>Quick turnaround time</li>
                <li>24/7 customer support</li>
              </ul>

              <div className={styles.ctaSection}>
                <a href="tel:+919552319748" className={styles.ctaButton}>
                  <i className="fas fa-phone"></i>
                  Contact Us Now
                </a>
                <Link to="/" className={styles.secondaryButton}>
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicePage;

