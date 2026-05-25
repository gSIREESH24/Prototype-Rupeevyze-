import React from 'react';
import { FiTarget, FiEye, FiAward } from 'react-icons/fi';
import { FaHandshake, FaRupeeSign, FaChartLine, FaUsers, FaStore, FaLandmark } from 'react-icons/fa';

const AboutUs = () => {
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

      {/* ── Story ── */}
      <section className="au-section au-section--white">
        <div className="au-container">
          <div className="au-two-col">
            <div className="au-text-block">
              <p className="au-question">
                <strong>Why does managing money feel so complicated, when it should be empowering?</strong>
              </p>
              <p>That question sparked the birth of <strong className="au-green">RupeeVyze</strong>.</p>
              <p>
                We started with a clear mission — to make financial wisdom accessible, practical, and
                empowering for every Indian. Our goal is to simplify investing, trading, and long‑term
                wealth creation for Gen Z, millennials, and investors across all stages of life.
              </p>
              <p>
                At RupeeVyze, we believe money is not just numbers on a screen. It is a powerful enabler of
                freedom, security, and dreams. When guided by the right knowledge, every rupee has the
                potential to create lasting value.
              </p>
            </div>
            <div className="au-img-block">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Indian business team collaborating"
                loading="lazy"
              />
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

      {/* ── Vision & Mission ── */}
      <section className="au-section au-section--white">
        <div className="au-container">
          <div className="au-vm-grid">
            {/* Vision */}
            <div className="au-vm-card">
              <div className="au-vm-icon"><FiEye /></div>
              <h3>Our Vision</h3>
              <p>
                To become India's most trusted financial wellness platform, empowering every Indian to make
                informed investment decisions and achieve financial independence through accessible,
                transparent, and technology‑driven solutions.
              </p>
              <div className="au-vm-img">
                <img
                  src="https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80"
                  alt="Indian stock market and finance"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Mission */}
            <div className="au-vm-card">
              <div className="au-vm-icon"><FiTarget /></div>
              <h3>Our Mission</h3>
              <p>
                To simplify investing and wealth management for every Indian by providing expert guidance,
                transparent advice, and goal‑based financial solutions that work for every stage of life —
                from first‑time investors to seasoned traders.
              </p>
              <div className="au-vm-img">
                <img
                  src="https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80"
                  alt="Indian family planning finances"
                  loading="lazy"
                />
              </div>
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
          .au-exp-highlight { font-size: 1.65rem; }
          .au-vm-grid { grid-template-columns: 1fr; }
          .au-section-title { font-size: 1.65rem; }
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
          .au-vm-card { padding: 1.4rem 1.1rem; }
          .au-block-title { font-size: 1.4rem; }
          .au-section-title { font-size: 1.5rem; }
          .au-values-grid { grid-template-columns: 1fr 1fr; }
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