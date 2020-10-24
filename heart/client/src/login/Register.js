import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = ({ history }) => {
  const { setCurrentUser } = useContext(AppContext);
  const [data, setData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.role) {
      return alert("You must select a role!");
    }
    axios
      .post("/api/users", data)
      .then(({ data }) => {
        sessionStorage.setItem("user", data);
        setCurrentUser(data);
        history.push("/account");
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong! Try again.");
      });
  };

  return (
    <>
      <h1>Register</h1>
      <Form
        onSubmit={handleSubmit}
        className="mt-3 border-form"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <Form.Group className="d-flex">
          <Form.Check
            className="mr-3"
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            type="radio"
            id="donor"
            name="role"
            label="Donor"
            value="donor"
          />

          <Form.Check
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            type="radio"
            name="role"
            label="Recipient"
            id="recipient"
            value="recipient"
          />
        </Form.Group>
        <Form.Group controlId="registerUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            name="username"
            type="text"
            placeholder="Enter username"
            required
          />
        </Form.Group>
        <Form.Group controlId="registerName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            name="name"
            type="text"
            placeholder="Enter name"
            required
          />
        </Form.Group>
        <Form.Group controlId="registerEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group controlId="registerPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Form.Text className="text-right">
          Already have an account? Login <Link to="/login">here</Link>
        </Form.Text>

        <Button className="mt-3" variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </>
  );
};

export default Register;
