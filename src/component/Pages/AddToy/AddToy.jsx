import React, { useState } from "react";
import "./AddToy.css";
import banner from "../../../img/banner.jpg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const AddToy = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handlerAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.name.value;
    console.log(email);
  };
  return (
    <div>
      <div
        className="banner p-5"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-white text-center p-5 fw-bold">Add Your Toys</h2>
      </div>
      <div className="container">
        <div className=" m-5 bg-light text-black shadow p-5">
          <Form onSubmit={handlerAddToy}>
            <div className="card-body  text-center">
              <div className="mb-md-5 mt-md-4">
                <h2 className="fw-bold mb-2">Please Fill Up The Form!</h2>
                <div className="form-outline form-white mb-4">
                  <input
                    type="name"
                    name="name"
                    placeholder="Enter your toy name"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label">Name</label>
                </div>
                <div className="form-outline form-white mb-4">
                  <input
                    type="text"
                    name="photo"
                    placeholder="Picture URL of the toy"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label">Photo Url</label>
                </div>
                <div className="form-outline form-white mb-4">
                  <input
                    type="text"
                    name="sellername"
                    placeholder="Enter seller name"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label"> Seller Name</label>
                  <p className="fw-bold text-danger">{error}</p>
                </div>
                <div className="form-outline form-white mb-4">
                  <input
                    type="email"
                    name="selleremail"
                    placeholder="Enter your seller email"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label"> Seller email</label>
                  <p className="fw-bold text-danger">{error}</p>
                </div>
                <div className="form-outline form-white mb-4">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option>Select Sub Category</option>
                    <option value="Math Toys"> Math Toys</option>
                    <option value="Language Toys">Language Toys</option>
                    <option value="Science Toys">Science Toys</option>
                  </select>
                  <label className="form-label"> Sub Category </label>
                  <p className="fw-bold text-danger">{error}</p>
                </div>
                <div className="form-outline form-white mb-4">
                  <input
                    type="text"
                    name="price"
                    placeholder="Price"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label"> Price</label>
                  <p className="fw-bold text-danger">{error}</p>
                </div>
                <div className="form-outline form-white mb-4">
                  <input
                    type="text"
                    name="rating"
                    placeholder="Rating"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label"> Rating</label>
                  <p className="fw-bold text-danger">{error}</p>
                </div>
                <div className="form-outline form-white mb-4">
                  <input
                    type="text"
                    name="quantity"
                    placeholder="Available Quantity"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label"> Available quantity</label>
                  <p className="fw-bold text-danger">{error}</p>
                </div>
                <div className="form-outline form-white mb-4">
                  <textarea
                    type="textarea"
                    name="details"
                    placeholder="Detail Ddescription"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label"> Detail description</label>
                  <p className="fw-bold text-danger">{error}</p>
                </div>

                <div className=" justify-content-center text-center mt-4 pt-1">
                  <Button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
              <div>
                <p className="fw-bold text-success">{success}</p>
              </div>
              <div>
                <p className="mb-0">
                  You have already an account?
                  <Link to={"/login"} className="text-primary-50 fw-bold">
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
