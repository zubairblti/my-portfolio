import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PricingAlt = () => {
  const [pricingTab, setPricingTab] = useState('monthly');

  const pricingPlans = [
    {
      name: 'Basic Plan',
      description: 'Low cost & affordable services to get you started very soon.',
      price: '$15',
      period: '/ Per Month',
      active: false
    },
    {
      name: 'Standard Plan',
      description: 'Low cost & affordable services to get you started very soon.',
      price: '$45',
      period: '/ Per Month',
      active: true
    },
    {
      name: 'Standard Plan',
      description: 'Low cost & affordable services to get you started very soon.',
      price: '$65',
      period: '/ Per Month',
      active: false
    }
  ];

  const features = [
    'Need your wireframe',
    'Design with Figma, Framer',
    'Implement with WordPress, Laravel/PHP',
    'Your project alway be priority',
    'Design with Figma, Framer',
    'Need your wireframe',
    '24 / 7 support'
  ];

  useEffect(() => {
    // Initialize pricing tabs (like main.js)
    if (document.querySelector('.pricing.pr-c')) {
      const pricingItems = document.querySelectorAll('.pricing__tab-single');
      if (pricingItems.length > 0) {
        pricingItems.forEach((item, index) => {
          if (index === 0) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      }
    }
  }, []);

  useEffect(() => {
    // Update tab visibility when state changes
    const monthlyTab = document.getElementById('monthly');
    const yearlyTab = document.getElementById('yearly');
    if (monthlyTab && yearlyTab) {
      if (pricingTab === 'monthly') {
        monthlyTab.style.display = 'block';
        yearlyTab.style.display = 'none';
      } else {
        monthlyTab.style.display = 'none';
        yearlyTab.style.display = 'block';
      }
    }
  }, [pricingTab]);

  return (
    <section className="pricing pr-c pt-160 scale-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header text-center mb-60 fade-up">
              <span className="sub-title secondary-text text-uppercase neutral-top fw-6">Pricing Plan</span>
              <h2 className="title-animation fw-6 mt-16">Flexible Pricing Plan</h2>
              <p className="primary-text mt-16">
                Comprehensive strategies, the realm of consulting caters to a spectrum of needs with its array of versatile offerings.
              </p>
            </div>
          </div>
        </div>
        <div className="row gutter-40">
          <div className="col-12 col-xl-7">
            <div className="pricing__inner">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`pricing__single ${plan.active ? 'active' : ''} mt-25 scale-up`} style={index === 0 ? { marginTop: 0 } : {}}>
                  <div className="content">
                    <h5 className="fw-6">{plan.name}</h5>
                    <p className="primary-text mt-12">{plan.description}</p>
                  </div>
                  <div className="thumb">
                    <h2 className="title-lg fw-6">{plan.price}</h2>
                    <p className="primary-text text-md mt-8">{plan.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 col-xl-5">
            <div className="pricing__sidebar fade-left">
              <div className="pricing__tab-btns">
                <button
                  data-target="#monthly"
                  className={`pricing-tab-btn ${pricingTab === 'monthly' ? 'pricing-active' : ''}`}
                  onClick={() => setPricingTab('monthly')}
                >
                  Monthly
                </button>
                <span></span>
                <button
                  data-target="#yearly"
                  className={`pricing-tab-btn ${pricingTab === 'yearly' ? 'pricing-active' : ''}`}
                  onClick={() => setPricingTab('yearly')}
                >
                  Yearly
                </button>
              </div>
              <div className="pricing__tab-wrapper mt-40">
                <div className="pricing__tab-single" id="monthly" style={{ display: pricingTab === 'monthly' ? 'block' : 'none' }}>
                  <ul>
                    {features.map((feature, index) => (
                      <li key={index} className="primary-text">
                        <i className="ph ph-caret-double-right"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pricing__tab-single" id="yearly" style={{ display: pricingTab === 'yearly' ? 'block' : 'none' }}>
                  <ul>
                    {features.map((feature, index) => (
                      <li key={index} className="primary-text">
                        <i className="ph ph-caret-double-right"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="pricing__cta mt-60">
                <Link to="/contact-us" className="btn--secondary" title="GET STARTED" aria-label="GET STARTED">
                  <span className="btn-animated-text" data-text="GET STARTED">GET STARTED</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingAlt;

