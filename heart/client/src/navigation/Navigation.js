import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Logout from "../login/Logout";

const Navigation = () => {
  const { currentUser } = useContext(AppContext);
  const accountIcon = () => {
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

  const inboxIcon = () => {
    return (
      <svg
        width="25px"
        height="25px"
        viewBox="0 0 16 16"
        class="bi bi-inbox"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4H4.98zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438L14.933 9zM3.809 3.563A1.5 1.5 0 0 1 4.981 3h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374l3.7-4.625z"
        />
      </svg>
    );
  };
  return (
    <Navbar
      id="navbar"
      className="d-flex justify-content-between"
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
      <div className="d-flex align-items-center">
        <NavDropdown className="mr- navbar-text" title={accountIcon()}>
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
              <NavDropdown.Item
                style={{ color: "#343B3F" }}
                href={`profiles/1`}
              >
                Your Profile
              </NavDropdown.Item>
              <Logout />
            </>
          )}
        </NavDropdown>
        {currentUser && <Nav.Link href="/connections">{inboxIcon()}</Nav.Link>}
      </div>
    </Navbar>
  );
};

export default Navigation;
