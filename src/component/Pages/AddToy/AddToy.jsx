import React, { useState } from "react";
import "./AddToy.css";
import banner from "../../../img/banner.jpg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddToy = () => {
  const handlerAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const sellername = form.sellername.value;
    const selleremail = form.selleremail.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const details = form.details.value;

    const toys = {
      name,
      photo,
      sellername,
      selleremail,
      category,
      price,
      rating,
      quantity,
      details,
    };

    fetch("https://y-mbbxolfp7-sraboni01.vercel.app/toy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toys),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Toy added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }

        form.reset();
      });

    //console.log(toys);
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
                  <label className="form-label">Name</label>
                  <input
                    type="name"
                    name="name"
                    placeholder="Enter your toy name"
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="form-outline form-white mb-4">
                  <label className="form-label">Photo Url</label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Picture URL of the toy"
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="form-outline form-white mb-4">
                  <label className="form-label"> Seller Name</label>
                  <input
                    type="text"
                    placeholder="Enter seller name"
                    name="sellername"
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="form-outline form-white mb-4">
                  <label className="form-label"> Seller Email</label>
                  <input
                    type="email"
                    name="selleremail"
                    placeholder="Enter your seller email"
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="form-outline form-white mb-4">
                  <label className="form-label"> Sub Category </label>
                  <select
                    name="category"
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option value="Taddy Bear">Taddy Bear</option>
                    <option value="Horse">Horse</option>
                    <option value="Dainosur">Dainosur</option>
                  </select>
                </div>
                <div className="form-outline form-white mb-4">
                  <label className="form-label"> Price</label>
                  <input
                    type="text"
                    name="price"
                    placeholder="Price"
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="form-outline form-white mb-4">
                  <label className="form-label"> Rating</label>
                  <input
                    type="text"
                    name="rating"
                    placeholder="Rating"
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="form-outline form-white mb-4">
                  <label className="form-label"> Available Quantity</label>
                  <input
                    type="text"
                    name="quantity"
                    placeholder="Available Quantity"
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="form-outline form-white mb-4">
                  <label className="form-label"> Detail Description</label>
                  <textarea
                    type="textarea"
                    name="details"
                    placeholder="Detail Ddescription"
                    className="form-control form-control-lg"
                  />
                </div>

                <input
                  className="btn btn-primary"
                  type="submit"
                  value="submit"
                />
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
