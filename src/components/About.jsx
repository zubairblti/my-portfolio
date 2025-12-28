const About = () => {
  return (
    <section className="about pt-160" id="aboutSec">
      <div className="container">
        <div className="row gutter-40">
          <div className="col-12 col-lg-6">
            <div className="about__intro fade-up">
              <span className="tertiary-text text-uppercase sub-title fw-6 neutral-top">About Us</span>
              <h3 className="title-animation mt-16">
                Hi, I'm Subrata, a Berlin-based digital Developer creating bold & impactful Developer that make a difference.
              </h3>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="about__counter neutral-top">
              <h2 className="title-xxl fw-8 secondary-text">
                <span className="odometer" data-odometer-final="225">0</span>
                <span className="prefix">+</span>
              </h2>
              <span className="text-xl text-uppercase fw-4 primary-text complete-text">Completed Projects</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="about__inner mt-160">
              <div className="row gutter-40">
                <div className="col-12 col-lg-6">
                  <div className="about__award neutral-top">
                    <h2 className="title-xxl secondary-text">
                      <span className="odometer" data-odometer-final="25">0</span>
                      <span className="prefix">+</span>
                    </h2>
                    <h5 className="title-xxl fw-8 secondary-text">AWARDS</h5>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="about__content fade-up" data-delay="300">
                    <p className="primary-text neutral-top text-xl">
                      Most talented digital marketer with 10+ years of real work experience, seeking to elevate
                      I've spent most of my waking hours for the developing tools operating most marketing sites go beyond with exclusive organizing tools.
                    </p>
                    <p className="primary-text text-xl mt-25">
                      Most talented digital with 10+ years of real work experience, everything started with great marketing plan.
                    </p>
                    <div className="about__content-cta mt-40">
                      <a href="#aboutSec" className="btn-primary">
                        <span className="btn-animated-text" data-text="About Us">About Us</span>
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
      </div>
    </section>
  );
};

export default About;

