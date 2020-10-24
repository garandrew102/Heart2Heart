import React from "react";
import { Card } from "react-bootstrap";

const Example = () => {

  const cardStyle = {
    width: "300px",
    textAlign: "justify",
  };
  return (
    <div
      className="d-flex justify-content-between align-items-center"
      style={{ width: "100%", maxWidth: "800px" }}
    >
      <Card style={cardStyle}>
        <Card.Header className="text-center">
          <Card.Title>Donor Name</Card.Title>
        </Card.Header>
        <Card.Body>
          Donor Story Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Fermentum dui faucibus in ornare. Amet commodo nulla facilisi nullam.
        </Card.Body>
      </Card>


      <div id="search-line"></div>


      <Card style={cardStyle}>
        <Card.Header className="text-center">
          <Card.Title>Recipient Name</Card.Title>
        </Card.Header>
        <Card.Body>
          Recipient Story Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Fermentum dui faucibus in ornare. Amet commodo nulla facilisi
          nullam.
        </Card.Body>
      </Card>
    </div>
  );
};

export default Example;
