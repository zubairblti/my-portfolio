
const PortfolioList = () => {
  const projects = [
    {
      id: 1,
      image: 'assets/images/portfolio/two.png',
      title: 'Redefining UX',
      category: 'UX/UX Design',
      link: '/project-details'
    },
    {
      id: 2,
      image: 'assets/images/portfolio/three.png',
      title: 'Products Expertise',
      category: 'UX/UX Design',
      link: '/project-details'
    },
    {
      id: 3,
      image: 'assets/images/portfolio/four.png',
      title: 'Brand Identities',
      category: 'UX/UX Design',
      link: '/project-details'
    },
    {
      id: 4,
      image: 'assets/images/portfolio/five.png',
      title: 'Design Development',
      category: 'UX/UX Design',
      link: '/project-details'
    }
  ];

  return (
    <div id="portfolio" className="portfolio-two pt-160 pb-160 scale-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header-wrapper mb-60 fade-up">
              <div className="row gutter-20 align-items-center">
                <div className="col-12 col-sm-10 col-md-8 col-lg-8">
                  <div className="section__header">
                    <span className="sub-title tertiary-text text-uppercase neutral-top fw-6">Latest Portfolio</span>
                    <h2 className="title-animation fw-6 mt-16">Innovative Projects & Tech Solutions</h2>
                  </div>
                </div>
                <div className="col-12 col-sm-10 col-md-8 col-lg-4">
                  <div>
                    <p className="primary-text">Explore creative coding solutions crafted to solve problems efficiently.</p>
                    <div className="mt-30">
                      <a href="#portfolio" className="btn-primary" onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector('#portfolio');
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
                      }}>
                        <span className="btn-animated-text" data-text="View More">View More</span>
                        <span className="btn-icon">
                          <i className="ph ph-arrow-up-right"></i>
                          <i className="ph ph-arrow-up-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row gutter-60">
          {projects.map((project) => (
            <div key={project.id} className="col-12 col-md-6">
              <div className="portfolio-two__single scale-up">
                <div className="thumb">
                  <a href="#portfolio" className="img-wrap" onClick={(e) => e.preventDefault()}>
                    <img src={project.image} alt="Image" className="parallax-image" />
                  </a>
                  <div className="btn-wrap">
                    <a href="#portfolio" onClick={(e) => e.preventDefault()}>
                      <i className="ph ph-arrow-up-right"></i>
                      View Details
                      <span></span>
                    </a>
                  </div>
                </div>
                <div className="content mt-30">
                  <h4>
                    <a href="#portfolio" className="title-animation fw-6" onClick={(e) => e.preventDefault()}>{project.title}</a>
                  </h4>
                  <div className="tags">
                    <a href="#portfolio" onClick={(e) => e.preventDefault()}>{project.category}</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-12">
            <div className="pagination-wrapper mt-60">
              <ul className="pagination">
                <li>
                  <button>
                    <i className="ph ph-caret-double-left"></i>
                  </button>
                </li>
                <li>
                  <a href="#portfolio" onClick={(e) => e.preventDefault()}>1</a>
                </li>
                <li>
                  <a href="#portfolio" className="active" onClick={(e) => e.preventDefault()}>2</a>
                </li>
                <li>
                  <a href="#portfolio" onClick={(e) => e.preventDefault()}>3</a>
                </li>
                <li>
                  <button>
                    <i className="ph ph-caret-double-right"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioList;

