const AboutMe = () => {
  return (
    <section id="about" className="about-me pt-160">
      <div className="container">
        <div className="row gutter-40 align-items-end">
          <div className="col-12 col-lg-6">
            <div className="about-me__thumb">
              <div className="hero-two-thumb d-none d-md-block fade-up">
                <img src="assets/images/about/thumb.png" alt="Zubair - Web Developer" />
                <span></span>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="about-me__content fade-up" data-delay="300">
              <span className="neutral-top tertiary-text">ABOUT ME</span>
              <h2 className="title-animation mt-16">
                My Name is <span>Zubair</span>
              </h2>
              <p className="primary-text mt-16">
                Full Stack Web Developer
              </p>
              <p className="primary-text mt-16">
                I am a professional Web Developer with 4+ years of experience specializing in
                Laravel, WordPress, and custom web applications.
                I have worked with startups, enterprises, and remote teams to build secure,
                scalable, and high-performance digital solutions.
              </p>
              <ul className="mt-60">
                <li>
                  <span className="primary-text">Phone</span>
                  <span className="colon">:</span>
                  <span className="color-right">0309-9486261</span>
                </li>
                <li>
                  <span className="primary-text">Email</span>
                  <span className="colon">:</span>
                  <span className="color-right">blti42766@gmail.com</span>
                </li>
                <li>
                  <span className="primary-text">Experience</span>
                  <span className="colon">:</span>
                  <span className="color-right">4+ Years</span>
                </li>
                <li>
                  <span className="primary-text">Freelance</span>
                  <span className="colon">:</span>
                  <span className="color-right">Available</span>
                </li>
                <li>
                  <span className="primary-text">Languages</span>
                  <span className="colon">:</span>
                  <span className="color-right">English, Urdu</span>
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