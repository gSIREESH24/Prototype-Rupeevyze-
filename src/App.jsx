import React from 'react';
import Navbar from './components/Navbar';
import BannerSection from './components/BannerSection';
import ReviewsSection from './components/ReviewsSection';
import FAQSection from './components/FAQSection';
import './App.css';
import ServicesSection from './components/servicesection';
import ClaritySection from './components/claritysection';
import WhyChooseUs from './components/whychooseus';
import AboutUs from './components/AboutUs';


export default function App() {
  return (
    <div className="app">
      <Navbar />
      <AboutUs />
      <main>

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
