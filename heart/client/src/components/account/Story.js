import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const Story = () => {
  const { setCurrentUser, currentUser } = useContext(AppContext);
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

  return (
    <Form style={{ width: "100%" }} className="mt-5" onSubmit={handleSubmit}>
      <Form.Group controlId="story">
        <Form.Label>Your Story:</Form.Label>
        <Form.Control
          defaultValue={currentUser?.story}
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
          name="story"
          as="textarea"
          rows={10}
          placeholder="Enter story here!"
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="mr-3 mt-2">
        Submit Story
      </Button>
    </Form>
  );
};

export default Story;
