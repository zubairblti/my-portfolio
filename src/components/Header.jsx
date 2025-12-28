import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = `/${targetId}`;
      return;
    }
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
                    <Link to="/">
                      <img src="assets/images/logo.png" alt="Image" className="logo-ch" />
                    </Link>
                  </div>
                  <div className="navbar__menu-wrapper">
                    <div className="navbar__menu d-none d-xl-block">
                      <ul className="navbar__list">
                        <li className="navbar__item navbar__item--has-children d-none d-xl-block">
                          <a href="#" aria-label="dropdown menu" className="navbar__dropdown-label dropdown-label-alter">
                            Home
                          </a>
                          <ul className="navbar__sub-menu mega-menu">
                            <li>
                              <div className="mega-content-wrapper">
                                <img src="assets/images/designer.jpg" alt="Image" />
                                <div className="mega-content">
                                  <a href="index.html">Multipage</a>
                                  <a href="index-one-page.html">One Page</a>
                                </div>
                              </div>
                              <a href="index.html">Designer</a>
                            </li>
                            <li>
                              <div className="mega-content-wrapper">
                                <img src="assets/images/developer.jpg" alt="Image" />
                                <div className="mega-content">
                                  <a href="index-two.html">Multipage</a>
                                  <a href="index-two-one-page.html">One Page</a>
                                </div>
                              </div>
                              <a href="index-two.html">Developer</a>
                            </li>
                            <li>
                              <div className="mega-content-wrapper">
                                <img src="assets/images/doctor.jpg" alt="Image" />
                                <div className="mega-content">
                                  <a href="index-three.html">Multipage</a>
                                  <a href="index-three-one-page.html">One Page</a>
                                </div>
                              </div>
                              <a href="index-three.html">Doctor</a>
                            </li>
                            <li>
                              <div className="mega-content-wrapper">
                                <img src="assets/images/photography.jpg" alt="Image" />
                                <div className="mega-content">
                                  <a href="index-four.html">Multipage</a>
                                  <a href="index-four-one-page.html">One Page</a>
                                </div>
                              </div>
                              <a href="index-four.html">Photography</a>
                            </li>
                            <li>
                              <div className="mega-content-wrapper">
                                <img src="assets/images/lawyer.jpg" alt="Image" />
                                <div className="mega-content">
                                  <a href="index-five.html">Multipage</a>
                                  <a href="index-five-one-page.html">One Page</a>
                                </div>
                              </div>
                              <a href="index-five.html">Lawyer</a>
                            </li>
                          </ul>
                        </li>
                        <li className="navbar__item nav-fade">
                          <Link to="/about-us" onClick={() => setMobileMenuOpen(false)}>About</Link>
                        </li>
                        <li className="navbar__item navbar__item--has-children nav-fade">
                          <a href="#" aria-label="dropdown menu" className="navbar__dropdown-label dropdown-label-alter">
                            Services
                          </a>
                          <ul className="navbar__sub-menu">
                            <li>
                              <Link to="/our-services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
                            </li>
                            <li>
                              <a href="/service-details" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); }}>Service Details</a>
                            </li>
                          </ul>
                        </li>
                        <li className="navbar__item nav-fade">
                          <a href="#serviceSec" onClick={(e) => handleLinkClick(e, '#serviceSec')}>Services</a>
                        </li>
                        <li className="navbar__item nav-fade">
                          <a href="#portfolioSec" onClick={(e) => handleLinkClick(e, '#portfolioSec')}>Portfolio</a>
                        </li>
                        <li className="navbar__item nav-fade">
                          <a href="#newsSec" onClick={(e) => handleLinkClick(e, '#newsSec')}>News</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="navbar__options">
                    <div className="navbar__mobile-options d-none d-sm-block">
                      <a href="#contactSec" className="btn-primary" onClick={(e) => handleLinkClick(e, '#contactSec')}>
                        <span className="btn-animated-text" data-text="contact us">Contact Us</span>
                        <span className="btn-icon">
                          <i className="ph ph-arrow-up-right"></i>
                          <i className="ph ph-arrow-up-right"></i>
                        </span>
                      </a>
                    </div>
                    <button
                      className="open-offcanvas-nav d-flex d-xl-none"
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
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isOpen]);

  return (
    <>
      <div className={`mobile-menu d-block d-xxl-none ${isOpen ? 'active' : ''}`}>
        <nav className="mobile-menu__wrapper">
          <div className="mobile-menu__header nav-fade">
            <div className="logo">
              <Link to="/" aria-label="home page" title="logo" onClick={onClose}>
                <img src="assets/images/logo.png" alt="Image" className="logo-ch" />
              </Link>
            </div>
            <button aria-label="close mobile menu" className="close-mobile-menu" onClick={onClose}>
              <i className="ph ph-x"></i>
            </button>
          </div>
          <div className="mobile-menu__list">
            <ul>
              <li><Link to="/about-us" onClick={onClose}>About</Link></li>
              <li>
                <Link to="/our-services" onClick={onClose}>Services</Link>
                <ul>
                  <li><Link to="/our-services" onClick={onClose}>Services</Link></li>
                  <li><a href="/service-details" onClick={(e) => { e.preventDefault(); onClose(); }}>Service Details</a></li>
                </ul>
              </li>
              <li><a href="#portfolioSec" onClick={(e) => { handleLinkClick(e, '#portfolioSec'); onClose(); }}>Portfolio</a></li>
              <li><a href="#newsSec" onClick={(e) => { handleLinkClick(e, '#newsSec'); onClose(); }}>News</a></li>
            </ul>
          </div>
          <div className="mobile-menu__cta d-block d-md-none nav-fade">
            <a href="#contactSec" className="btn-primary" onClick={(e) => { handleLinkClick(e, '#contactSec'); onClose(); }}>
              <span className="btn-animated-text" data-text="contact us">Contact Us</span>
              <span className="btn-icon">
                <i className="ph ph-arrow-up-right"></i>
                <i className="ph ph-arrow-up-right"></i>
              </span>
            </a>
          </div>
          <div className="mobile-menu__social social nav-fade">
            <a href="https://www.linkedin.com/" target="_blank" aria-label="share us on linkedin" title="linkedin">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://dribbble.com/" target="_blank" aria-label="share us on dribble" title="dribble">
              <i className="fa-solid fa-basketball"></i>
            </a>
            <a href="https://x.com/" target="_blank" aria-label="share us on twitter" title="twitter">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://www.behance.net/" target="_blank" aria-label="share us on vimeo" title="vimeo">
              <i className="fa-brands fa-behance"></i>
            </a>
          </div>
        </nav>
      </div>
      <div className={`mobile-menu__backdrop ${isOpen ? 'active' : ''}`} onClick={onClose}></div>
    </>
  );
};

export default Header;

