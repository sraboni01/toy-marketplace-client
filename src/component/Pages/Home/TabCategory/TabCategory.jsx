import React, { useEffect, useState } from "react";
import "./TabCategory.css";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const TabCategory = () => {
  const [toggleState, setToggleState] = useState(1);
  const [datas, setDatas] = useState([]);
  console.log(datas);
  const [categorys, setCategorys] = useState("Taddy Bear");

  const toggleTab = (index) => {
    setToggleState(index);
  };

  // name,
  //       photo,
  //       sellername,
  //       selleremail,
  //       category,
  //       price,
  //       rating,
  //       quantity,
  //       details,

  console.log(categorys);
  useEffect(() => {
    fetch(`http://localhost:5000/category?category=${categorys}`)
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, [categorys]);

  return (
    <div className="tabcategory">
      <div className="container">
        <div className="text-center p-4">
          <h2 className="fw-bold">Our New Products Animal toys</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            <span
              className="fw-bold"
              onClick={() => setCategorys("Taddy Bear")}
            >
              Teddy Bear
            </span>
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            <span onClick={() => setCategorys("Horse")} className="fw-bold">
              Horse
            </span>
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            <span
              className="fw-bold"
              onClick={() => {
                setCategorys("Dinosaur");
              }}
            >
              Dinosaur
            </span>
          </button>
        </div>

        <div className="content-tabs py-5">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <div className="row">
              {datas.map((data) => (
                <div className="col-lg-4">
                  <div className="card">
                    <a className="img-card">
                      <img src={data.photo} />
                    </a>
                    <div className="card-content">
                      <h4 className="card-title">Name : {data.name}</h4>
                      <p className="">Price : {data.price}</p>
                      <p className="">Rating : {data.rating}</p>
                    </div>
                    <div className="card-read-more text-center">
                      <Link to={`/details/${data._id}`}>
                        <button
                          type="button"
                          className="btn btn-sm px-3 m-1 fw-bold "
                        >
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabCategory;
