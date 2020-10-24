import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Jumbotron, Form, Button } from "react-bootstrap";
import axios from "axios";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState();
  const { setSearchResults, setShowExample } = useContext(AppContext);

  const handleSearch = (type) => {
    type = type.toLowerCase();
    axios
      .get(`/api/search/${type}/${searchTerm}`)
      .then(({ data }) => {
        setSearchResults(data);
        setShowExample(false);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong! Try again.");
      });
  };

  return (
    <Jumbotron>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Search:</Form.Label>
          <Form.Control
            onChange={(e) => setSearchTerm(e.target.value)}
            type="email"
            placeholder="Enter search"
          />
          <Form.Text className="text-muted">
            Type a keyword in the box to search for someone by name or
            description.
          </Form.Text>
        </Form.Group>
        <Form.Group className="d-flex justify-content-center mb-0">
          <Button
            onClick={() => handleSearch("donor")}
            variant="primary"
            className="mr-3 mt-3"
          >
            Search for Donors
          </Button>
          <Button
            onClick={() => handleSearch("recipient")}
            variant="primary"
            className="mt-3"
          >
            Search for Recipients
          </Button>
        </Form.Group>
      </Form>
    </Jumbotron>
  );
};

export default SearchForm;
