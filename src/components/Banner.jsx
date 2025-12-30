const Banner = ({ title, breadcrumb }) => {
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="banner__content text-center">
              <h2 className="title-lg fw-6 neutral-top text-white title-animation">{title}</h2>
              {breadcrumb && (
                <nav aria-label="breadcrumb" className="mt-20">
                  <ol className="breadcrumb">
                    {breadcrumb.map((item, index) => (
                      <li
                        key={index}
                        className={`breadcrumb-item ${item.active ? 'active' : ''}`}
                        aria-current={item.active ? 'page' : undefined}
                      >
                        {item.link ? <a href={item.link === '/' ? '#home' : item.link} onClick={(e) => {
                          if (item.link.startsWith('#')) {
                            e.preventDefault();
                            const element = document.querySelector(item.link === '/' ? '#home' : item.link);
                            if (element) {
                              if (window.gsap && window.gsap.utils && window.gsap.to) {
                                window.gsap.to(window, {
                                  duration: 1,
                                  scrollTo: { y: element, offsetY: 100 },
                                  ease: "power2.inOut"
                                });
                              } else {
                                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                              }
                            }
                          }
                        }}>{item.label}</a> : item.label}
                      </li>
                    ))}
                  </ol>
                </nav>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="banner-bg">
        <img src="assets/images/banner-bg.png" alt="Image" />
      </div>
      <div className="banner-shape">
        <img src="assets/images/banner-shape.png" alt="Image" />
      </div>
    </section>
  );
};

export default Banner;

