import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Info = () => {
  const { history } = useHistory();
  const { setCurrentUser } = useContext(AppContext);
  const [data, setData] = useState({});

  const handleSubmit = (e) => {
    axios
      .patch("/api/users/me", data, { withCredentials: true })
      .then((data) => {
        setCurrentUser(data);
        alert("Updates successful!");
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong! Try again.");
      });
  };

  const handleDelete = () => {
    axios
      .delete("/api/users/me", { withCredentials: true })
      .then((data) => {
        window.confirm(
          "Are you sure you want to delete your account? This action is PERMANENT and your information cannot be recovered."
        );
        setCurrentUser(null);
        sessionStorage.removeItem("user");
        history.push("/login");
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong! Try again.");
      });
  };

  return (
    <Form style={{ width: "300px" }} className="mt-5" onSubmit={handleSubmit}>
      <Form.Group controlId="accountUsername">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
          name="username"
          type="text"
          placeholder="Enter username"
        />
      </Form.Group>

      <Form.Group controlId="accountName">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
          name="name"
          type="text"
          placeholder="Enter name"
        />
      </Form.Group>

      <Form.Group controlId="accountEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
          name="email"
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group controlId="accountPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
          name="password"
          type="password"
          placeholder="Enter new password"
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="mr-3 mt-2">
        Submit
      </Button>
      <Button variant="danger" className="mt-2" onClick={handleDelete}>
        Delete Account
      </Button>
    </Form>
  );
};

export default Info;
