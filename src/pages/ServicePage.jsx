import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { serviceDetails, serviceImages } from '../utils/serviceDetails';
import styles from './ServicePage.module.css';

const ServicePage = ({ service }) => {
  const details = serviceDetails[service];
  const serviceImage = serviceImages[service] || '/img/default.png';

  // Fallback for services without detailed information
  if (!details) {
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
  }

  return (
    <>
      <Header />
      <div className={styles.servicePage}>
        <div className="container">
          {/* Service Header */}
          <div className={styles.serviceHeader}>
            <div className={styles.serviceImageContainer}>
              <img
                src={serviceImage}
                alt={service}
                className={styles.serviceImage}
                onError={(e) => {
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
              Professional {service} services with expert guidance and support
            </p>
          </div>

          <div className={styles.serviceContent}>
            {/* Overview Section */}
            <div className={styles.overviewSection}>
              <h2 className={styles.sectionTitle}>Overview</h2>
              <p className={styles.description}>{details.description}</p>
            </div>

            {/* Benefits Section */}
            <div className={styles.benefitsSection}>
              <h2 className={styles.sectionTitle}>
                <i className="fas fa-star"></i> Key Benefits
              </h2>
              <div className={styles.benefitsGrid}>
                {details.benefits.map((benefit, index) => (
                  <div key={index} className={styles.benefitCard}>
                    <i className="fas fa-check-circle"></i>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents Required */}
            <div className={styles.documentsSection}>
              <h2 className={styles.sectionTitle}>
                <i className="fas fa-file-alt"></i> Documents Required
              </h2>
              <ul className={styles.documentList}>
                {details.documents.map((doc, index) => (
                  <li key={index}>
                    <i className="fas fa-folder"></i>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Process Timeline */}
            <div className={styles.processSection}>
              <h2 className={styles.sectionTitle}>
                <i className="fas fa-tasks"></i> Our Process
              </h2>
              <div className={styles.timeline}>
                {details.process.map((step, index) => (
                  <div key={index} className={styles.timelineItem}>
                    <div className={styles.timelineNumber}>{index + 1}</div>
                    <div className={styles.timelineContent}>
                      <p>{step}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.timelineInfo}>
                <i className="fas fa-clock"></i>
                <strong>Expected Timeline:</strong> {details.timeline}
              </div>
            </div>

            {/* FAQs Section */}
            <div className={styles.faqSection}>
              <h2 className={styles.sectionTitle}>
                <i className="fas fa-question-circle"></i> Frequently Asked Questions
              </h2>
              <div className={styles.faqList}>
                {details.faqs.map((faq, index) => (
                  <div key={index} className={styles.faqItem}>
                    <h3 className={styles.faqQuestion}>
                      <i className="fas fa-chevron-right"></i>
                      {faq.question}
                    </h3>
                    <p className={styles.faqAnswer}>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className={styles.ctaSection}>
              <h2>Ready to Get Started?</h2>
              <p>Our expert team is here to assist you with {service}. Contact us now for a consultation!</p>
              <div className={styles.ctaButtons}>
                <a href="tel:+919552319748" className={styles.ctaButton}>
                  <i className="fas fa-phone"></i>
                  Call Us: +91 95523 19748
                </a>
                <a href="https://wa.me/919552319748" className={styles.whatsappButton} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp"></i>
                  WhatsApp Us
                </a>
                <Link to="/" className={styles.secondaryButton}>
                  <i className="fas fa-home"></i>
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
