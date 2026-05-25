import React, { useState } from 'react';
import { FiTarget, FiEye, FiAward } from 'react-icons/fi';
import { FaHandshake, FaRupeeSign, FaChartLine, FaUsers, FaStore, FaLandmark, FaQuoteLeft } from 'react-icons/fa';

const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeVmIndex, setActiveVmIndex] = useState(0);

  const storySteps = [
    {
      tag: "🎯 OUR MISSION",
      title: "Simplifying Financial Wisdom",
      description: "To make financial knowledge accessible, practical, and empowering for every single Indian.",
      icon: <FiTarget className="au-step-icon" />,
      details: ["Accessible Advice", "Practical Tips", "Empowered Decisions"]
    },
    {
      tag: "📈 WHAT WE SIMPLIFY",
      title: "Investing, Trading & Wealth",
      description: "Breaking down complex market structures into clear, goal-based routes for long-term growth.",
      icon: <FaChartLine className="au-step-icon" />,
      details: ["Mutual Funds", "Stock Trading", "Retirement Plans"]
    },
    {
      tag: "👥 WHO IT'S FOR",
      title: "For Every Generation",
      description: "Tailored for Gen Z, Millennials, new investors, and long-term wealth builders seeking clarity.",
      icon: <FaUsers className="au-step-icon" />,
      details: ["Gen Z", "Millennials", "Wealth Builders"]
    },
    {
      tag: "💡 WHAT WE BELIEVE",
      title: "Money is More Than Numbers",
      description: "It represents freedom, security, and dreams. When managed right, every rupee creates value.",
      icon: <FaRupeeSign className="au-step-icon" />,
      details: ["True Freedom", "Guaranteed Security", "Your Dreams"]
    }
  ];

  const vmSteps = [
    {
      title: "Our Vision",
      tag: "🌟 THE FUTURE WE BUILD",
      description: "To become India's most trusted financial wellness platform, empowering every Indian to make informed investment decisions and achieve financial independence.",
      icon: <FiEye className="au-vm-step-icon" />,
      image: "https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      pillars: [
        { label: "Trusted Platform", desc: "Built on absolute honesty, clear insights, and robust security." },
        { label: "Informed Choices", desc: "Enabling data-driven and logical decision making for all." },
        { label: "Financial Independence", desc: "Helping every individual reach self-sufficiency and freedom." }
      ]
    },
    {
      title: "Our Mission",
      tag: "🎯 THE PATH WE WALK",
      description: "To simplify investing and wealth management for every Indian by providing expert guidance, transparent advice, and goal-based financial solutions.",
      icon: <FiTarget className="au-vm-step-icon" />,
      image: "https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      pillars: [
        { label: "Expert Guidance", desc: "Practical mentoring and educational tools tailored for you." },
        { label: "Transparent Advice", desc: "No hidden charges, direct guidance, and honest models." },
        { label: "Goal-Based Growth", desc: "Strategies aligned directly with your personal milestones." }
      ]
    }
  ];

  return (
    <div className="au-page" id="about">

      {/* ── Hero ── */}
      <section className="au-hero">
        <div className="au-container">
          <span className="au-eyebrow">About Us</span>
          <h1 className="au-hero-title">
            Meet RupeeVyze —{' '}
            <span className="au-accent">Wisdom In Every Rupee™</span>
          </h1>
          <p className="au-hero-sub">Every great journey begins with a simple question.</p>
        </div>
      </section>

      {/* ── Story Section Redesign (Split Quote + Interactive Timeline Cards) ── */}
      <section className="au-story-section" id="story">
        <div className="au-container">
          <div className="au-story-grid">
            
            {/* Left Column: Split Quote Layout */}
            <div className="au-story-left">
              <span className="au-story-eyebrow">ABOUT RUPEEVYZE</span>
              <div className="au-quote-wrapper">
                <FaQuoteLeft className="au-quote-icon-bg" />
                <h2 className="au-story-quote">
                  Managing money should feel <span className="au-gradient-text-accent">empowering</span>, not overwhelming.
                </h2>
              </div>
              
              <div className="au-story-intro-card">
                <p className="au-story-intro-text">
                  That question sparked the birth of <strong>RupeeVyze</strong>. When guided by the right knowledge, every rupee can create lasting value.
                </p>
                <div className="au-interactive-indicator">
                  <span className="au-indicator-dot"></span>
                  <span className="au-indicator-text">Hover or click cards to explore</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Timeline Storytelling */}
            <div className="au-story-right">
              <div className="au-story-timeline">
                <div className="au-timeline-line"></div>
                <div 
                  className="au-timeline-line-active" 
                  style={{ height: `${(activeIndex / 3) * 100}%` }}
                ></div>
                
                {storySteps.map((step, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <div 
                      key={idx} 
                      className={`au-story-card ${isActive ? 'au-story-card--active' : ''}`}
                      onMouseEnter={() => setActiveIndex(idx)}
                      onClick={() => setActiveIndex(idx)}
                    >
                      <div className="au-card-icon-wrapper">
                        {step.icon}
                        <span className="au-step-number">{idx + 1}</span>
                      </div>
                      <div className="au-card-content">
                        <span className="au-card-tag">{step.tag}</span>
                        <h3 className="au-card-title">{step.title}</h3>
                        <p className="au-card-description">{step.description}</p>
                        
                        {/* Interactive list inside card */}
                        <div className={`au-card-details ${isActive ? 'au-card-details--visible' : ''}`}>
                          {step.details.map((detail, dIdx) => (
                            <span key={dIdx} className="au-detail-pill">
                              {detail}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Experience Banner ── */}
      <section className="au-exp-banner">
        <div className="au-container">
          <div className="au-exp-inner">
            <FiAward className="au-exp-icon" aria-hidden="true" />
            <h2>
              We Have More Than{' '}
              <span className="au-exp-highlight">4 Years</span>{' '}
              Of Experience
            </h2>
          </div>
        </div>
      </section>

      {/* ── Redesigned Vision & Mission ── */}
      <section className="au-vm-section" id="vision-mission">
        <div className="au-container">
          <div className="au-vm-grid-new">
            
            {/* Left: Dynamic Visual Showcase */}
            <div className="au-vm-left">
              <span className="au-vm-eyebrow">OUR DIRECTION</span>
              <h2 className="au-vm-title">Guided by purpose, driven by <span className="au-gradient-text-accent">growth</span>.</h2>
              
              <div className="au-vm-image-container">
                {vmSteps.map((step, idx) => (
                  <img
                    key={idx}
                    src={step.image}
                    alt={step.title}
                    className={`au-vm-showcase-img ${activeVmIndex === idx ? 'au-vm-showcase-img--active' : ''}`}
                    loading="lazy"
                  />
                ))}
                <div className="au-vm-img-overlay"></div>
              </div>
            </div>

            {/* Right: Interactive Cards */}
            <div className="au-vm-right">
              {vmSteps.map((step, idx) => {
                const isActive = activeVmIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`au-vm-interactive-card ${isActive ? 'au-vm-interactive-card--active' : ''}`}
                    onMouseEnter={() => setActiveVmIndex(idx)}
                    onClick={() => setActiveVmIndex(idx)}
                  >
                    <div className="au-vm-card-header">
                      <div className="au-vm-icon-wrap">
                        {step.icon}
                      </div>
                      <div>
                        <span className="au-vm-card-tag">{step.tag}</span>
                        <h3 className="au-vm-card-title">{step.title}</h3>
                      </div>
                    </div>
                    
                    <p className="au-vm-card-desc">{step.description}</p>
                    
                    {/* Pillars List */}
                    <div className={`au-vm-pillars ${isActive ? 'au-vm-pillars--visible' : ''}`}>
                      {step.pillars.map((pillar, pIdx) => (
                        <div key={pIdx} className="au-vm-pillar-item">
                          <span className="au-pillar-dot"></span>
                          <div>
                            <h4 className="au-pillar-label">{pillar.label}</h4>
                            <p className="au-pillar-desc">{pillar.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="au-section au-section--faint">
        <div className="au-container">
          <h2 className="au-section-title">What Makes Us Different</h2>
          <div className="au-values-grid">
            {[
              { icon: <FaRupeeSign />, title: 'Wisdom In Every Rupee',   desc: 'Every financial decision is backed by expert insights and practical knowledge.' },
              { icon: <FaChartLine />, title: 'Simplified Investing',      desc: 'Complex financial concepts made easy for everyone to understand and act upon.' },
              { icon: <FaHandshake />, title: 'Trust & Transparency',     desc: 'Complete clarity in every recommendation with no hidden fees or surprises.' },
              { icon: <FaUsers />,     title: 'For Every Indian',         desc: 'Tailored solutions for Gen Z, millennials, and investors at all life stages.' },
            ].map((v, i) => (
              <div className="au-value-card" key={i}>
                <div className="au-value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tradition ── */}
      <section className="au-section au-section--white">
        <div className="au-container">
          <div className="au-two-col au-two-col--reversed">
            <div className="au-img-block">
              <img
                src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Traditional Indian finance and savings"
                loading="lazy"
              />
            </div>
            <div className="au-text-block">
              <h2 className="au-block-title">Bridging Tradition With Modern Finance</h2>
              <p>
                At RupeeVyze, we respect India's rich tradition of saving and wealth preservation while
                embracing modern investment strategies. We help you find the perfect balance between
                traditional wisdom and contemporary financial tools.
              </p>
              <div className="au-tags">
                {[
                  { icon: <FaStore />,     label: 'Traditional Savings' },
                  { icon: <FaLandmark />,  label: 'Modern Investing' },
                  { icon: <FaChartLine />, label: 'Smart Growth' },
                ].map((t, i) => (
                  <div className="au-tag" key={i}>
                    <span className="au-tag-icon">{t.icon}</span>
                    <span>{t.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Inline Styles ── */}
      <style>{`
        /* Shared tokens – aligned with App.css */
        .au-page {
          font-family: 'Inter', sans-serif;
          background: #fff;
          padding-top: 68px;          /* matches rv-header height */
          color: #021B45;
          overflow-x: hidden;
        }

        .au-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* ── Hero ── */
        .au-hero {
          background: #F0F9FF;
          border-bottom: 1px solid #e8edf5;
          padding: 3rem 0 2.5rem;
          text-align: center;
        }
        .au-eyebrow {
          display: inline-block;
          font-family: 'Outfit', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #00A389;
          background: rgba(0,163,137,0.1);
          border: 1px solid rgba(0,163,137,0.28);
          padding: 4px 14px;
          border-radius: 50px;
          margin-bottom: 1rem;
        }
        .au-hero-title {
          font-family: 'Outfit', sans-serif;
          font-size: 2.4rem;
          font-weight: 800;
          color: #021B45;
          line-height: 1.22;
          margin-bottom: 0.6rem;
          max-width: 750px;
          margin-left: auto; margin-right: auto;
        }
        .au-accent {
          background: linear-gradient(135deg, #1C4481, #00A389);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .au-hero-sub {
          font-size: 1rem;
          color: #64748b;
          font-style: italic;
        }

        /* ── Sections ── */
        .au-section {
          padding: 3.5rem 0;
        }
        .au-section--white { background: #fff; }
        .au-section--faint { background: #F0F9FF; }

        /* ── Two-column grid ── */
        .au-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        .au-two-col--reversed .au-img-block { order: -1; }

        .au-text-block p {
          font-size: 0.95rem;
          color: #64748b;
          line-height: 1.75;
          margin-bottom: 0.9rem;
        }
        .au-text-block p:last-child { margin-bottom: 0; }
        .au-question {
          font-size: 1.1rem !important;
          color: #021B45 !important;
        }
        .au-green { color: #00A389; }

        .au-img-block img {
          width: 100%;
          border-radius: 16px;
          object-fit: cover;
          height: 340px;
          box-shadow: 0 12px 32px rgba(2,27,69,0.1);
        }

        /* ── Redesigned Story Section (Split Quote + Interactive Timeline) ── */
        .au-story-section {
          padding: 3.5rem 0;
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .au-story-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        .au-story-left {
          position: sticky;
          top: 100px;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .au-story-eyebrow {
          display: inline-block;
          font-family: 'Outfit', sans-serif;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #00A389;
          background: rgba(0,163,137,0.08);
          border: 1px solid rgba(0,163,137,0.2);
          padding: 5px 14px;
          border-radius: 50px;
          align-self: flex-start;
        }

        .au-quote-wrapper {
          position: relative;
        }

        .au-quote-icon-bg {
          position: absolute;
          top: -30px;
          left: -20px;
          font-size: 5rem;
          color: rgba(0, 163, 137, 0.05);
          pointer-events: none;
          z-index: 1;
        }

        .au-story-quote {
          font-family: 'Outfit', sans-serif;
          font-size: 2.5rem;
          font-weight: 800;
          color: #021B45;
          line-height: 1.25;
          position: relative;
          z-index: 2;
        }

        .au-gradient-text-accent {
          background: linear-gradient(135deg, #1C4481, #00A389);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .au-story-intro-card {
          background: #F0F9FF;
          border: 1px solid #e8edf5;
          border-radius: 16px;
          padding: 1.2rem 1.6rem;
          box-shadow: 0 10px 30px rgba(2, 27, 69, 0.02);
        }

        .au-story-intro-text {
          font-size: 1rem;
          color: #64748b;
          line-height: 1.75;
          margin-bottom: 0.6rem;
        }

        .au-story-intro-text strong {
          color: #021B45;
        }

        .au-interactive-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .au-indicator-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: #00A389;
          animation: auPulse 2s infinite;
        }

        @keyframes auPulse {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(0, 163, 137, 0.6);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 6px rgba(0, 163, 137, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(0, 163, 137, 0);
          }
        }

        .au-indicator-text {
          font-size: 0.78rem;
          font-weight: 600;
          color: #64748b;
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }

        .au-story-right {
          position: relative;
        }

        .au-story-timeline {
          position: relative;
          padding-left: 2.5rem;
        }

        .au-timeline-line {
          position: absolute;
          left: 14px;
          top: 20px;
          bottom: 20px;
          width: 2px;
          background-color: rgba(28, 68, 129, 0.1);
        }

        .au-timeline-line-active {
          position: absolute;
          left: 14px;
          top: 20px;
          width: 2px;
          background-color: #00A389;
          transition: height 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .au-story-card {
          background: transparent;
          border-radius: 16px;
          padding: 1.1rem 1.4rem;
          margin-bottom: 1rem;
          border: 1px solid transparent;
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
          cursor: pointer;
          position: relative;
        }

        .au-story-card:last-child {
          margin-bottom: 0;
        }

        .au-story-card--active {
          background: #ffffff;
          border-color: #e8edf5;
          box-shadow: 0 12px 30px rgba(2, 27, 69, 0.05);
          transform: translateY(-3px) translateX(3px);
        }

        .au-card-icon-wrapper {
          position: absolute;
          left: -39px;
          top: 15px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: #ffffff;
          border: 2px solid rgba(28, 68, 129, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .au-story-card--active .au-card-icon-wrapper {
          border-color: #00A389;
          background-color: #00A389;
          box-shadow: 0 0 0 5px rgba(0, 163, 137, 0.15);
        }

        .au-step-icon {
          font-size: 0.95rem;
          color: #1C4481;
          transition: all 0.3s ease;
        }

        .au-story-card--active .au-step-icon {
          color: #ffffff;
        }

        .au-step-number {
          position: absolute;
          bottom: -4px;
          right: -4px;
          width: 14px;
          height: 14px;
          background-color: #021B45;
          color: #ffffff;
          font-size: 0.6rem;
          font-weight: 800;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .au-card-tag {
          font-family: 'Outfit', sans-serif;
          font-size: 0.7rem;
          font-weight: 800;
          color: #64748b;
          letter-spacing: 0.1em;
          margin-bottom: 0.2rem;
          display: block;
          transition: color 0.3s ease;
        }

        .au-story-card--active .au-card-tag {
          color: #00A389;
        }

        .au-card-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #021B45;
          margin-bottom: 0.3rem;
          display: block;
        }

        .au-card-description {
          font-size: 0.92rem;
          color: #64748b;
          line-height: 1.6;
          transition: color 0.3s ease;
        }

        .au-story-card--active .au-card-description {
          color: #021B45;
        }

        .au-card-details {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: 0.6rem;
          opacity: 0;
          max-height: 0;
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .au-card-details--visible {
          opacity: 1;
          max-height: 100px;
        }

        .au-detail-pill {
          background-color: rgba(0, 163, 137, 0.06);
          color: #00A389;
          border: 1px solid rgba(0, 163, 137, 0.12);
          border-radius: 50px;
          padding: 0.25rem 0.75rem;
          font-size: 0.78rem;
          font-weight: 600;
          transition: all 0.25s ease;
        }

        .au-detail-pill:hover {
          background-color: #00A389;
          color: #ffffff;
          transform: scale(1.05);
        }

        /* ── Redesigned Vision & Mission Section ── */
        .au-vm-section {
          padding: 3.5rem 0;
          background: #F0F9FF;
          border-top: 1px solid #e8edf5;
          border-bottom: 1px solid #e8edf5;
          position: relative;
          overflow: hidden;
        }

        .au-vm-grid-new {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 3rem;
          align-items: start;
        }

        .au-vm-left {
          position: sticky;
          top: 100px;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .au-vm-eyebrow {
          display: inline-block;
          font-family: 'Outfit', sans-serif;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #00A389;
          background: rgba(0,163,137,0.08);
          border: 1px solid rgba(0,163,137,0.2);
          padding: 5px 14px;
          border-radius: 50px;
          align-self: flex-start;
        }

        .au-vm-title {
          font-family: 'Outfit', sans-serif;
          font-size: 2.5rem;
          font-weight: 800;
          color: #021B45;
          line-height: 1.25;
        }

        .au-vm-image-container {
          position: relative;
          width: 100%;
          height: 280px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 30px rgba(2, 27, 69, 0.06);
        }

        .au-vm-showcase-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1), transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
          transform: scale(1.05);
        }

        .au-vm-showcase-img--active {
          opacity: 1;
          transform: scale(1);
          z-index: 1;
        }

        .au-vm-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 60%, rgba(2, 27, 69, 0.3));
          z-index: 2;
          pointer-events: none;
        }

        .au-vm-right {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .au-vm-interactive-card {
          background: #ffffff;
          border: 1.5px solid #e8edf5;
          border-radius: 16px;
          padding: 1.4rem 1.6rem;
          cursor: pointer;
          transition: all 0.35s cubic-bezier(0.25, 1, 0.5, 1);
          position: relative;
          overflow: hidden;
        }

        .au-vm-interactive-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 0px;
          background-color: #00A389;
          transition: width 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .au-vm-interactive-card--active {
          border-color: #e8edf5;
          box-shadow: 0 12px 30px rgba(2, 27, 69, 0.05);
          transform: translateY(-3px);
        }

        .au-vm-interactive-card--active::before {
          width: 5px;
        }

        .au-vm-card-header {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          margin-bottom: 0.6rem;
        }

        .au-vm-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background-color: rgba(28, 68, 129, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .au-vm-interactive-card--active .au-vm-icon-wrap {
          background-color: #00A389;
          color: #ffffff;
          box-shadow: 0 0 0 3px rgba(0, 163, 137, 0.15);
        }

        .au-vm-step-icon {
          font-size: 1.2rem;
          color: #1C4481;
          transition: all 0.3s ease;
        }

        .au-vm-interactive-card--active .au-vm-step-icon {
          color: #ffffff;
        }

        .au-vm-card-tag {
          font-family: 'Outfit', sans-serif;
          font-size: 0.7rem;
          font-weight: 800;
          color: #64748b;
          letter-spacing: 0.12em;
          display: block;
          margin-bottom: 0.1rem;
          transition: color 0.3s ease;
        }

        .au-vm-interactive-card--active .au-vm-card-tag {
          color: #00A389;
        }

        .au-vm-card-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.35rem;
          font-weight: 800;
          color: #021B45;
        }

        .au-vm-card-desc {
          font-size: 0.95rem;
          color: #64748b;
          line-height: 1.65;
          margin-bottom: 0;
          transition: color 0.3s ease;
        }

        .au-vm-interactive-card--active .au-vm-card-desc {
          color: #021B45;
        }

        .au-vm-pillars {
          margin-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          opacity: 0;
          max-height: 0;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .au-vm-pillars--visible {
          opacity: 1;
          max-height: 500px;
        }

        .au-vm-pillar-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .au-pillar-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: #00A389;
          margin-top: 0.45rem;
          flex-shrink: 0;
        }

        .au-pillar-label {
          font-family: 'Outfit', sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
          color: #021B45;
          margin-bottom: 0.1rem;
        }

        .au-pillar-desc {
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.5;
        }

        /* ── Experience Banner ── */
        .au-exp-banner {
          background: linear-gradient(135deg, #021B45 0%, #1C4481 60%, #006677 100%);
          padding: 2.5rem 0;
        }
        .au-exp-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
          flex-wrap: wrap;
          text-align: center;
        }
        .au-exp-icon {
          font-size: 2.8rem;
          color: #00A389;
          flex-shrink: 0;
        }
        .au-exp-banner h2 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.7rem;
          font-weight: 700;
          color: #fff;
          line-height: 1.3;
        }
        .au-exp-highlight {
          color: #00A389;
          font-size: 2rem;
        }

        /* ── Vision & Mission ── */
        .au-vm-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 1.5rem;
        }
        .au-vm-card {
          background: #F0F9FF;
          border: 1px solid #e8edf5;
          border-radius: 16px;
          padding: 2rem;
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .au-vm-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(28,68,129,0.1);
        }
        .au-vm-icon {
          font-size: 2rem;
          color: #00A389;
          margin-bottom: 0.75rem;
          display: flex;
        }
        .au-vm-card h3 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: #021B45;
          margin-bottom: 0.6rem;
        }
        .au-vm-card p {
          font-size: 0.92rem;
          color: #64748b;
          line-height: 1.7;
          margin-bottom: 1rem;
        }
        .au-vm-img img {
          width: 100%;
          border-radius: 12px;
          height: 180px;
          object-fit: cover;
        }

        /* ── Values ── */
        .au-section-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.9rem;
          font-weight: 800;
          color: #021B45;
          text-align: center;
          margin-bottom: 2rem;
          position: relative;
        }
        .au-section-title::after {
          content: '';
          display: block;
          width: 48px; height: 3px;
          background: linear-gradient(135deg, #1C4481, #00A389);
          margin: 0.6rem auto 0;
          border-radius: 2px;
        }
        .au-values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.25rem;
        }
        .au-value-card {
          background: #fff;
          border: 1px solid #e8edf5;
          border-radius: 14px;
          padding: 1.6rem 1.25rem;
          text-align: center;
          transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
        }
        .au-value-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 28px rgba(28,68,129,0.09);
          border-color: rgba(28,68,129,0.25);
        }
        .au-value-icon {
          font-size: 2rem;
          color: #00A389;
          margin-bottom: 0.75rem;
          display: flex; justify-content: center;
        }
        .au-value-card h3 {
          font-family: 'Outfit', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: #021B45;
          margin-bottom: 0.5rem;
        }
        .au-value-card p {
          font-size: 0.87rem;
          color: #64748b;
          line-height: 1.6;
        }

        /* ── Block title ── */
        .au-block-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.7rem;
          font-weight: 800;
          color: #021B45;
          margin-bottom: 0.8rem;
          line-height: 1.3;
        }

        /* ── Tags row ── */
        .au-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-top: 1.25rem;
        }
        .au-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: #F0F9FF;
          border: 1px solid rgba(0,163,137,0.2);
          border-radius: 50px;
          padding: 0.35rem 0.9rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: #021B45;
        }
        .au-tag-icon {
          color: #00A389;
          display: flex; align-items: center;
          font-size: 0.95rem;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .au-hero { padding: 2.5rem 0 2rem; }
          .au-hero-title { font-size: 2rem; }
          .au-section { padding: 2.5rem 0; }
          .au-two-col {
            grid-template-columns: 1fr;
            gap: 1.75rem;
          }
          .au-two-col--reversed .au-img-block { order: 0; }
          .au-img-block img { height: 260px; }
          .au-exp-banner h2 { font-size: 1.4rem; }

          /* Redesigned story responsive grid */
          .au-story-grid {
            grid-template-columns: 1fr;
            gap: 3.5rem;
          }
          .au-story-left {
            position: relative;
            top: 0;
            gap: 1.5rem;
          }
          .au-story-quote {
            font-size: 2.3rem;
          }
          .au-exp-highlight { font-size: 1.65rem; }
          .au-vm-grid { grid-template-columns: 1fr; }
          .au-section-title { font-size: 1.65rem; }

          /* Redesigned VM responsive grid */
          .au-vm-grid-new {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .au-vm-left {
            position: relative;
            top: 0;
            gap: 1.5rem;
          }
          .au-vm-image-container {
            height: 280px;
          }
          .au-vm-title {
            font-size: 2.3rem;
          }
        }

        @media (max-width: 640px) {
          .au-page { padding-top: 60px; }
          .au-container { padding: 0 1.25rem; }
          .au-hero { padding: 2rem 0 1.6rem; }
          .au-hero-title { font-size: 1.7rem; }
          .au-hero-sub { font-size: 0.92rem; }
          .au-section { padding: 2rem 0; }
          .au-exp-banner { padding: 1.75rem 0; }
          .au-exp-icon { font-size: 2rem; }
          .au-exp-banner h2 { font-size: 1.2rem; }
          .au-exp-highlight { font-size: 1.4rem; }
          .au-img-block img { height: 220px; }

          /* Redesigned story mobile responsive */
          .au-story-section {
            padding: 4rem 0;
          }
          .au-story-timeline {
            padding-left: 2.2rem;
          }
          .au-timeline-line, .au-timeline-line-active {
            left: 11px;
            top: 24px;
            bottom: 24px;
          }
          .au-card-icon-wrapper {
            left: -37px;
            width: 32px;
            height: 32px;
            top: 20px;
          }
          .au-step-icon {
            font-size: 0.95rem;
          }
          .au-story-card {
            padding: 1.2rem;
            margin-bottom: 1.5rem;
          }
          .au-story-quote {
            font-size: 1.9rem;
          }
          .au-story-intro-card {
            padding: 1.5rem;
          }
          .au-story-intro-text {
            font-size: 0.95rem;
          }
          .au-vm-card { padding: 1.4rem 1.1rem; }
          .au-block-title { font-size: 1.4rem; }
          .au-section-title { font-size: 1.5rem; }
          .au-values-grid { grid-template-columns: 1fr 1fr; }

          /* Redesigned VM mobile responsive */
          .au-vm-section {
            padding: 4rem 0;
          }
          .au-vm-image-container {
            height: 220px;
          }
          .au-vm-interactive-card {
            padding: 1.5rem;
          }
          .au-vm-title {
            font-size: 1.9rem;
          }
        }

        @media (max-width: 480px) {
          .au-page { padding-top: 56px; }
          .au-container { padding: 0 1rem; }
          .au-hero { padding: 1.75rem 0 1.4rem; }
          .au-hero-title { font-size: 1.5rem; }
          .au-hero-sub { font-size: 0.88rem; }
          .au-section { padding: 1.75rem 0; }
          .au-exp-banner { padding: 1.5rem 0; }
          .au-block-title { font-size: 1.25rem; }
          .au-section-title { font-size: 1.35rem; }
          .au-img-block img { height: 195px; }
          .au-vm-card { padding: 1.2rem 1rem; }
          /* 1 column values on narrow */
          .au-values-grid { grid-template-columns: 1fr; }
          /* Tags wrap better */
          .au-tag { font-size: 0.8rem; }
          .au-exp-inner { gap: 0.75rem; }
          .au-exp-banner h2 { font-size: 1.1rem; }
          .au-exp-highlight { font-size: 1.25rem; }
        }

        @media (max-width: 400px) {
          .au-hero-title { font-size: 1.35rem; }
          .au-values-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;