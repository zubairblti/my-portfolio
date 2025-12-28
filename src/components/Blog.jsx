const Blog = () => {
  const blogs = [
    {
      image: 'assets/images/blog/three.png',
      tag: 'Inspiring',
      title: 'The Power of Minimal Design in 2025',
      date: 'July 12, 2025',
      author: 'Subrata Sen',
      order: 'normal'
    },
    {
      image: 'assets/images/blog/four.png',
      tag: 'Design',
      title: 'Behind the Scenes of My Favourite Work',
      date: 'July 12, 2025',
      author: 'Subrata Sen',
      order: 'reverse'
    },
    {
      image: 'assets/images/blog/five.png',
      tag: 'Development',
      title: 'Designing My Path: A Journey Through Creativity',
      date: 'July 12, 2025',
      author: 'Subrata Sen',
      order: 'normal',
      large: true
    }
  ];

  return (
    <section className="blog-two pt-160 pb-160" id="newsSec">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header-wrapper mb-60 fade-up">
              <div className="row gutter-20 align-items-center">
                <div className="col-12 col-sm-10 col-md-8 col-lg-8">
                  <div className="section__header">
                    <span className="sub-title tertiary-text text-uppercase neutral-top fw-6">Latest News</span>
                    <h2 className="title-animation fw-6 mt-16">Take a look at our latest blog & articles.</h2>
                  </div>
                </div>
                <div className="col-12 col-sm-10 col-md-8 col-lg-4">
                  <div>
                    <p className="primary-text">We put your ideas and thus your wishes in the form of a unique</p>
                    <div className="mt-30">
                      <a href="#newsSec" className="btn-primary">
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
          {blogs.map((blog, index) => (
            <div
              key={index}
              className={`col-12 col-md-6 col-lg-4 ${blog.large ? 'col-xxl-6' : 'col-xxl-3'}`}
            >
              <div className={`blog-two__single fade-up ${blog.order === 'reverse' ? 'reverse' : ''}`} data-delay={index * 300}>
                {blog.order === 'reverse' ? (
                  <>
                    <div className="content-wrapper">
                      <div className="content">
                        <h5 className={`neutral-top ${blog.large ? 'title-lg' : ''}`}>
                          <a href="#" className="title-animation fw-4">{blog.title}</a>
                        </h5>
                      </div>
                      <hr className="divider mt-30 mb-30" />
                      <div className="blog-two__cta">
                        <p className="text-sm">
                          <i className="ph ph-calendar-plus"></i> {blog.date}
                        </p>
                        <p className="text-sm">
                          <i className="ph ph-user"></i> {blog.author}
                        </p>
                      </div>
                    </div>
                    <div className="thumb mt-80">
                      <a href="#">
                        <img src={blog.image} alt="Image" className="parallax-image" />
                      </a>
                      <span className="tag">{blog.tag}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="thumb">
                      <a href="#">
                        <img src={blog.image} alt="Image" className="parallax-image" />
                      </a>
                      <span className="tag">{blog.tag}</span>
                    </div>
                    <div className="content-wrapper">
                      <div className={`content ${blog.large ? 'mt-30' : 'mt-80'}`}>
                        <h5 className={`neutral-top ${blog.large ? 'title-lg' : ''}`}>
                          <a href="#" className="title-animation fw-4">{blog.title}</a>
                        </h5>
                      </div>
                      <hr className="divider mt-30 mb-30" />
                      <div className="blog-two__cta">
                        <p className="text-sm">
                          <i className="ph ph-calendar-plus"></i> {blog.date}
                        </p>
                        <p className="text-sm">
                          <i className="ph ph-user"></i> {blog.author}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

