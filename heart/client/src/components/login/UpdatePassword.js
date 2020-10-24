import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const UpdatePassword = ({ history }) => {
  const { setCurrentUser } = useContext(AppContext);
  const [data, setData] = useState();

  const handleSubmit = (e) => {
    axios
      .put("/api/password", data, { withCredentials: true })
      .then((data) => {
        setCurrentUser(data);
        alert("Updates successful!");
        history.push("/account");
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
        <Form.Group controlId="updatePassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            type="password"
            name="password"
            placeholder="Enter new password"
            required
          />
        </Form.Group>

        <Button className="mt-3" variant="primary" type="submit">
          Update Password
        </Button>
      </Form>
    </>
  );
};

export default UpdatePassword;
