import React from 'react';
import bannerBg from '../../assets/banner_bg.png';

export default function BannerSection() {
  return (
    <div className="banner-section">
      <img src={bannerBg} alt="Indian financial team" className="banner-bg-img" />

      <div className="banner-overlay" />

      <div className="banner-dots banner-dots-left">
        {[...Array(20)].map((_, i) => (
          <span key={i} className="banner-dot" />
        ))}
      </div>

      <div className="banner-chevrons">
        <svg width="52" height="80" viewBox="0 0 52 80" fill="none">
          <polyline points="4,4 26,26 4,48"   stroke="rgba(255,255,255,0.18)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <polyline points="22,4 44,26 22,48"  stroke="rgba(255,255,255,0.10)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <polyline points="4,36 26,58 4,80"   stroke="rgba(255,255,255,0.12)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <polyline points="22,36 44,58 22,80" stroke="rgba(255,255,255,0.06)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      </div>

      <div className="banner-circle-right" />

      <div className="banner-content">
        <h2 className="banner-title">
          A Partnership For<br />
          Business <span className="banner-title-gold">Triumphs</span>
        </h2>
        <p className="banner-subtitle">Your Vision, Our Support</p>
      </div>

      <div className="banner-shape-br" />
    </div>
  );
}
