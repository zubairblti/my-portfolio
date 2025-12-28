const Pricing = () => {
  const plans = [
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
      ]
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

  return (
    <section className="pricing-two pt-160 scale-wrapper">
      <div className="container">
        <div className="row gutter-60">
          <div className="col-12 col-lg-5 col-xxl-6">
            <div className="section__header neutral-top fade-up">
              <span className="sub-title tertiary-text text-uppercase neutral-top fw-6">Pricing Plan</span>
              <h2 className="title-animation fw-6 mt-16">Flexible Pricing for Every Project</h2>
              <p className="primary-text mt-16">
                Turning fleeting moments into timeless masterpieces every flash captures emotion, and perfection.
              </p>
              <div className="mt-40">
                <div className="btn-wrapper">
                  <a href="#contactSec" className="btn-anim">
                    <i className="ph ph-arrow-up-right"></i>
                    Contact Us
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xxl-6">
            <div className="pricing-two__wrapper">
              {plans.map((plan, index) => (
                <div key={index} className={`pricing-two__single ${index > 0 ? 'mt-25' : ''} scale-up`}>
                  <div className="pricing__content-left">
                    <span className="text-xxl fw-5">{plan.name}</span>
                    <h2 className="fw-6 mt-12">
                      <span className="title-lg">{plan.price}</span>
                      <span className="text-md primary-text fw-4"> {plan.period}</span>
                    </h2>
                    <div className="mt-40">
                      <a href="#contactSec" className="btn--secondary" title="hire me" aria-label="hire me">
                        <span className="btn-animated-text" data-text="Get Started">Get Started</span>
                      </a>
                    </div>
                  </div>
                  <div className="pricing__content-right">
                    <h6 className="fw-5">What's Include:</h6>
                    <ul className="mt-25">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="primary-text">
                          <i className="ph ph-caret-double-right"></i>{feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

