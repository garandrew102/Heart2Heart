import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Logout from "../login/Logout";

const Navigation = () => {
  const { currentUser } = useContext(AppContext);
  const icon = () => {
    return (
      <svg
        width="25px"
        height="25px"
        viewBox="0 0 16 16"
        className="bi bi-person-circle"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
        <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        <path
          fillRule="evenodd"
          d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
        />
      </svg>
    );
  };
  return (
    <Navbar
      className="d-flex justify-content-between"
      bg="dark"
      variant="dark"
      fixed="top"
      expand="lg"
    >
      <Nav className="flex-row justify-content-start">
        <Navbar.Brand href="/">Heart2Heart</Navbar.Brand>
        <Nav.Link className="mr-3" href="/faq">
          FAQ
        </Nav.Link>
        <Nav.Link href="/search">Search</Nav.Link>
      </Nav>
      <NavDropdown className="mr-0 navbar-text" title={icon()}>
        {!currentUser ? (
          <>
            <NavDropdown.Item style={{ color: "#343B3F" }} href="/login">
              Login
            </NavDropdown.Item>
            <NavDropdown.Item style={{ color: "#343B3F" }} href="/register">
              Register
            </NavDropdown.Item>
          </>
        ) : (
          <>
            <NavDropdown.Item style={{ color: "#343B3F" }} href="/account">
              Account
            </NavDropdown.Item>
            <NavDropdown.Item style={{ color: "#343B3F" }} href={`profiles/1`}>
              Your Profile
            </NavDropdown.Item>
            <Logout />
          </>
        )}
      </NavDropdown>
    </Navbar>
  );
};

export default Navigation;
