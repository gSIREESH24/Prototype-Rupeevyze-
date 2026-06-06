import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { FaChevronRight } from 'react-icons/fa';
import './landingpage.css';

const servicesList = [
  { id: 'mutual-funds', title: 'Mutual Funds', badge: 'WEALTH' },
  { id: 'equity-commodity', title: 'Equity & Commodity', badge: 'GROWTH' },
  { id: 'pms-aif', title: 'PMS & AIF', badge: 'HNI' },
  { id: 'bonds-fixed-income', title: 'Bonds & Fixed Income', badge: 'STABLE' },
  { id: 'insurance', title: 'Insurance', badge: 'PROTECT' },
  { id: 'loans-realty', title: 'Loans & Realty', badge: 'ASSETS' },
];

export default function LandingPage({ onNavigate }) {
  const [hoveredService, setHoveredService] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="landing-page">
      <header className="landing-header">
        <div className="landing-header-inner">
          <div className="landing-logo" onClick={() => onNavigate('landing')}>
            <span className="logo-text">
              Rupee<span className="logo-accent">Vyze</span>
            </span>
          </div>

          <nav className="landing-nav">
            <button className="landing-nav-btn" onClick={() => onNavigate('home', 'home')}>
              HOME
            </button>
            <button className="landing-nav-btn" onClick={() => onNavigate('home', 'services')}>
              SERVICES
            </button>
            <button className="landing-nav-btn" onClick={() => onNavigate('home', 'about')}>
              INSIGHTS
            </button>
            <button className="landing-nav-btn" onClick={() => onNavigate('home', 'about')}>
              ABOUT
            </button>
            <button className="landing-nav-btn" onClick={() => onNavigate('home', 'contact')}>
              CONTACT
            </button>
          </nav>

          <button className="landing-cta-btn" onClick={() => onNavigate('home', 'contact')}>
            REQUEST CONSULT
          </button>
        </div>
      </header>

      <motion.main 
        className="landing-hero"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="landing-hero-inner">
          <motion.div className="landing-left-panel" variants={fadeInUp}>
            <div className="landing-left-content">
              <span className="landing-eyebrow">
                <span className="eyebrow-dash">—</span> GOAL-BASED ADVISORY
              </span>
              
              <h1 className="landing-title">
                Wealth built <br />
                on <span className="cursive-text">conviction,</span> <br />
                not commission.
              </h1>

              <div className="landing-tags">
                <span className="landing-tag-item">Transparent</span>
                <span className="tag-separator">·</span>
                <span className="landing-tag-item">Regulated</span>
                <span className="tag-separator">·</span>
                <span className="landing-tag-item">Client-first</span>
              </div>

              <p className="landing-description">
                Private-banking quality advisory — without the private-banking entry barrier. 
                Your goals drive every recommendation we make.
              </p>

              <div className="landing-actions">
                <button 
                  className="btn-build-plan" 
                  onClick={() => onNavigate('home', 'contact')}
                >
                  BUILD YOUR PLAN
                </button>
                <button 
                  className="btn-how-we-work"
                  onClick={() => onNavigate('home', 'about')}
                >
                  How we work <FiArrowRight className="arrow-icon" />
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div className="landing-right-panel" variants={slideInRight}>
            <div className="landing-right-content">
              <span className="services-eyebrow">WHAT WE ADVISE ON</span>

              <div className="landing-services-list">
                {servicesList.map((service, index) => (
                  <motion.div
                    key={service.id}
                    className={`landing-service-row ${hoveredService === service.id ? 'active' : ''}`}
                    onMouseEnter={() => setHoveredService(service.id)}
                    onMouseLeave={() => setHoveredService(null)}
                    onClick={() => onNavigate('home', 'services')}
                    whileHover={{ x: 8 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <span className="service-name">{service.title}</span>
                    <span className="service-badge">{service.badge}</span>
                  </motion.div>
                ))}
              </div>


              <div className="landing-quote-block">
                <p className="landing-quote-text">
                  "No product push. Only what fits your plan — every client, every time."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.main>

      <motion.section 
        className="landing-stats"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <div className="landing-stats-inner">
          <div className="stat-column">
            <div className="stat-value">1,000+</div>
            <div className="stat-label">CLIENTS ADVISED</div>
          </div>
          <div className="stat-column">
            <div className="stat-value">4.5/5</div>
            <div className="stat-label">SATISFACTION SCORE</div>
          </div>
          <div className="stat-column">
            <div className="stat-value">7</div>
            <div className="stat-label">PRODUCT CATEGORIES</div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
