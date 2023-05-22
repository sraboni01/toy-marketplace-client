const AboutSection = () => {
  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="row g-3">
                <img
                  className="img-fluid rounded w-100 wow zoomIn"
                  data-wow-delay="0.1s"
                  src="https://i.ibb.co/YNDS299/about-img.jpg"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="mb-4 fw-bold text-uppercase">
                <span style={{ color: "#9c52fd", fontSize: "48px" }}>W</span>
                elcome To <i className="fa fa-utensils text-primary me-2"></i>
                Our Toy Shop
              </h2>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet
                lorem sit.
              </p>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>

              <a className="btn btn-outline-primary py-3 px-5 mt-2" href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
