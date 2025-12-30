import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import AboutMe from '../components/AboutMe';
import ServiceList from '../components/ServiceList';
import Experience from '../components/Experience';
import SkillTabs from '../components/SkillTabs';
import PortfolioList from '../components/PortfolioList';
import PricingFour from '../components/PricingFour';
import FAQ from '../components/FAQ';
import ContactInfo from '../components/ContactInfo';
// import Testimonials from '../components/Testimonials';
// import Blog from '../components/Blog';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
// import TemplateOptions from '../components/TemplateOptions';
import Preloader from '../components/Preloader';

const Home = () => {
  useEffect(() => {
    // Re-initialize scripts when component mounts
    const timer = setTimeout(() => {
      if (window.jQuery && window.jQuery().niceSelect) {
        window.jQuery('.select').niceSelect();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page-wrapper">
      <Preloader />
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <Marquee />
          <AboutMe />
          <ServiceList />
          <Experience />
          <SkillTabs />
          <PortfolioList />
          <PricingFour />
          <FAQ />
          <ContactInfo />
          {/* <Testimonials /> */}
          {/* <Blog /> */}
          <Footer />
        </div>
      </div>

      {/* <TemplateOptions /> */}
      <div className="mouseCursor cursor-outer"></div>
      <div className="mouseCursor cursor-inner"></div>
      <ScrollToTop />
    </div>
  );
};

export default Home;

