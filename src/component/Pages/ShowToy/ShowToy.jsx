import React from "react";
import Table from "react-bootstrap/Table";
import { FaRegEdit, FaRegEyeSlash, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const ShowToy = ({ toy }) => {
  const { _id, sellername, name, category, price, quantity } = toy;
  const handleDelete = (_id) => {
    //console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/toy/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Seller Name</th>
            <th>Toy Name</th>
            <th>Sub Category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{sellername}</td>
            <td>{name}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
              <button type="button" className="btn btn-info btn-sm px-3 m-1">
                View Details
              </button>

              <Link to={`/edit/${_id}`}>
                <button
                  type="button"
                  className="btn btn-success btn-sm px-3 m-1"
                >
                  <FaRegEdit></FaRegEdit>
                </button>
              </Link>

              <button
                onClick={() => handleDelete(_id)}
                type="button"
                className="btn btn-danger btn-sm px-3 m-1"
              >
                <FaRegTrashAlt></FaRegTrashAlt>
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ShowToy;
