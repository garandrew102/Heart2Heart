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
        “For me it was just a few hours of time and for another person it is a life!” 
        <br/>
        <br/>
        <i>- Josi Paulig</i>
        </Card.Body>
      </Card>


      <div id="search-line"></div>


      <Card style={cardStyle}>
        <Card.Header className="text-center">
          <Card.Title>Recipient Name</Card.Title>
        </Card.Header>
        <Card.Body>
        “Since the transplant, we have learned to cherish every possible moment because you never know when or if something may happen. Preston has been given a second chance at life and we plan to let him live it fully!”
        <br/>
        <br/>
        <i>- Anonymous</i>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Example;
