const Marquee = () => {
  return (
    <section className="marquee marquee-tertiary-bg">
      <div className="marquee__inner">

        {[1, 2, 3].map((_, index) => (
          <div className="marquee__slider" key={index}>
            <div className="marquee__single stroke-text">
              <h4 className="title-lg">
                <a href="#services">LARAVEL DEVELOPMENT <span>-</span></a>
              </h4>
            </div>

            <div className="marquee__single">
              <h4 className="title-lg">
                <a href="#services">WORDPRESS DEVELOPMENT <span>-</span></a>
              </h4>
            </div>

            <div className="marquee__single stroke-text">
              <h4 className="title-lg">
                <a href="#services">FULL STACK WEB DEVELOPMENT <span>-</span></a>
              </h4>
            </div>

            <div className="marquee__single">
              <h4 className="title-lg">
                <a href="#services">CUSTOM WEB APPLICATIONS <span>-</span></a>
              </h4>
            </div>
            
            <div className="marquee__single stroke-text">
              <h4 className="title-lg">
                <a href="#services">REST API DEVELOPMENT <span>-</span></a>
              </h4>
            </div>

            <div className="marquee__single">
              <h4 className="title-lg">
                <a href="#services">WEBSITE MAINTENANCE <span>-</span></a>
              </h4>
            </div>

            <div className="marquee__single stroke-text">
              <h4 className="title-lg">
                <a href="#services">BUSINESS WEBSITES <span>-</span></a>
              </h4>
            </div>

            <div className="marquee__single">
              <h4 className="title-lg">
                <a href="#services">WEBSITE OPTIMIZATION <span>-</span></a>
              </h4>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Marquee;
