import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const NavBar = () => {
  const cartProducts = useSelector((state) => state.cart);

  return (
    <Navbar expand="lg" className="bg-white">
      <Container>
        <Navbar.Brand href="#home"> Redux toolkit </Navbar.Brand>{" "}
        <Nav className="me-auto">
          <Nav.Link to="/" as={Link}>
            {" "}
            product{" "}
          </Nav.Link>{" "}
        </Nav>{" "}
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Nav.Link to="/cart" as={Link}>
              {" "}
              my bag {cartProducts.length}{" "}
            </Nav.Link>{" "}
          </Navbar.Text>{" "}
        </Navbar.Collapse>{" "}
      </Container>{" "}
    </Navbar>
  );
};

export default NavBar;
