import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import banner from "../../img/banner.jpg";

const Details = () => {
  const detail = useLoaderData();
  //console.log(details);
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
  } = detail;
  return (
    <div>
      <div
        className="banner p-5"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-white text-center p-5 fw-bold">
          Details Your Toys
        </h2>
      </div>
      <div className="container p-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <a className="img-card">
                <img src={photo} />
              </a>
              <div className="card-content text-center">
                <h4 className="card-title">Name : {name}</h4>
                <h4 className="card-title">Seller Name : {sellername}</h4>
                <h4 className="card-title">Seller Email : {selleremail}</h4>
                <h4 className="">Quantity, : {price}</h4>
                <h4 className="">Price : {price}</h4>
                <h4 className="">Rating : {rating}</h4>
                <h4 className="">Details : {details}</h4>
              </div>
              <div className="card-read-more text-center">
                <Link to={"/mytoys"}>
                  <button
                    type="button"
                    className="btn btn-success btn-sm px-3 m-1 fw-bold "
                  >
                    My Toys
                  </button>
                </Link>
                <Link to={"/addtoys"}>
                  <button
                    type="button"
                    className="btn btn-info btn-sm px-3 m-1 fw-bold "
                  >
                    Add Toys
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
