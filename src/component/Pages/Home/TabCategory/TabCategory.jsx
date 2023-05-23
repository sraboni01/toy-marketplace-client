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
            <div>
              {datas.map((data) => (
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={data.photo} />
                  <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>
                      <p>
                        Rating: <span>{data.rating}</span>
                      </p>
                    </Card.Text>
                    <Link to={`/details/${data._d}`}>
                      {" "}
                      <Button variant="primary">View details</Button>
                    </Link>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabCategory;
