import { useEffect } from 'react';

const PortfolioList = () => {
  useEffect(() => {
    // Initialize portfolio thumb hover functionality
    if (window.$ && window.$(".portfolio__single").length > 0) {
      // Show first portfolio thumb by default
      window.$(".portfolio__single").first().find(".portfolio__thumb").show();

      // Handle hover on portfolio items
      window.$(".portfolio__single").on("mouseenter", function () {
        const $thumb = window.$(this).find(".portfolio__thumb");

        if (!$thumb.is(":visible")) {
          window.$(".portfolio__thumb").slideUp();
          $thumb.stop(true, true).slideDown();
        }
      });

      // Initialize button text splitting
      if (window.$(".btn-animated-text").length) {
        window.$(".btn-animated-text").each(function () {
          const $btn = window.$(this);
          const text = $btn.attr("data-text");
          $btn.empty();

          if (!text) return;

          for (let i = 0; i < text.length; i++) {
            const char = text[i] === " " ? "\u00A0" : text[i];
            const $span = window.$("<span></span>").attr("data-text", char).text(char);
            $btn.append($span);
          }
        });
      }
    }

    // Cleanup function
    return () => {
      if (window.$) {
        window.$(".portfolio__single").off("mouseenter");
      }
    };
  }, []);

  return (
    <section className="portfolio pt-160 scale-wrapper pb-160">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header-wrapper mb-60 fade-up">
              <div className="row gutter-20 align-items-center">
                <div className="col-12 col-sm-10 col-md-8 col-lg-8">
                  <div className="section__header">
                    <span className="sub-title tertiary-text text-uppercase neutral-top fw-6">Latest
                    Portfolio</span>
                    <h2 className="title-animation fw-6 mt-16">Showcasing Creativity Through
                      Real Projects
                    </h2>
                  </div>
                </div>
                <div className="col-12 col-sm-10 col-md-8 col-lg-4">
                  <div>
                    <p className="primary-text">Managed end-to-end website operations including content updates, security hardening, and UI improvements to ensure reliability and smooth user experience.
                    </p>
                    <div className="mt-30">
                      <a href="#contact" className="btn-primary">
                        <span className="btn-animated-text" data-text="Get Started">Get Started</span>
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
        <div className="row">
          <div className="col-12">
            <div className="portfolio__single scale-up">
              <div className="portfolio__single-inner">
                <div className="portfolio__single-intro">
                  <h3 className="fw-4">Project Showcase</h3>
                </div>
                <div className="portfolio__single-cta">
                  <a href="#contact" className="btn-quaternary">
                    <span className="btn-animated-text" data-text="Get Started">Get Started</span>
                    <span className="btn-icon">
                      <i className="ph ph-arrow-up-right"></i>
                      <i className="ph ph-arrow-up-right"></i>
                    </span>
                  </a>
                </div>
                <div className="portfolio__single-content">
                  <p className="primary-text">GN Exteriors is a professional exterior services website that showcases roofing, siding, and gutter solutions with clear service pages, project galleries, customer testimonials, and an easy quote/contact system, all optimized for responsive performance and user-friendly navigation.
                  </p>
                </div>                
              </div>
              <div className="portfolio__thumb mt-40">
                <img src="assets/images/portfolio/gnexterior.png" alt="Image" />
              </div>
            </div>
            <div className="portfolio__single scale-up mt-30">
              <div className="portfolio__single-inner">
                <div className="portfolio__single-intro">
                  <h3 className="fw-4">Project Showcase</h3>
                </div>
                <div className="portfolio__single-cta">
                  <a href="#contact" className="btn-quaternary">
                    <span className="btn-animated-text" data-text="Get Started">Get Started</span>
                    <span className="btn-icon">
                      <i className="ph ph-arrow-up-right"></i>
                      <i className="ph ph-arrow-up-right"></i>
                    </span>
                  </a>
                </div>
                <div className="portfolio__single-content">
                  <p className="primary-text">Elroi NorthWest Services offers dependable residential and commercial cleaning solutions in Vancouver, WA, including house cleaning, office cleaning, event cleanup, sanitization, specialty cleaning, window and glass washing, and post-construction cleanup with flexible scheduling and eco-friendly options.
                  </p>
                </div>
              </div>
              <div className="portfolio__thumb mt-40">
                <img src="assets/images/portfolio/elroi.png" alt="Image" />
              </div>
            </div>
            <div className="portfolio__single scale-up mt-30">
              <div className="portfolio__single-inner">
                <div className="portfolio__single-intro">
                  <h3 className="fw-4">Project Showcase</h3>
                </div>
                <div className="portfolio__single-cta">
                  <a href="#contact" className="btn-quaternary">
                    <span className="btn-animated-text" data-text="Get Started">Get Started</span>
                    <span className="btn-icon">
                      <i className="ph ph-arrow-up-right"></i>
                      <i className="ph ph-arrow-up-right"></i>
                    </span>
                  </a>
                </div>
                <div className="portfolio__single-content">
                  <p className="primary-text">NNKO Property Development provides professional home renovation and remodeling solutions in Midland, Texas, offering services like bathroom remodeling, tile and flooring installation, general contracting, and customized interior work with quality materials and customer-focused service.
                  </p>
                </div>            
              </div>
              <div className="portfolio__thumb mt-40">
                <img src="assets/images/portfolio/nnko.png" alt="Image" />
              </div>
            </div>
            <div className="portfolio__single scale-up mt-30">
              <div className="portfolio__single-inner">
                <div className="portfolio__single-intro">
                  <h3 className="fw-4">Project Showcase</h3>
                </div>
                <div className="portfolio__single-cta">
                  <a href="#contact" className="btn-quaternary">
                    <span className="btn-animated-text" data-text="Get Started">Get Started</span>
                    <span className="btn-icon">
                      <i className="ph ph-arrow-up-right"></i>
                      <i className="ph ph-arrow-up-right"></i>
                    </span>
                  </a>
                </div>
                <div className="portfolio__single-content">
                  <p className="primary-text">Source Electric Services provides professional electrical solutions including wiring upgrades, generator installation, lighting design, panel upgrades, outlet and fixture installation, smart home integration, and expert troubleshooting for residential and commercial clients with licensed, experienced electricians focused on quality and safety.
                  </p>
                </div>
              </div>
              <div className="portfolio__thumb mt-40">
                <img src="assets/images/portfolio/ses.png" alt="Image" />
              </div>
            </div>
            <div className="portfolio__single scale-up mt-30">
              <div className="portfolio__single-inner">
                <div className="portfolio__single-intro">
                  <h3 className="fw-4">Project Showcase</h3>
                </div>
                <div className="portfolio__single-cta">
                  <a href="#contact" className="btn-quaternary">
                    <span className="btn-animated-text" data-text="Get Started">Get Started</span>
                    <span className="btn-icon">
                      <i className="ph ph-arrow-up-right"></i>
                      <i className="ph ph-arrow-up-right"></i>
                    </span>
                  </a>
                </div>
                <div className="portfolio__single-content">
                  <p className="primary-text">Prairie Hill Puppies is a family-run breeder offering healthy, well-socialized AKC-registered doodle and designer breed puppies like Sheepadoodles, Cavapoos, Cavachons, and Tibetan Doodles, raised in a home environment with vet health checks, ethical breeding practices, and support for new puppy owners.
                  </p>
                </div>
              </div>
              <div className="portfolio__thumb mt-40">
                <img src="assets/images/portfolio/php.png" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioList;
