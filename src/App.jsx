import React from 'react';
import Navbar from './components/Navbar';
import BannerSection from './components/BannerSection';
import ReviewsSection from './components/ReviewsSection';
import FAQSection from './components/FAQSection';
import './App.css';
import ServicesSection from './components/servicesection';
import ClaritySection from './components/claritysection';
import WhyChooseUs from './components/whychooseus';


export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <section id="home" className="simple-text-section">
          <div className="simple-text-content">
            <h1 className="hero-title">Welcome to RupeeVyze</h1>
            <p className="hero-subtitle">Your trusted partner in financial growth. Experience seamless investing with transparent insights and expert guidance tailored just for you.</p>
          </div>
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <ClaritySection />
        <WhyChooseUs />
      
        <BannerSection />
        <ReviewsSection />
        <FAQSection />
      </main>
    </div>
  );
}
