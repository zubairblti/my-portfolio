import { useState, useEffect } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      // Use GSAP scrollTo if available, otherwise use native scrollIntoView
      if (window.gsap && window.gsap.utils && window.gsap.to) {
        window.gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: element,
            offsetY: 100
          },
          ease: "power2.inOut"
        });
      } else {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="main-header__menu-box">
                <nav className="navbar p-0">
                  <div className="navbar-logo">
                    <a href="#home" onClick={(e) => handleLinkClick(e, '#home')}>
                      <img src="assets/images/logo.webp" alt="Image" className="logo-ch" />
                    </a>
                  </div>
                  <div className="navbar__menu-wrapper">
                    <div className="navbar__menu d-none d-xl-block">
                      <ul className="navbar__list">
                        <li className="navbar__item nav-fade">
                          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')}>Home</a>
                        </li>
                        <li className="navbar__item nav-fade">
                          <a href="#about" onClick={(e) => handleLinkClick(e, '#about')}>About</a>
                        </li>
                        <li className="navbar__item nav-fade">
                          <a href="#services" onClick={(e) => handleLinkClick(e, '#services')}>Services</a>
                        </li>
                        <li className="navbar__item nav-fade">
                          <a href="#experience" onClick={(e) => handleLinkClick(e, '#experience')}>Experience</a>
                        </li>
                        <li className="navbar__item nav-fade">
                          <a href="#skills" onClick={(e) => handleLinkClick(e, '#skills')}>Skills</a>
                        </li>
                        <li className="navbar__item nav-fade">
                          <a href="#portfolio" onClick={(e) => handleLinkClick(e, '#portfolio')}>Portfolio</a>
                        </li>
                        <li className="navbar__item nav-fade">
                          <a href="#pricing" onClick={(e) => handleLinkClick(e, '#pricing')}>Pricing</a>
                        </li>
                        <li className="navbar__item nav-fade">
                          <a href="#faq" onClick={(e) => handleLinkClick(e, '#faq')}>FAQ</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="navbar__options">
                    <div className="navbar__mobile-options d-none d-sm-block">
                      <a href="#contact" className="btn-primary" onClick={(e) => handleLinkClick(e, '#contact')}>
                        <span className="btn-animated-text" data-text="contact me">Contact Me</span>
                        <span className="btn-icon">
                          <i className="ph ph-arrow-up-right"></i>
                          <i className="ph ph-arrow-up-right"></i>
                        </span>
                      </a>
                    </div>
                    <button
                      className={`open-offcanvas-nav d-flex d-xl-none ${mobileMenuOpen ? 'open-offcanvas-nav-active' : ''}`}
                      aria-label="toggle mobile menu"
                      title="open offcanvas menu"
                      onClick={toggleMobileMenu}
                    >
                      <span className="icon-bar top-bar"></span>
                      <span className="icon-bar middle-bar"></span>
                      <span className="icon-bar bottom-bar"></span>
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} handleLinkClick={handleLinkClick} />
    </>
  );
};

const MobileMenu = ({ isOpen, onClose, handleLinkClick }) => {
  useEffect(() => {
    if (isOpen) {
      // Add classes that match the original template's CSS
      document.body.style.overflow = 'hidden';
      // Trigger nav-fade animations
      const navFadeElements = document.querySelectorAll('.mobile-menu .nav-fade');
      navFadeElements.forEach((el, i) => {
        el.style.animationDelay = `${0.25 * (i + 1)}s`;
      });
      // Remove nav-fade-active class from wrapper
      const wrapper = document.querySelector('.mobile-menu__wrapper');
      if (wrapper) {
        wrapper.classList.remove('nav-fade-active');
      }
    } else {
      document.body.style.overflow = '';
      // Add nav-fade-active class back to wrapper
      const wrapper = document.querySelector('.mobile-menu__wrapper');
      if (wrapper) {
        wrapper.classList.add('nav-fade-active');
      }
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleMenuLinkClick = (e, targetId) => {
    handleLinkClick(e, targetId);
    onClose();
  };

  return (
    <>
      <div className={`mobile-menu d-block d-xxl-none ${isOpen ? 'show-menu' : ''}`}>
        <nav className="mobile-menu__wrapper">
          <div className="mobile-menu__header nav-fade">
            <div className="logo">
              <a href="#home" aria-label="home page" title="logo" onClick={(e) => handleMenuLinkClick(e, '#home')}>
                <img src="assets/images/logo.webp" alt="Image" className="logo-ch" />
              </a>
            </div>
            <button aria-label="close mobile menu" className="close-mobile-menu" onClick={onClose}>
              <i className="ph ph-x"></i>
            </button>
          </div>
          <div className="mobile-menu__list">
            <ul className="navbar__list">
              <li className="navbar__item nav-fade">
                <a href="#home" onClick={(e) => handleMenuLinkClick(e, '#home')}>Home</a>
              </li>
              <li className="navbar__item nav-fade">
                <a href="#about" onClick={(e) => handleMenuLinkClick(e, '#about')}>About</a>
              </li>
              <li className="navbar__item nav-fade">
                <a href="#services" onClick={(e) => handleMenuLinkClick(e, '#services')}>Services</a>
              </li>
              <li className="navbar__item nav-fade">
                <a href="#experience" onClick={(e) => handleMenuLinkClick(e, '#experience')}>Experience</a>
              </li>
              <li className="navbar__item nav-fade">
                <a href="#skills" onClick={(e) => handleMenuLinkClick(e, '#skills')}>Skills</a>
              </li>
              <li className="navbar__item nav-fade">
                <a href="#portfolio" onClick={(e) => handleMenuLinkClick(e, '#portfolio')}>Portfolio</a>
              </li>
              <li className="navbar__item nav-fade">
                <a href="#pricing" onClick={(e) => handleMenuLinkClick(e, '#pricing')}>Pricing</a>
              </li>
              <li className="navbar__item nav-fade">
                <a href="#faq" onClick={(e) => handleMenuLinkClick(e, '#faq')}>FAQ</a>
              </li>
            </ul>
          </div>
          <div className="mobile-menu__cta d-block d-md-none nav-fade">
            <a href="#contact" className="btn-primary" onClick={(e) => handleMenuLinkClick(e, '#contact')}>
              <span className="btn-animated-text" data-text="contact me">Contact Me</span>
              <span className="btn-icon">
                <i className="ph ph-arrow-up-right"></i>
                <i className="ph ph-arrow-up-right"></i>
              </span>
            </a>
          </div>
          <div className="mobile-menu__social social nav-fade">
            <a href="https://www.linkedin.com/in/zubair-blti-286005241/" target="_blank" aria-label="share us on linkedin" title="linkedin">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61565782182572" target="_blank" aria-label="share us on Facebook" title="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://www.youtube.com/@zubairblti" target="_blank" aria-label="share us on YouTube" title="YouTube">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="https://github.com/zubairblti" target="_blank" aria-label="share us on GitHub" title="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </nav>
      </div>
      <div className={`mobile-menu__backdrop ${isOpen ? 'mobile-menu__backdrop-active' : ''}`} onClick={onClose}></div>
    </>
  );
};

export default Header;

