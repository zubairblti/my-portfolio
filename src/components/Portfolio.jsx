const Portfolio = () => {
  const portfolios = [
    {
      image: 'assets/images/portfolio/two.png',
      title: 'Redefining UX',
      tag: 'UX/UX Design'
    },
    {
      image: 'assets/images/portfolio/three.png',
      title: 'Products Expertise',
      tag: 'UX/UX Design'
    },
    {
      image: 'assets/images/portfolio/four.png',
      title: 'Brand Identities',
      tag: 'UX/UX Design'
    },
    {
      image: 'assets/images/portfolio/five.png',
      title: 'Design Development',
      tag: 'UX/UX Design'
    }
  ];

  return (
    <div className="portfolio-two pt-160 scale-wrapper" id="portfolioSec">
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
                      <a href="#portfolioSec" className="btn-primary">
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
          {portfolios.map((portfolio, index) => (
            <div key={index} className="col-12 col-md-6">
              <div className="portfolio-two__single scale-up">
                <div className="thumb">
                  <a href="#" className="img-wrap">
                    <img src={portfolio.image} alt="Image" className="parallax-image" />
                  </a>
                  <div className="btn-wrap">
                    <a href="#">
                      <i className="ph ph-arrow-up-right"></i>
                      View Details
                      <span></span>
                    </a>
                  </div>
                </div>
                <div className="content mt-30">
                  <h4>
                    <a href="#" className="title-animation fw-6">{portfolio.title}</a>
                  </h4>
                  <div className="tags">
                    <a href="#portfolioSec">{portfolio.tag}</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

