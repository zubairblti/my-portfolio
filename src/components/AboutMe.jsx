const AboutMe = () => {
  return (
    <section id="about" className="about-me pt-160">
      <div className="container">
        <div className="row gutter-40 align-items-end">
          <div className="col-12 col-lg-6">
            <div className="about-me__thumb">
              <div className="hero-two-thumb d-none d-md-block fade-up">
                <img src="assets/images/about/thumb.png" alt="Image" />
                <span></span>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="about-me__content fade-up" data-delay="300">
              <span className="neutral-top tertiary-text">ABOUT ME</span>
              <h2 className="title-animation mt-16">
                My Name is <span>Robert Fox</span>
              </h2>
              <p className="primary-text mt-16">Freelance Designer & Developer.</p>
              <p className="primary-text mt-16">
                A Freelance UI/UX Designer and Developer based in Germany. through carefully crafted user-centric design.
              </p>
              <ul className="mt-60">
                <li>
                  <span className="primary-text">Phone</span>
                  <span className="colon">:</span>
                  <span className="color-right">(684) 555-0102</span>
                </li>
                <li>
                  <span className="primary-text">Email</span>
                  <span className="colon">:</span>
                  <span className="color-right">weaver@example.com</span>
                </li>
                <li>
                  <span className="primary-text">Experience</span>
                  <span className="colon">:</span>
                  <span className="color-right">15+ Years</span>
                </li>
                <li>
                  <span className="primary-text">Freelance</span>
                  <span className="colon">:</span>
                  <span className="color-right">Available</span>
                </li>
                <li>
                  <span className="primary-text">Skype</span>
                  <span className="colon">:</span>
                  <span className="color-right">German, English</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

