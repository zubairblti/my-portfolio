import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PricingFour = () => {
  const [pricingTab, setPricingTab] = useState('hourTwo');

  const pricingPlans = [
    {
      name: 'Basic Plan',
      price: '$15',
      period: '/ Per Month',
      features: [
        'Need your wireframe',
        'Your project alway be priority',
        'Design with Figma, Framer',
        '24 / 7 support'
      ]
    },
    {
      name: 'Standard Plan',
      price: '$45',
      period: '/ Per Month',
      features: [
        'Need your wireframe',
        'Your project alway be priority',
        'Design with Figma, Framer',
        '24 / 7 support'
      ],
      featured: true
    },
    {
      name: 'Premium Plan',
      price: '$75',
      period: '/ Per Month',
      features: [
        'Need your wireframe',
        'Your project alway be priority',
        'Design with Figma, Framer',
        '24 / 7 support'
      ]
    }
  ];

  useEffect(() => {
    // Initialize vanilla tilt for pricing cards
    if (window.VanillaTilt && document.querySelectorAll('.pricing-four .van-tilt').length > 0) {
      const vanTiltElements = document.querySelectorAll('.pricing-four .van-tilt');
      vanTiltElements.forEach((element) => {
        if (!element.hasAttribute('data-vanilla-tilt-initialized')) {
          window.VanillaTilt.init(element, {
            max: 10,
            speed: 3000,
          });
          element.setAttribute('data-vanilla-tilt-initialized', 'true');
        }
      });
    }
  }, [pricingTab]);

  return (
    <section className="pricing-four pt-160">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header-wrapper mb-60 fade-up">
              <div className="row gutter-20 align-items-center">
                <div className="col-12 col-sm-10 col-md-8 col-lg-8">
                  <div className="section__header">
                    <span className="sub-title tertiary-text text-uppercase neutral-top fw-6">Pricing Plan</span>
                    <h2 className="title-animation fw-6 mt-16">Flexible Pricing for Every Project</h2>
                  </div>
                </div>
                <div className="col-12 col-sm-10 col-md-8 col-lg-4">
                  <div>
                    <p className="primary-text">We put your ideas and thus your wishes in the form of a unique</p>
                    <div className="mt-30">
                      <div className="pr__tab-btns">
                        <button
                          data-target="#hourTwo"
                          className={`pr-tab-btn ${pricingTab === 'hourTwo' ? 'active' : ''}`}
                          onClick={() => setPricingTab('hourTwo')}
                        >
                          Hourly
                        </button>
                        <span></span>
                        <button
                          data-target="#projectTwo"
                          className={`pr-tab-btn ${pricingTab === 'projectTwo' ? 'active' : ''}`}
                          onClick={() => setPricingTab('projectTwo')}
                        >
                          Project Based
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="pricing-four__inner">
              <div
                className="pricing-four__item"
                id="hourTwo"
                style={{ display: pricingTab === 'hourTwo' ? 'block' : 'none' }}
              >
                <div className="row gutter-24">
                  {pricingPlans.map((plan, index) => (
                    <div key={index} className="col-12 col-md-6 col-lg-4">
                      <div className="van-tilt">
                        <div
                          className={`pricing-four__single fade-up ${plan.featured ? 'pricing-four__single-alt' : ''}`}
                          data-delay={index * 300}
                        >
                          <div className="content">
                            <span className="text-xxl fw-6 neutral-top">{plan.name}</span>
                            <h2 className="fw-6 mt-12">
                              <span className="title-xl">{plan.price}</span>
                              <span className="text-md primary-text fw-4"> {plan.period}</span>
                            </h2>
                          </div>
                          <div className="pricing-four__cta mt-60">
                            <Link to="/#contactSec">Get Started Now</Link>
                          </div>
                          <div className="pricing-four__description mt-60">
                            <ul>
                              {plan.features.map((feature, idx) => (
                                <li key={idx} className="primary-text">
                                  <i className="ph ph-caret-double-right"></i>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="pricing-four__item"
                id="projectTwo"
                style={{ display: pricingTab === 'projectTwo' ? 'block' : 'none' }}
              >
                <div className="row gutter-24">
                  {pricingPlans.map((plan, index) => (
                    <div key={index} className="col-12 col-md-6 col-lg-4">
                      <div className="van-tilt">
                        <div
                          className={`pricing-four__single fade-up ${plan.featured ? 'pricing-four__single-alt' : ''}`}
                          data-delay={index * 300}
                        >
                          <div className="content">
                            <span className="text-xxl fw-6 neutral-top">{plan.name}</span>
                            <h2 className="fw-6 mt-12">
                              <span className="title-xl">{plan.price}</span>
                              <span className="text-md primary-text fw-4"> / Per Project</span>
                            </h2>
                          </div>
                          <div className="pricing-four__cta mt-60">
                            <Link to="/#contactSec">Get Started Now</Link>
                          </div>
                          <div className="pricing-four__description mt-60">
                            <ul>
                              {plan.features.map((feature, idx) => (
                                <li key={idx} className="primary-text">
                                  <i className="ph ph-caret-double-right"></i>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingFour;

