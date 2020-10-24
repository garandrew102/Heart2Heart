import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
      <Navbar.Brand href="/">Heart2Heart</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link href="/faq">FAQ</Nav.Link>
          <Nav.Link href="/search">Search</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/logout">Logout</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
          <Nav.Link href="/profiles/1">Profile</Nav.Link>
          <Nav.Link href="/account">Account</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
