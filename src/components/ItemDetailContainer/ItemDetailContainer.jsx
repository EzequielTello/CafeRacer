import React from "react";
import { Card } from "react-bootstrap";

const ItemDetailContainer = ({ product }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100vw",
        justifyContent: "space-around",
      }}
    >
      <Card
        key={product.id}
        style={{
          width: "18rem",
          margin: 20,
          height: "400px",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>{product.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetailContainer;
