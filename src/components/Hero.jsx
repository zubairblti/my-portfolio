const Hero = () => {
  return (
    <section id="home" className="hero-two">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="hero-two__wrapper">
              <div className="row">
                <div className="col-12 col-md-7 col-lg-7 col-xl-6">
                  <div className="hero-two__inner">
                    <div className="hero-two__content fade-up">
                      <span className="tertiary-text text-uppercase sub-title fw-3 neutral-top">
                        HELLO! <img src="assets/images/hand.png" alt="Image" /> I'M ZUBAIR
                      </span>
                      <h1 className="title-xl title-animation fw-7 text-uppercase mt-20">
                        Full Stack <span className="secondary-text">Web Developer</span>
                      </h1>
                      <p className="text-xl primary-text mt-20">
                        I build scalable, high-performance web applications using Laravel, WordPress, and modern web technologies.
                      </p>
                      <div className="hero__two-cta mt-40">
                        <a href="#contact" className="btn--secondary" title="hire me" aria-label="hire me">
                          <span className="btn-animated-text" data-text="Hire Me!">Hire Me!</span>
                        </a>
                        <a href="/public/Muhammad-Zubair.pdf" target="_blank" className="btn--tertiary" title="download cv" aria-label="download cv">
                          <span className="btn-animated-text" data-text="Download CV">Download CV</span>
                        </a>
                      </div>
                    </div>
                    <div className="hero-two__group mt-160">
                      <div className="hero-two__left fade-up">
                        <div className="left-thumb">
                          <a href="#portfolio">
                            <img src="assets/images/banner/circle.png" alt="Image" />
                          </a>
                        </div>
                        <div className="right-thumb">
                          <div className="btn-wrapper">
                            <a href="#portfolio" className="btn-anim">
                              <i className="ph ph-arrow-up-right"></i>
                              View Works
                              <span></span>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <div className="hero-two__right fade-up" data-delay="400">
                        <div className="hero-two__group-thumb">
                          <div className="users">
                            <div className="single-user">
                              <img src="assets/images/avatar/seven.png" alt="Image" />
                            </div>
                            <div className="single-user">
                              <img src="assets/images/avatar/eight.png" alt="Image" />
                            </div>
                            <div className="single-user">
                              <img src="assets/images/avatar/nine.png" alt="Image" />
                            </div>
                            <div className="single-user">
                              <img src="assets/images/avatar/ten.png" alt="Image" />
                            </div>
                            <div className="single-user user-count">
                              <h3 className="fw-7">
                                <span className="odometer" data-odometer-final="25">0</span>
                                <span className="prefix">K</span>
                              </h3>
                            </div>
                          </div>
                          <p className="primary-text mt-20">Proud to have supported 20K+ clients.</p>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-two-thumb d-none d-md-block fade-up" data-delay="200">
                <img src="assets/images/banner/hero-two-thumb.png" alt="Image" />
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

