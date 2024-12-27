import { useSelector, useDispatch } from "react-redux";
import React from "react";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";
import { remove } from "../store/cartSlice";
const Cart2 = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeToCart = (id) => {
    dispatch(remove(id));
  };
  const cards = products.map((product) => (
    <div
      className="col-md-12 "
      style={{
        marginBottom: "10px",

        width: "100%",
        border: "2px solid black",
        float: "left",
      }}
    >
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
          <Button variant="danger" onClick={() => removeToCart(product.id)}>
            {" "}
            remove item{" "}
          </Button>{" "}
        </Card.Footer>{" "}
      </Card>{" "}
    </div>
  ));
  return (
    <>
      {" "}
      <div className="row"> {cards} </div>{" "}
    </>
  );
};

export default Cart2;
