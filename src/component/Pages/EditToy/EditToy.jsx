import React from "react";
import Swal from "sweetalert2";
import banner from "../../../img/banner.jpg";
import { Form, useLoaderData } from "react-router-dom";

const EditToy = () => {
  const toy = useLoaderData();
  const {
    _id,
    name,
    photo,
    sellername,
    selleremail,
    category,
    price,
    rating,
    quantity,
    details,
  } = toy;
  const handleEditToy = (event) => {
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

    const updateToys = {
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
    console.log(updateToys);
    fetch(`http://localhost:5000/toy/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateToys),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Toy Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
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
        <h2 className="text-white text-center p-5 fw-bold">Update Your Toys</h2>
      </div>
      <div className="container">
        <div className=" m-5 bg-light text-black shadow p-5">
          <Form onSubmit={handleEditToy}>
            <div className="card-body  text-center">
              <div className="mb-md-5 mt-md-4">
                <h2 className="fw-bold mb-2">Please Update The Form!</h2>
                <div className="form-outline form-white mb-4">
                  <label className="form-label">Name</label>
                  <input
                    type="name"
                    name="name"
                    defaultValue={name}
                    placeholder="Enter your toy name"
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="form-outline form-white mb-4">
                  <label className="form-label">Photo Url</label>
                  <input
                    type="text"
                    name="photo"
                    defaultValue={photo}
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
                    defaultValue={sellername}
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="form-outline form-white mb-4">
                  <label className="form-label"> Seller Email</label>
                  <input
                    type="email"
                    name="selleremail"
                    defaultValue={selleremail}
                    placeholder="Enter your seller email"
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="form-outline form-white mb-4">
                  <label className="form-label"> Sub Category </label>
                  <select
                    defaultValue={category}
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
                    defaultValue={price}
                    name="price"
                    placeholder="Price"
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="form-outline form-white mb-4">
                  <label className="form-label"> Rating</label>
                  <input
                    type="text"
                    defaultValue={rating}
                    name="rating"
                    placeholder="Rating"
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="form-outline form-white mb-4">
                  <label className="form-label"> Available Quantity</label>
                  <input
                    type="text"
                    defaultValue={quantity}
                    name="quantity"
                    placeholder="Available Quantity"
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="form-outline form-white mb-4">
                  <label className="form-label"> Detail Description</label>
                  <textarea
                    type="textarea"
                    defaultValue={details}
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

export default EditToy;
