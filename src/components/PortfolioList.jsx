import { Link } from 'react-router-dom';

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
    <div className="portfolio-two pt-160 pb-160 scale-wrapper">
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
                      <Link to="/our-projects" className="btn-primary">
                        <span className="btn-animated-text" data-text="View More">View More</span>
                        <span className="btn-icon">
                          <i className="ph ph-arrow-up-right"></i>
                          <i className="ph ph-arrow-up-right"></i>
                        </span>
                      </Link>
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
                  <Link to={project.link} className="img-wrap">
                    <img src={project.image} alt="Image" className="parallax-image" />
                  </Link>
                  <div className="btn-wrap">
                    <Link to={project.link}>
                      <i className="ph ph-arrow-up-right"></i>
                      View Details
                      <span></span>
                    </Link>
                  </div>
                </div>
                <div className="content mt-30">
                  <h4>
                    <Link to={project.link} className="title-animation fw-6">{project.title}</Link>
                  </h4>
                  <div className="tags">
                    <Link to="/our-projects">{project.category}</Link>
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
                  <Link to="/our-projects">1</Link>
                </li>
                <li>
                  <Link to="/our-projects" className="active">2</Link>
                </li>
                <li>
                  <Link to="/our-projects">3</Link>
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

