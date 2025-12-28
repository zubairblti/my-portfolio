import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import About from '../components/About';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import TemplateOptions from '../components/TemplateOptions';
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
          <About />
          <Services />
          <Skills />
          <Portfolio />
          <Pricing />
          <Contact />
          <Testimonials />
          <Blog />
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

export default Home;

