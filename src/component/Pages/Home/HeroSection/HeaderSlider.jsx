import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./HederSlider.css";

const HeaderSlider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel fade activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://i.ibb.co/8NKM7pG/header-02.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>Best Kids Store & Online Shop</h2>
            <p>Give The Gift Of Your Children Everyday</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/8z97MJJ/header-03.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h2>Best Kids Store & Online Shop</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/kQC8Ysm/header-01.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h2>Welcome to our online shop</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeaderSlider;
