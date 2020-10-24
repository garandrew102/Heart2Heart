import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Results = () => {
  const { searchResults } = useContext(AppContext);

  return (
    <>
      <h2 className="mt-5">Results</h2>
      <div className="d-flex flex-column">
        {searchResults?.map((user) => {
          return (
            <Card className="mb-5" style={{ width: "100%" }}>
              <Card.Body className="d-flex justify-content-around align-items-center">
                <Card.Img
                  src={"http://placekitten.com/200/200"}
                  alt="avatar"
                  style={{ height: "200px", width: "200px" }}
                />

                <div className="text-center pl-3" style={{ width: "100%" }}>
                  <Card.Title as={Link} to={`/profiles/${user.id}`}>
                    Name
                  </Card.Title>
                  <p className="text-left">
                    Story excerpt... Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit...
                  </p>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Results;
