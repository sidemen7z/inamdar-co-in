import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import WhyChooseUs from '../components/WhyChooseUs';
import AboutSection from '../components/AboutSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <AboutSection />
      <WhyChooseUs />
      <section style={{ padding: '80px 0', background: 'var(--off-white)' }} id="contact">
        <div className="container">
          <ContactForm />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;


