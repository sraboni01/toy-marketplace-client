import React, { useEffect, useState } from "react";
import "./TabCategory.css";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const TabCategory = () => {
  const [toggleState, setToggleState] = useState(1);
  const [datas, setDatas] = useState([]);
  console.log(datas);
  const [categorys, setCategorys] = useState("Teddy Bear");

  const toggleTab = (index) => {
    setToggleState(index);
  };

  // na
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
    fetch(
      `https://y-mbbxolfp7-sraboni01.vercel.app/category?category=${categorys}`
    )
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, [categorys]);

  return (
    <div>
      <div className="container text-center">
        <h2 className="mb-4 fw-bold text-uppercase">
          <span style={{ color: "#9c52fd", fontSize: "48px" }}>T</span>
          rending Product
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <Tabs>
        <TabList className="container text-center tablist">
          <Tab onClick={() => setCategorys("Taddy Bear")}>Teddy Bear</Tab>
          <Tab onClick={() => setCategorys("Horse")}> Horse</Tab>
          <Tab onClick={() => setCategorys("Dainosur")}>Dainosur </Tab>
        </TabList>
        {/* Tab panner is here */}
        <TabPanel>
          <div className="container  p-5">
            <div className="row d-flex">
              {datas.slice(0, 3).map((data) => (
                <>
                  <div className="col-lg-6">
                    <div className="card">
                      <a className="img-card">
                        <img src={data.photo} />
                      </a>
                      <div className="card-content text-center">
                        <h4 className="card-title">Name : {data.name}</h4>
                        <h4 className="card-title">
                          Seller Name : {data.sellername}
                        </h4>

                        <h4 className="">Price : {data.price}</h4>
                        <h4 className="">Rating : {data.rating}</h4>
                      </div>
                      <div className="card-read-more text-center">
                        <Link to={`/details/${data._id}`}>
                          <button
                            type="button"
                            className="btn btn-outline-primary btn-sm px-3 m-1"
                          >
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="container p-5">
            <div className="row d-flex">
              {datas.slice(0, 3).map((data) => (
                <>
                  <div className="col-lg-6">
                    <div className="card">
                      <a className="img-card">
                        <img src={data.photo} />
                      </a>
                      <div className="card-content text-center">
                        <h4 className="card-title">Name : {data.name}</h4>
                        <h4 className="card-title">
                          Seller Name : {data.sellername}
                        </h4>

                        <h4 className="">Price : {data.price}</h4>
                        <h4 className="">Rating : {data.rating}</h4>
                      </div>
                      <div className="card-read-more text-center">
                        <Link to={`/details/${data._id}`}>
                          <button
                            type="button"
                            className="btn btn-outline-primary btn-sm px-3 m-1"
                          >
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="container p-5">
            <div className="row d-flex">
              {datas.slice(0, 3).map((data) => (
                <>
                  <div className="col-lg-6">
                    <div className="card">
                      <a className="img-card">
                        <img src={data.photo} />
                      </a>
                      <div className="card-content text-center">
                        <h4 className="card-title">Name : {data.name}</h4>
                        <h4 className="card-title">
                          Seller Name : {data.sellername}
                        </h4>

                        <h4 className="">Price : {data.price}</h4>
                        <h4 className="">Rating : {data.rating}</h4>
                      </div>
                      <div className="card-read-more text-center">
                        <Link to={`/details/${data._id}`}>
                          <button
                            type="button"
                            className="btn btn-outline-primary btn-sm px-3 m-1"
                          >
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabCategory;
