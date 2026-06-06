import React, { useState } from 'react';
import Navbar from './components/home/Navbar';
import BannerSection from './components/home/BannerSection';
import ReviewsSection from './components/home/ReviewsSection';
import FAQSection from './components/home/FAQSection';
import './App.css';
import ServicesSection from './components/home/servicesection';
import ClaritySection from './components/home/claritysection';
import WhyChooseUs from './components/home/whychooseus';
import AboutUs from './components/home/AboutUs';
import LandingPage from './components/landing/LandingPage';

export default function App() {
  const [view, setView] = useState('landing'); // 'landing' or 'home'

  const handleNavigation = (targetView, sectionId) => {
    setView(targetView);
    if (targetView === 'home') {
      if (sectionId) {
        // Wait a brief moment for DOM render/rendering of sections
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 120);
      } else {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 50);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (view === 'landing') {
    return <LandingPage onNavigate={handleNavigation} />;
  }

  return (
    <div className="app">
      <Navbar onNavigate={handleNavigation} />
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

