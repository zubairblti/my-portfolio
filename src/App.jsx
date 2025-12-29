import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';

function App() {
  useEffect(() => {
    // Initialize all JavaScript functionality after component mounts
    // The main.js script will handle most of the initialization
    // This ensures the DOM is ready when scripts run
    
    // Update copyright year
    const yearElement = document.getElementById('copyrightYear');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }

    // Initialize nice select for dropdowns
    if (window.jQuery && window.jQuery().niceSelect) {
      window.jQuery('.select').niceSelect();
    }

    // Reinitialize when React re-renders
    const interval = setInterval(() => {
      if (window.jQuery && window.jQuery().niceSelect) {
        window.jQuery('.select').niceSelect();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-services" element={<Services />} />
        <Route path="/our-projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
