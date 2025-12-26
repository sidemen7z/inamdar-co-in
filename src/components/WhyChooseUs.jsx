import React from 'react';
import styles from './WhyChooseUs.module.css';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: 'fas fa-handshake',
      title: 'Consultation from Industry Experts',
    },
    {
      icon: 'fas fa-money-bill-wave',
      title: 'Value For Money and hassle free service',
    },
    {
      icon: 'fas fa-address-book',
      title: 'Happy Customers',
    },
    {
      icon: 'fas fa-check-circle',
      title: 'Money Back Guarantee',
    },
  ];

  return (
    <section className={styles.whyChooseUs}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h4 className={styles.sectionLabel}>Why Choose Inamdarco</h4>
        </div>
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`${styles.benefitCard} hover-lift fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.benefitIcon}>
                <i className={benefit.icon}></i>
              </div>
              <h5 className={styles.benefitTitle}>{benefit.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

