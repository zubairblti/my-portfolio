import { useEffect } from 'react';

const ServiceList = () => {
  const services = [
    {
      id: 1,
      image: 'assets/images/service/design.png',
      number: '01',
      title: 'GRAPHIC DESIGN',
      description: 'Our graphic design services everything from materials to digital graphics. We clearly and effectively.',
      delay: 0
    },
    {
      id: 2,
      image: 'assets/images/service/brand.png',
      number: '02',
      title: 'BRAND GUIDELINES',
      description: 'Our graphic design services everything from materials to digital graphics. We clearly and effectively.',
      delay: 300
    },
    {
      id: 3,
      image: 'assets/images/service/package.png',
      number: '03',
      title: 'PACKAGING DESIGN',
      description: 'Our graphic design services everything from materials to digital graphics. We clearly and effectively.',
      delay: 600
    },
    {
      id: 4,
      image: 'assets/images/service/data.png',
      number: '04',
      title: 'DATA ANALYTIC',
      description: 'Our graphic design services everything from materials to digital graphics. We clearly and effectively.',
      delay: 300
    },
    {
      id: 5,
      image: 'assets/images/service/interaction.png',
      number: '05',
      title: 'INTERACTION DESIGN',
      description: 'Our graphic design services everything from materials to digital graphics. We clearly and effectively.',
      delay: 600
    },
    {
      id: 6,
      image: 'assets/images/service/digital.png',
      number: '06',
      title: 'DIGITAL MARKETING',
      description: 'Our graphic design services everything from materials to digital graphics. We clearly and effectively.',
      delay: 900
    }
  ];

  useEffect(() => {
    // Initialize vanilla tilt for service cards
    if (window.VanillaTilt && document.querySelectorAll('.service .van-tilt').length > 0) {
      const vanTiltElements = document.querySelectorAll('.service .van-tilt');
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
  }, []);

  return (
    <section id="services" className="service pt-160">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header-wrapper mb-60 fade-up">
              <div className="row gutter-20 align-items-center">
                <div className="col-12 col-sm-10 col-md-8 col-lg-8">
                  <div className="section__header">
                    <span className="sub-title tertiary-text text-uppercase neutral-top fw-6">OUR SERVICES</span>
                    <h2 className="title-animation fw-6 mt-16">Design Services Tailored to Your Needs</h2>
                  </div>
                </div>
                <div className="col-12 col-sm-10 col-md-8 col-lg-4">
                  <div>
                    <p className="primary-text">Custom creative solutions designed elevate your brand and identity.</p>
                    <div className="mt-30">
                      <a href="#services" className="btn-primary" onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector('#services');
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
                      }}>
                        <span className="btn-animated-text" data-text="View More">View More</span>
                        <span className="btn-icon">
                          <i className="ph ph-arrow-up-right"></i>
                          <i className="ph ph-arrow-up-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row gutter-24">
          {services.map((service, index) => (
            <div key={service.id} className={`col-12 col-md-6 col-xl-4 ${index > 2 ? '' : 'fade-up'}`} data-delay={service.delay}>
              {index > 2 ? (
                <div className="service__single-wrapper fade-up" data-delay={service.delay}>
                  <div className="service__single van-tilt">
                    <div className="service__thumb">
                      <img src={service.image} alt="Image" />
                      <span className="title-lg fw-6 bg-text">{service.number}</span>
                    </div>
                    <div className="service__content mt-40">
                      <h6 className="fw-6">
                        <a href="#services" onClick={(e) => e.preventDefault()}>{service.title}</a>
                      </h6>
                      <p className="primary-text text-md mt-16">{service.description}</p>
                    </div>
                    <div className="service__cta mt-60">
                      <a href="#services" onClick={(e) => e.preventDefault()}>
                        VIEW DETAILS <img src="assets/images/half-arrow.png" alt="Image" />
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="service__single van-tilt">
                  <div className="service__thumb">
                    <img src={service.image} alt="Image" />
                    <span className="title-lg fw-6 bg-text">{service.number}</span>
                  </div>
                  <div className="service__content mt-40">
                    <h6 className="fw-6">
                      <a href="#services" onClick={(e) => e.preventDefault()}>{service.title}</a>
                    </h6>
                    <p className="primary-text text-md mt-16">{service.description}</p>
                  </div>
                  <div className="service__cta mt-60">
                    <a href="#services" onClick={(e) => e.preventDefault()}>
                      VIEW DETAILS <img src="assets/images/half-arrow.png" alt="Image" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-12">
            <div className="pagination-wrapper mt-60 fade-up">
              <ul className="pagination">
                <li>
                  <button>
                    <i className="ph ph-caret-double-left"></i>
                  </button>
                </li>
                <li>
                  <a href="#services" onClick={(e) => e.preventDefault()}>1</a>
                </li>
                <li>
                  <a href="#services" className="active" onClick={(e) => e.preventDefault()}>2</a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => e.preventDefault()}>3</a>
                </li>
                <li>
                  <button>
                    <i className="ph ph-caret-double-right"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceList;

