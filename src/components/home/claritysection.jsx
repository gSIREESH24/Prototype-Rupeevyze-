import "./claritysection.css";

import HERO_IMAGE from "../../assets/homepage/clarity_hero.jpeg";

const AGENT_IMAGE =
  "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=120&h=120&fit=crop&crop=face";

export default function ClaritySection() {
  return (
    <section className="clarity-section">
      <div className="clarity-card">

        <div className="clarity-left">
          <div className="clarity-grid-overlay" />

          <div className="clarity-left-content">
            <div className="clarity-tag">
              <span className="clarity-tag-dot" />
              About RupeeVyze
            </div>

            <h2 className="clarity-heading">
              Turning <span>Financial</span><br />
              Complexity into Clarity
            </h2>

            <p className="clarity-subtext">
              We simplify investments and financial decisions, helping individuals
              build confidence, security, and sustainable wealth — one goal at a time.
            </p>

            <div className="clarity-cta-row">
              <a href="https://rupeevyze.com/apply-now/" className="clarity-btn">
                Start Now
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              <a href="tel:+919686899698" className="clarity-agent">
                <div className="clarity-agent-avatar">
                  <img
                    src={AGENT_IMAGE}
                    alt="Contact Agent"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentNode.innerHTML = `
                        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="20" cy="15" r="7" stroke="white" strokeWidth="1.8" fill="none"/>
                          <path d="M6 36c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                        </svg>`;
                    }}
                  />
                </div>
                <div className="clarity-agent-info">
                  <span className="clarity-agent-label">Contact Agent</span>
                  <span className="clarity-agent-phone">+91 9686899698</span>
                </div>
              </a>
            </div>

            <div className="clarity-stats">
              <div className="clarity-stat">
                <div className="clarity-stat-num">5000<span>+</span></div>
                <div className="clarity-stat-label">Happy Clients</div>
              </div>
              <div className="clarity-stat">
                <div className="clarity-stat-num">₹200<span>Cr+</span></div>
                <div className="clarity-stat-label">AUM Managed</div>
              </div>
              <div className="clarity-stat">
                <div className="clarity-stat-num">10<span>+</span></div>
                <div className="clarity-stat-label">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        <div className="clarity-right">
          <img
            src={HERO_IMAGE}
            alt="Financial advisor consulting client"
            onError={(e) => {
              e.target.parentNode.style.background =
                "linear-gradient(135deg, #1a4fa8 0%, #2B72EE 100%)";
              e.target.style.display = "none";
            }}
          />
          <div className="clarity-img-overlay" />

          <div className="clarity-badge">
            <div className="clarity-badge-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5Z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
                <path d="M2 17l10 5 10-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12l10 5 10-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="clarity-badge-text">
              <span className="clarity-badge-num">SEBI Registered</span>
              <span className="clarity-badge-sub">Trusted & Regulated Advisor</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}