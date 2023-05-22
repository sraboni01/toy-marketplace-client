import {
  FaAddressBook,
  FaCheck,
  FaEnvelope,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
  FaUtensils,
  FaYoutube,
} from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div
        className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5 mb-4 border-bottom">
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary fw-normal">
                <Link to={"/"}>
                  <span className="text-white fs-4 fw-bold pl-2">
                    <span style={{ color: "yellow" }}>T</span>OYS
                  </span>
                </Link>
              </h4>
              <p className="text-white text-justify">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolores quia fuga blanditiis voluptates vitae! Dolor a amet
                sequi accusantium doloremque,
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary fw-normal mb-4">
                Contact
              </h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3">
                  <FaAddressBook />
                </i>
                123 Street, New York, USA
              </p>
              <p className="mb-2">
                <i className="me-3">
                  <FaPhone />
                </i>
                +012 345 67890
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3">
                  <FaEnvelope />
                </i>
                info@example.com
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary fw-normal mb-4">
                Opening
              </h4>
              <h5 className="text-light fw-normal">Monday - Saturday</h5>

              <p>09AM - 09PM</p>
              <h5 className="text-light fw-normal">Sunday</h5>
              <p>10AM - 08PM</p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary  fw-normal mb-4">
                Quick Link
              </h4>
              <ul className="list-unstyled">
                <li>
                  <Link
                    to={"/about"}
                    className="text-white text-decoration-none"
                  >
                    <FaCheck />
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/blog"}
                    className="text-white text-decoration-none"
                  >
                    <FaCheck />
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/login"}
                    className="text-white text-decoration-none"
                  >
                    <FaCheck />
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/register"}
                    className="text-white text-decoration-none"
                  >
                    <FaCheck />
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <p>Copyright © 2023 Toys Marketplace Website.</p>
            <div className=" pt-2">
              <a className="btn btn-outline-light btn-social " href="">
                <i className="fab fa-twitter pl-2">
                  {" "}
                  <FaTwitter />
                </i>
              </a>
              <a className="btn btn-outline-light btn-social pl-2" href="">
                <i className="fab fa-facebook-f pl-2">
                  <FaTwitter />
                </i>
              </a>
              <a className="btn btn-outline-light btn-social pl-2" href="">
                <i className="fab fa-youtube pl-2">
                  <FaYoutube />
                </i>
              </a>
              <a className="btn btn-outline-light btn-social pl-2" href="">
                <i className="fab fa-linkedin-in pl-2">
                  <FaLinkedinIn />
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
