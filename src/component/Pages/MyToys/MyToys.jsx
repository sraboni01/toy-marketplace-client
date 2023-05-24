import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import banner from "../../../img/banner.jpg";
import ShowToy from "../ShowToy/ShowToy";

const MyToys = () => {
  const toys = useLoaderData();
  return (
    <div className="text-center">
      <div
        className="banner p-5"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-white text-center p-5 fw-bold">
          Total Toys Length : {toys.length}
        </h2>
      </div>
      <div className="container py-5 shadow">
        {toys.map((toy) => (
          <ShowToy key={toy._id} toy={toy}></ShowToy>
        ))}
        <div className="card-read-more text-center">
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
  );
};

export default MyToys;
