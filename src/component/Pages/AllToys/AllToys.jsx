import React from "react";
import { useLoaderData } from "react-router-dom";
import Table from "react-bootstrap/Table";
import banner from "../../../img/banner.jpg";
import { FaRegEdit, FaRegEyeSlash, FaRegTrashAlt } from "react-icons/fa";
import ShowToy from "../ShowToy/ShowToy";
const AllToys = () => {
  const toys = useLoaderData();
  //console.log(toye);
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
      </div>
    </div>
  );
};

export default AllToys;
