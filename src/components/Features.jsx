import React from 'react';
import styles from './Features.module.css';

const Features = () => {
  const features = [
    {
      icon: 'fas fa-user-tie',
      title: 'Legal Experts',
      description: 'Well studied and verified drafts from legal experts',
    },
    {
      icon: 'fas fa-money-bill-wave',
      title: 'Flexible Payment',
      description: 'We provide flexible payment methods',
    },
    {
      icon: 'fas fa-home',
      title: 'Doorstep Services',
      description: 'Hassle free doorstep services. No need to visit any office',
    },
    {
      icon: 'fas fa-bell',
      title: 'Notifications',
      description: 'SMS notifications to every associate. Stay updated',
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Security',
      description: 'No documents store policy. We won\'t ask for any of your credential documents',
    },
    {
      icon: 'fas fa-arrow-right',
      title: 'Simple Process',
      description: 'Just 3 simple steps process',
    },
    {
      icon: 'fas fa-bullseye',
      title: 'IT Support',
      description: 'Highly Qualified IT team with innovative solutions',
    },
    {
      icon: 'fas fa-headphones',
      title: 'Customer Care',
      description: 'Humble and Knowledgeful Customer Care ready to help in any difficulty',
    },
  ];

  return (
    <section id="services" className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h4 className={styles.sectionLabel}>Why Choose Inamdarco?</h4>
          <h2 className={styles.sectionTitle}>Secure Transaction Platform</h2>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${styles.featureCard} hover-lift fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.featureIcon}>
                <i className={feature.icon}></i>
              </div>
              <h4 className={styles.featureTitle}>{feature.title}</h4>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

