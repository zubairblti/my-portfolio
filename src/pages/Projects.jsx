import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import TemplateOptions from '../components/TemplateOptions';
import Preloader from '../components/Preloader';
import Banner from '../components/Banner';
import PortfolioList from '../components/PortfolioList';

const Projects = () => {
  useEffect(() => {
    // Initialize scripts when component mounts
    const initializeScripts = () => {
      // Any additional initialization if needed
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
    { label: 'Our Projects', active: true }
  ];

  return (
    <div className="page-wrapper">
      <Preloader />
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Banner title="Our Projects" breadcrumb={breadcrumb} />
          <PortfolioList />
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

export default Projects;

