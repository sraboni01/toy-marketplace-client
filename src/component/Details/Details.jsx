import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

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
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Img variant="top" src={photo} />
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{sellername}</ListGroup.Item>
            <ListGroup.Item>{selleremail}</ListGroup.Item>
            <ListGroup.Item>{category}</ListGroup.Item>
            <ListGroup.Item>{price}</ListGroup.Item>
            <ListGroup.Item>{rating}</ListGroup.Item>
            <ListGroup.Item>{quantity}</ListGroup.Item>
            <ListGroup.Item>{details}</ListGroup.Item>
          </ListGroup>
          <Card.Link to={"/addtoys"}>Add Toy</Card.Link>
          <Card.Link to={"/alltoys"}>Show All Toy</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Details;
