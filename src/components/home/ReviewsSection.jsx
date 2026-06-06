import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviewsData = [
  {
    id: 1,
    name: "Ananya Iyer",
    location: "Chennai",
    initials: "AI",
    role: "SIP Investor",
    content: "The RupeeVyze team patiently explained every option and helped me start with SIPs. Highly trustworthy and professional.",
    color: "#1C4481"
  },
  {
    id: 2,
    name: "Rahul Sharma",
    location: "Mumbai",
    initials: "RS",
    role: "Equity Trader",
    content: "I've seen a 15% growth in my portfolio since I started following their recommendations. A true game-changer!",
    color: "#00A389"
  },
  {
    id: 3,
    name: "Priya Desai",
    location: "Bengaluru",
    initials: "PD",
    role: "Mutual Fund Investor",
    content: "RupeeVyze makes investing accessible even if you don't have a finance background. Absolutely love it.",
    color: "#1C4481"
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Delhi",
    initials: "VS",
    role: "Long-Term Planner",
    content: "Reassuring to know my hard-earned money is in good hands. The support team is always prompt and helpful.",
    color: "#00A389"
  },
  {
    id: 5,
    name: "Neha Gupta",
    location: "Hyderabad",
    initials: "NG",
    role: "Portfolio Builder",
    content: "Transparent fees and excellent fund selection. I've recommended RupeeVyze to all my friends and family.",
    color: "#1C4481"
  }
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="reviews-section">
      <div className="reviews-header">
        <span className="reviews-eyebrow">Testimonial</span>
        <h2 className="reviews-title">
          What Our <span className="reviews-title-accent">Clients</span> Say?
        </h2>
        <div className="reviews-stars-row">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="#F5C518" color="#F5C518" strokeWidth={0} />
          ))}
          <span className="rating-score">4.5</span>
          <span className="rating-label">/ 5 · from 1,000+ reviews</span>
        </div>
      </div>

      <div className="reviews-scroller-wrap">
        <div className="reviews-scroller">
          {[...reviewsData, ...reviewsData].map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-card-top">
                <div className="review-quote-icon">
                  <Quote size={14} color="#fff" fill="#fff" />
                </div>
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="#F5C518" color="#F5C518" strokeWidth={0} />
                  ))}
                </div>
              </div>
              <p className="review-content">"{review.content}"</p>
              <div className="review-author-row">
                <div className="review-avatar" style={{ background: review.color }}>
                  {review.initials}
                </div>
                <div>
                  <p className="review-author-name">{review.name}</p>
                  <p className="review-author-meta">{review.role} · {review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
