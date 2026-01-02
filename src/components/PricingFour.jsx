import { useEffect } from 'react';

const PricingFour = () => {
  const pricingPlans = [
    {
      name: 'WordPress Development',
      price: 'Starting $180',
      features: [
        'Custom themes & templates',
        'Plugin integration & setup',
        'WooCommerce eCommerce sites',
        'Responsive & optimized'
      ]
    },
    {
      name: 'Laravel Development',
      price: 'Starting $350',
      features: [
        'Custom web applications',
        'REST API integration',
        'Admin panel & dashboard',
        'Secure & scalable code'
      ],
      featured: true
    },
    {
      name: 'Support & Extras',
      price: 'Starting $100',
      features: [
        'Website maintenance & updates',
        'Performance optimization & SEO',
        'Website Design & Layout Services',
        '24 / 7 support'
      ]
    }
  ];
   useEffect(() => {
    if (window.VanillaTilt) {
      const elements = document.querySelectorAll('.pricing-four .van-tilt');
      elements.forEach((el) => {
        if (!el.hasAttribute('data-vanilla-tilt-initialized')) {
          window.VanillaTilt.init(el, { max: 10, speed: 3000 });
          el.setAttribute('data-vanilla-tilt-initialized', 'true');
        }
      });
    }
  }, []);
  return (
    <section id="pricing" className="pricing-four">
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
                    <p className="primary-text">We transform your ideas into functional and scalable websites & applications.</p>
                    <div className="mt-30">
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
              <div className="pricing-four__item">
                <div className="row gutter-24">
                  {pricingPlans.map((plan, index) => (
                    <div key={index} className="col-12 col-md-6 col-lg-4">
                      <div className="van-tilt">
                        <div className={`pricing-four__single fade-up ${plan.featured ? 'pricing-four__single-alt' : ''}`} data-delay={index * 300}>
                          <div className="content">
                            <span className="text-xxl fw-6 neutral-top">{plan.name}</span>
                            <h2 className="fw-6 mt-12">
                              <span className="title-xl">{plan.price}</span>
                            </h2>
                          </div>
                          <div className="pricing-four__cta mt-60">
                            <a href="#contact" onClick={(e) => {
                              e.preventDefault();
                              const element = document.querySelector('#contact');
                              if (element) {
                                if (window.gsap && window.gsap.utils && window.gsap.to) {
                                  window.gsap.to(window, {
                                    duration: 1,
                                    scrollTo: { y: element, offsetY: 100 },
                                    ease: "power2.inOut"
                                  });
                                } else {
                                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }
                              }
                            }}>Hire Me Now</a>
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