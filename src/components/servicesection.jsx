import { useState } from "react";
import "./servicesection.css";

const services = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
        <circle cx="32" cy="20" r="10" stroke="white" strokeWidth="2.2" fill="none"/>
        <path d="M20 44c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="white" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
        <path d="M38 30l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26 34l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
        <circle cx="50" cy="46" r="6" stroke="white" strokeWidth="2" fill="none"/>
        <path d="M47 46h6M50 43v6" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: "Mutual Funds",
    description: "Goal-based mutual fund solutions through SIPs, SWPs, STPs, and strategic planning.",
    link: "https://rupeevyze.com/mutual-fund/",
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
        <path d="M10 40 Q20 20 32 28 Q44 36 54 16" stroke="white" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
        <circle cx="54" cy="16" r="3" fill="white"/>
        <path d="M44 40l10 0M49 35l5 5-5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="8" y="44" width="10" height="8" rx="2" stroke="white" strokeWidth="2" fill="none"/>
        <rect x="22" y="38" width="10" height="14" rx="2" stroke="white" strokeWidth="2" fill="none"/>
        <rect x="36" y="32" width="10" height="20" rx="2" stroke="white" strokeWidth="2" fill="none"/>
      </svg>
    ),
    title: "Equity & Commodity Broking",
    description: "Expert-backed equity and commodity trading with disciplined, informed market strategies.",
    link: "https://rupeevyze.com/equity-and-commodity-broking-ipo-unlisted-shares/",
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
        <rect x="8" y="24" width="48" height="32" rx="4" stroke="white" strokeWidth="2.2" fill="none"/>
        <path d="M20 24V18a12 12 0 0 1 24 0v6" stroke="white" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
        <circle cx="32" cy="40" r="5" stroke="white" strokeWidth="2" fill="none"/>
        <path d="M32 45v5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 32h4M44 32h4" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),
    title: "PMS, AIF & Structured Products",
    description: "Advanced investment solutions for high-net-worth investors seeking professional portfolio management.",
    link: "https://rupeevyze.com/portfolio-management-system-pms-aif-sif-structured-products-mlds/",
  },
  {
    id: 4,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
        <rect x="10" y="28" width="44" height="26" rx="3" stroke="white" strokeWidth="2.2" fill="none"/>
        <path d="M10 36h44" stroke="white" strokeWidth="2" opacity="0.5"/>
        <path d="M20 28V20a12 8 0 0 1 24 0v8" stroke="white" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
        <path d="M24 42h16M24 48h10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Corporate Fixed Deposits",
    description: "Stable, predictable returns through carefully selected, high-quality corporate fixed deposits.",
    link: "https://rupeevyze.com/fixed-deposit/",
  },
  {
    id: 5,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
        <path d="M32 8 L54 18 L54 32 C54 44 44 54 32 58 C20 54 10 44 10 32 L10 18 Z" stroke="white" strokeWidth="2.2" fill="none" strokeLinejoin="round"/>
        <path d="M22 32l7 7 13-14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Bonds & Debt Instruments",
    description: "Reliable income generation using diversified government and corporate bond investment options.",
    link: "#",
  },
  {
    id: 6,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
        <path d="M32 8l24 12v14c0 12-10 22-24 24C18 56 8 46 8 34V20Z" stroke="white" strokeWidth="2.2" fill="none"/>
        <path d="M20 30c0-8 24-8 24 0" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <rect x="20" y="30" width="24" height="16" rx="2" stroke="white" strokeWidth="2" fill="none"/>
        <path d="M28 38h8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="32" cy="34" r="2" fill="white"/>
      </svg>
    ),
    title: "Loans & Realty",
    description: "Complete loan assistance and curated real estate investments aligned with financial goals.",
    link: "#",
  },
  {
    id: 7,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
        <circle cx="32" cy="32" r="22" stroke="white" strokeWidth="2.2" fill="none"/>
        <path d="M32 20v12l8 4" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 32h4M44 32h4M32 16v-4M32 52v-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.5"/>
        <circle cx="32" cy="32" r="3" fill="white"/>
      </svg>
    ),
    title: "Insurance Solutions",
    description: "Comprehensive protection plans covering life, property, travel, and businesses.",
    link: "#",
  },
  {
    id: 8,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
        <rect x="12" y="8" width="40" height="48" rx="4" stroke="white" strokeWidth="2.2" fill="none"/>
        <path d="M20 20h24M20 28h24M20 36h14" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
        <circle cx="44" cy="44" r="8" stroke="white" strokeWidth="2" fill="none"/>
        <path d="M41 44h6M44 41v6" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: "Tax Planning & Filing",
    description: "End-to-end tax planning, ITR filing, and saving strategies to legally minimise your tax liability.",
    link: "#",
  },
];

export default function ServicesSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="rv-services-section">
      <p className="rv-services-label">Services</p>
      <h2 className="rv-services-heading">
        Smart Financial Solutions<br />For Every Goal, Every Stage Of Life
      </h2>

      <div className="rv-services-grid">
        {services.map((s) => (
          <div
            key={s.id}
            className="rv-card"
            onMouseEnter={() => setHovered(s.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="rv-icon-wrap">{s.icon}</div>
            <h4 className="rv-card-title">{s.title}:</h4>
            <p className="rv-card-desc">{s.description}</p>
            <a href={s.link} className="rv-learn-more">
              Learn More
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}