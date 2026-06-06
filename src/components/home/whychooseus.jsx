import "./whychooseus.css";

import HANDSHAKE_IMG from "../../assets/homepage/business_handshake.jpeg";

const features = [
  {
    id: 1,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#1C4481" strokeWidth="1.8"/>
        <path d="M9 12l2 2 4-4" stroke="#1C4481" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Wisdom In Every Rupee",
    desc: "Smart financial guidance empowering confident decisions, growth, security, and long-term wealth creation.",
  },
  {
    id: 2,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="8" height="8" rx="2" stroke="#1C4481" strokeWidth="1.8"/>
        <rect x="13" y="3" width="8" height="8" rx="2" stroke="#1C4481" strokeWidth="1.8"/>
        <rect x="3" y="13" width="8" height="8" rx="2" stroke="#1C4481" strokeWidth="1.8"/>
        <path d="M13 17h8M17 13v8" stroke="#1C4481" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: "Goal-Based Planning",
    desc: "Personalized strategies mapped to your life milestones — retirement, education, home or business growth.",
  },
  {
    id: 3,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" stroke="#1C4481" strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
    title: "SEBI Registered & Transparent",
    desc: "Regulated advisory with zero hidden costs — you always know where your money is and why.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="wcu-section">
      <div className="wcu-inner">

        <div className="wcu-left">
          <div className="wcu-circle-deco" />

          <img
            src={HANDSHAKE_IMG}
            alt="Business professionals handshake"
            className="wcu-img wcu-img-main"
            onError={(e) => { e.target.style.display = "none"; }}
          />

          <div className="wcu-call-card">
            <div className="wcu-call-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.6 21 3 14.4 3 6c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"
                  fill="#ffffff"
                />
              </svg>
            </div>
            <div className="wcu-call-text">
              <span className="wcu-call-label">Have Any Question? &nbsp;Call Anytime</span>
              <span className="wcu-call-number">+91 9686899698</span>
            </div>
          </div>
        </div>

        <div className="wcu-right">
          <p className="wcu-eyebrow">Why Choose Us?</p>

          <h2 className="wcu-heading">
            What Makes <span>RupeeVyze</span><br />Different
          </h2>

          <p className="wcu-desc">
            RupeeVyze combines expert guidance, transparent advice, and a goal-based
            approach to simplify finance, empower smart decisions, and help individuals
            build sustainable, long-term wealth with confidence.
          </p>

          <div className="wcu-features">
            {features.map((f) => (
              <div key={f.id} className="wcu-feature">
                <div className="wcu-feature-icon">{f.icon}</div>
                <div className="wcu-feature-body">
                  <span className="wcu-feature-title">{f.title}</span>
                  <span className="wcu-feature-desc">{f.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="wcu-divider" />

          <div className="wcu-stats">
            <div className="wcu-stat">
              <span className="wcu-stat-num">5000<em>+</em></span>
              <span className="wcu-stat-label">Happy Clients</span>
            </div>
            <div className="wcu-stat">
              <span className="wcu-stat-num">₹200<em>Cr+</em></span>
              <span className="wcu-stat-label">AUM Managed</span>
            </div>
            <div className="wcu-stat">
              <span className="wcu-stat-num">10<em>+</em></span>
              <span className="wcu-stat-label">Years Experience</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}