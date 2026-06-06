import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "What Services Does RupeeVyze Offer?",
    a: "RupeeVyze provides a complete financial ecosystem including mutual funds, equity and commodity broking, PMS, AIFs, bonds, fixed deposits, insurance, loans, and real estate solutions — all under one roof."
  },
  {
    q: "Who Can Invest Or Use RupeeVyze Services?",
    a: "Any Indian resident aged 18 and above can invest through RupeeVyze. We serve salaried professionals, self-employed individuals, NRIs, and corporates looking to grow and manage their wealth smartly."
  },
  {
    q: "Is There A Minimum Investment Amount?",
    a: "You can start your investment journey with as little as ₹500 per month through our SIP plans. There is no upper limit, and our advisors will help you build a portfolio that fits your goals."
  },
  {
    q: "How Does RupeeVyze Recommend Financial Products?",
    a: "We use a data-driven approach combined with a deep profiling of your financial goals, risk appetite, and investment horizon. Our SEBI-registered advisors then craft a personalized strategy tailored just for you."
  },
  {
    q: "Is My Money And Data Safe With RupeeVyze?",
    a: "Absolutely. RupeeVyze is SEBI-registered and follows the highest compliance standards. Your investments are held with SEBI-regulated custodians and your personal data is encrypted end-to-end."
  },
  {
    q: "Can I Withdraw My Investments Anytime?",
    a: "Yes. Most mutual fund investments can be redeemed within 1–3 business days. Fixed deposits and lock-in products have specific tenure terms, which are clearly communicated before investing."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="faq-section">
      <div className="faq-blob faq-blob-1" />
      <div className="faq-blob faq-blob-2" />

      <div className="faq-header">
        <span className="faq-eyebrow">Frequently Asked Questions</span>
        <h2 className="faq-title">
          Got Questions?<br />
          <span className="faq-title-accent">We've Got Answers.</span>
        </h2>
      </div>

      <div className="faq-list">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
            >
              <div className="faq-question">
                <span className="faq-q-text">{faq.q}</span>
                <span className="faq-icon">
                  {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </div>
              <div className={`faq-answer-wrap ${isOpen ? 'faq-answer-wrap--open' : ''}`}>
                <p className="faq-answer">{faq.a}</p>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
