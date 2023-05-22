import "./Service.css";
import {
  FaShippingFast,
  FaChalkboardTeacher,
  FaDollarSign,
} from "react-icons/fa";
const Service = () => {
  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4 text-center">
            <div
              className="col-lg-4 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="icon mb-4">
                    <FaShippingFast />
                  </i>
                  <h5 className="fw-bold">Free Shipping</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="icon mb-4">
                    <FaChalkboardTeacher />
                  </i>

                  <h5 className="fw-bold">Support 24/7</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="icon mb-4">
                    <FaDollarSign />
                  </i>
                  <h5 className="fw-bold">Money Return</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
