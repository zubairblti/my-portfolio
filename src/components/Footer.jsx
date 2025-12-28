import { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
                <Link to="/">
                  <img src="assets/images/logo.png" alt="Image" className="logo-ch" />
                </Link>
              </div>
              <div className="mt-20">
                <p className="neutral-text text-md">
                  Current enables our entire team to align, share every day. Weekly Drops momentum happening and product scales.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-2 col-xl-3">
              <div className="footer-two__nav fade-right" data-delay="200">
                <ul>
                  <li><Link to="/about-us">About</Link></li>
                  <li><a href="#serviceSec" className="footer-nav-active">Services</a></li>
                  <li><a href="#portfolioSec">Projects</a></li>
                  <li><a href="#newsSec">News</a></li>
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
                  <Link to="/">XFOLIO</Link>. All rights reserved.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="social justify-content-center">
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="share us on linkedin" title="linkedin">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer" aria-label="share us on dribble" title="dribble">
                  <i className="fa-solid fa-basketball"></i>
                </a>
                <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="share us on twitter" title="twitter">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer" aria-label="share us on vimeo" title="vimeo">
                  <i className="fa-brands fa-behance"></i>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="footer__copyright-right">
                <p>Designed By <a href="https://themeforest.net/user/wowtheme7">wowtheme7</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

