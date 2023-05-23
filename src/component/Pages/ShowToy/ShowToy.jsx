import React from "react";
import Table from "react-bootstrap/Table";
import { FaRegEdit, FaRegEyeSlash, FaRegTrashAlt } from "react-icons/fa";
const ShowToy = ({ toy }) => {
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
            <td>{toy.sellername}</td>
            <td>{toy.name}</td>
            <td>{toy.category}</td>
            <td>{toy.price}</td>
            <td>{toy.quantity}</td>
            <td>
              <button type="button" className="btn btn-success btn-sm px-3 m-1">
                View Details
              </button>

              <button type="button" className="btn btn-success btn-sm px-3 m-1">
                <FaRegEdit></FaRegEdit>
              </button>

              <button type="button" className="btn btn-danger btn-sm px-3 m-1">
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
