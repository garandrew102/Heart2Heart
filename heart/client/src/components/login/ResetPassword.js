import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const [data, setData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/api/users/password?email=${data}`, data)
      .then(({ data }) => {
        alert("Reset password email sent!");
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong! Try again.");
      });
  };

  return (
    <>
      <h1>Reset Password</h1>
      <Form
        onSubmit={handleSubmit}
        className="mt-3 border-form"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <Form.Group controlId="resetEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Text className="text-right">
          Need an account? Register with us <Link to="/register">here</Link>
        </Form.Text>
        <Form.Text className="text-right">
          Already have an account? Login <Link to="/login">here</Link>
        </Form.Text>

        <Button className="mt-3" variant="primary" type="submit">
          Reset Password
        </Button>
      </Form>
    </>
  );
};

export default ResetPassword;
