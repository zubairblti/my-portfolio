import { useEffect } from 'react';

const Preloader = () => {
  useEffect(() => {
    // Hide preloader after animation (matching main.js timing)
    const timer1 = setTimeout(() => {
      const preloader = document.getElementById('preloader');
      if (preloader) {
        const bgOne = preloader.querySelector('.preloader-bg-one');
        const bgTwo = preloader.querySelector('.preloader-bg-two');
        const txtLoading = preloader.querySelector('.txt-loading');
        
        if (bgOne) bgOne.style.transform = 'translateY(-100%)';
        if (bgTwo) bgTwo.style.transform = 'translateY(100%)';
        if (txtLoading) txtLoading.style.opacity = '0';
      }
    }, 1000);

    const timer2 = setTimeout(() => {
      const preloader = document.getElementById('preloader');
      if (preloader) {
        // Use fadeOut effect similar to jQuery
        preloader.style.transition = 'opacity 0.6s ease';
        preloader.style.opacity = '0';
        setTimeout(() => {
          if (preloader) {
            preloader.style.display = 'none';
          }
        }, 600);
      }
    }, 1600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div id="preloader" style={{ display: 'flex' }}>
      <div className="preloader-bg preloader-bg-one"></div>
      <div className="preloader-bg preloader-bg-two"></div>
      <div className="txt-loading">
        <span data-text-preloader="L" className="letters-loading">L</span>
        <span data-text-preloader="O" className="letters-loading">O</span>
        <span data-text-preloader="A" className="letters-loading">A</span>
        <span data-text-preloader="D" className="letters-loading">D</span>
        <span data-text-preloader="I" className="letters-loading">I</span>
        <span data-text-preloader="N" className="letters-loading">N</span>
        <span data-text-preloader="G" className="letters-loading">G</span>
      </div>
    </div>
  );
};

export default Preloader;

