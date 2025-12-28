import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import TemplateOptions from '../components/TemplateOptions';
import Preloader from '../components/Preloader';
import Banner from '../components/Banner';
import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';
import SkillTabs from '../components/SkillTabs';
import PricingFour from '../components/PricingFour';
import TestimonialSlider from '../components/TestimonialSlider';
import ContactInfo from '../components/ContactInfo';

const About = () => {
  useEffect(() => {
    // Re-initialize scripts when component mounts
    const initializeScripts = () => {
      // Initialize odometer
      if (window.Odometer) {
        const odometers = document.querySelectorAll('.odometer');
        odometers.forEach((odometer) => {
          const finalValue = odometer.getAttribute('data-odometer-final');
          if (finalValue && !odometer.classList.contains('odometer-done')) {
            const od = new window.Odometer({
              el: odometer,
              value: 0,
            });
            setTimeout(() => {
              od.update(finalValue);
              odometer.classList.add('odometer-done');
            }, 100);
          }
        });
      }

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

    // Delay to ensure DOM is ready and main.js has loaded
    const timer = setTimeout(() => {
      initializeScripts();
    }, 1000);

    // Also try to initialize on window load in case scripts load late
    const loadHandler = () => {
      setTimeout(() => {
        initializeScripts();
      }, 500);
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
    { label: 'About Us', active: true }
  ];

  return (
    <div className="page-wrapper">
      <Preloader />
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Banner title="About Us" breadcrumb={breadcrumb} />
          <AboutMe />
          <Experience />
          <SkillTabs />
          <PricingFour />
          <TestimonialSlider />
          <ContactInfo />
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

export default About;
