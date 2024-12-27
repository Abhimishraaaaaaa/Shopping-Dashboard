import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const Product = () => {
  const dispatch = useDispatch(); 
  const [products, getproducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => getproducts(result));
  }, []);
  const addToCart = (product) => {
    dispatch(add(product));
  };
  const cards = products.map((product) => (
    <div className="col-md-3" style={{ marginBottom: "10px" }}>
      <Card key={product.id} className="h-100">
        <Card.Img
          variant="top"
          src={product.image}
          style={{ width: "150px", height: "130px" }}
        />{" "}
        <Card.Body>
          <Card.Title> {product.title} </Card.Title>{" "}
          <Card.Text> INR: {product.price} </Card.Text>{" "}
        </Card.Body>{" "}
        <Card.Footer>
          <Button variant="primary" onClick={() => addToCart(product)}>
            {" "}
            Add to card{" "}
          </Button>{" "}
        </Card.Footer>{" "}
      </Card>{" "}
    </div>
  ));
  return (
    <div>
      <h1 className="d-flex justify-content-center"> product dashboard </h1>{" "}
      <div className="row"> {cards} </div>{" "}
    </div>
  );
};

export default Product;
