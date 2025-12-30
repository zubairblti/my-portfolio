import { useEffect } from 'react';
import Home from './pages/Home';

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

    return () => {
      // Cleanup if needed
    };
  }, []);

  return <Home />;
}

export default App;
