import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import TemplateOptions from '../components/TemplateOptions';
import Preloader from '../components/Preloader';
import Banner from '../components/Banner';
import ContactInfo from '../components/ContactInfo';

const Contact = () => {
  useEffect(() => {
    // Initialize scripts when component mounts
    const initializeScripts = () => {
      // Nice select is already initialized in ContactInfo component
    };

    // Delay to ensure DOM is ready
    const timer = setTimeout(() => {
      initializeScripts();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const breadcrumb = [
    { label: 'Home', link: '/' },
    { label: 'Contact Us', active: true }
  ];

  return (
    <div className="page-wrapper">
      <Preloader />
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Banner title="Contact Us" breadcrumb={breadcrumb} />
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

export default Contact;

