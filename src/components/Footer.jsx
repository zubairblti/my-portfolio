import { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    // Update copyright year
    const yearElement = document.getElementById('copyrightYear');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }, []);

  return (
    <footer className="footer-two">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-5 col-xl-4">
            <div className="footer-two__intro fade-right">
              <div className="logo">
                <a href="#home" onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector('#home');
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
                  <img src="assets/images/logo.webp" alt="Image" className="logo-ch" />
                </a>
              </div>
              <div className="mt-20">
                <p className="neutral-text text-md">
                  I help businesses and individuals build modern, scalable digital products with a focus on quality, performance, and user experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-2 col-xl-3">
              <div className="footer-two__nav fade-right" data-delay="200">
                <ul>
                  <li><a href="#about" onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector('#about');
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
                  }}>About</a></li>
                  <li><a href="#services" className="footer-nav-active" onClick={(e) => {
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
                  }}>Services</a></li>
                  <li><a href="#portfolio" onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector('#portfolio');
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
                  }}>Portfolio</a></li>
                  <li><a href="#pricing" onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector('#pricing');
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
                  }}>Pricing</a></li>
                </ul>
              </div>
          </div>
          <div className="col-12 col-lg-5 col-xl-5">
            <div className="footer-two__text fade-right" data-delay="400">
              <h3 className="pulse-text title-xxl">LET'S TALK</h3>
              <h3 className="pulse-text-light title-xxl">LET'S TALK</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="container">
          <div className="row align-items-center gutter-24">
            <div className="col-12 col-lg-4">
              <div className="footer__copyright-left">
                <p>
                  <i className="ph ph-copyright"></i> <span id="copyrightYear"></span>{' '}
                  <a href="https://www.linkedin.com/in/zubair-blti-%E2%9C%85-286005241/" onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector('#home');
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
                  }}>ZUBAIR</a>. All rights reserved.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="social justify-content-center">
                <a href="https://www.linkedin.com/in/zubair-blti-%E2%9C%85-286005241/" target="_blank" rel="noopener noreferrer" aria-label="share us on linkedin" title="linkedin">
                  <i className="fa-brands fa-linkedin"></i>
                </a>                
                <a href="https://www.facebook.com/profile.php?id=61565782182572" target="_blank" rel="noopener noreferrer" aria-label="share us on Facebook" title="Facebook">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="https://www.youtube.com/@zubairblti" target="_blank" rel="noopener noreferrer" aria-label="share us on YouTube" title="YouTube">
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a href="https://github.com/zubairblti" target="_blank" rel="noopener noreferrer" aria-label="share us on GitHub" title="GitHub">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="footer__copyright-right">
                <p>Designed By <a href="https://www.linkedin.com/in/zubair-blti-%E2%9C%85-286005241/">Zubair Blti</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

