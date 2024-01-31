import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <Navbar variant="dark" expand="md" collapseOnSelect class="navbar">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="PrimeCart" />
            PrimeCart
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart">
                <FaShoppingCart class="m-1" />
                Cart
              </Nav.Link>
              <Nav.Link href="/login">
                <FaUser class="m-1" />
                Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
