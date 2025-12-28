import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import TemplateOptions from '../components/TemplateOptions';
import Preloader from '../components/Preloader';
import Banner from '../components/Banner';
import ServiceList from '../components/ServiceList';
import PricingAlt from '../components/PricingAlt';
import FAQ from '../components/FAQ';

const Services = () => {
  useEffect(() => {
    // Initialize scripts when component mounts
    const initializeScripts = () => {
      // Initialize vanilla tilt
      if (window.VanillaTilt && document.querySelectorAll('.van-tilt').length > 0) {
        const vanTiltElements = document.querySelectorAll('.van-tilt');
        vanTiltElements.forEach((element) => {
          if (!element.hasAttribute('data-vanilla-tilt-initialized')) {
            window.VanillaTilt.init(element, {
              max: 10,
              speed: 3000,
            });
            element.setAttribute('data-vanilla-tilt-initialized', 'true');
          }
        });
      }
    };

    // Delay to ensure DOM is ready
    const timer = setTimeout(() => {
      initializeScripts();
    }, 500);

    // Also try to initialize on window load
    const loadHandler = () => {
      setTimeout(() => {
        initializeScripts();
      }, 300);
    };

    let loadEventAdded = false;
    if (document.readyState === 'complete') {
      loadHandler();
    } else {
      window.addEventListener('load', loadHandler);
      loadEventAdded = true;
    }

    return () => {
      clearTimeout(timer);
      if (loadEventAdded) {
        window.removeEventListener('load', loadHandler);
      }
    };
  }, []);

  const breadcrumb = [
    { label: 'Home', link: '/' },
    { label: 'Our Services', active: true }
  ];

  return (
    <div className="page-wrapper">
      <Preloader />
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Banner title="Our Services" breadcrumb={breadcrumb} />
          <ServiceList />
          <PricingAlt />
          <FAQ />
          <Footer />
        </div>
      </div>

      <TemplateOptions />
      <div className="mouseCursor cursor-outer"></div>
      <div className="mouseCursor cursor-inner"></div>
      <ScrollToTop />
    </div>
  );
};

export default Services;

