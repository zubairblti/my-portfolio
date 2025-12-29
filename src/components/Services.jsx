import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      number: '01.',
      image: 'assets/images/service/one.png',
      title: 'Front-End Development',
      link: '#'
    },
    {
      number: '02.',
      image: 'assets/images/service/one.png',
      title: 'Web Application Development',
      link: '#'
    },
    {
      number: '03.',
      image: 'assets/images/service/one.png',
      title: 'Back-End Development',
      link: '#'
    },
    {
      number: '04.',
      image: 'assets/images/service/one.png',
      title: 'API Theme Development',
      link: '#'
    }
  ];

  return (
    <section className="service-two pt-160" id="serviceSec">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header-wrapper mb-60 fade-up">
              <div className="row gutter-20 align-items-center">
                <div className="col-12 col-sm-10 col-md-8 col-lg-8">
                  <div className="section__header">
                    <span className="sub-title tertiary-text text-uppercase neutral-top fw-6">OUR SERVICES</span>
                    <h2 className="title-animation fw-6 mt-16">Development Services Tailored to Your Needs</h2>
                  </div>
                </div>
                <div className="col-12 col-sm-10 col-md-8 col-lg-4">
                  <div>
                    <p className="primary-text">Custom web and app development solutions designed for your success.</p>
                    <div className="mt-30">
                      <Link to="/our-services" className="btn-primary">
                        <span className="btn-animated-text" data-text="View More">View More</span>
                        <span className="btn-icon">
                          <i className="ph ph-arrow-up-right"></i>
                          <i className="ph ph-arrow-up-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row gutter-24">
          {services.map((service, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 col-xl-3">
              <div className={`service__single ${index === 0 ? 'active' : ''} fade-up`} data-delay={index * 200}>
                <span className="text-xl fw-5">{service.number}</span>
                <div className="thumb mt-60">
                  <a href={service.link}>
                    <img src={service.image} alt="Image" />
                  </a>
                </div>
                <div className="content mt-60">
                  <h5>
                    <a href={service.link} className="title-animation fw-5">{service.title}</a>
                  </h5>
                  <div className="content__cta mt-40">
                    <a href={service.link}>View More <i className="ph-bold ph-arrow-up-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

