import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
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
            <Card
              key={user._id}
              className="mb-5"
              style={{ width: "90vw", maxWidth: "800px" }}
            >
              <Card.Body className="d-flex justify-content-around align-items-center">
                <Card.Img
                  src={"http://placekitten.com/100/100"}
                  alt="avatar"
                  style={{ height: "100px", width: "100px" }}
                />

                <div className="text-center pl-3" style={{ width: "100%" }}>
                  <Card.Title
                    style={{ fontWeight: "bold", fontSize: "20px" }}
                    as={Link}
                    to={`/profiles/${user._id}`}
                  >
                    {user.username.toUpperCase()}
                  </Card.Title>
                  <p>{user.role.toUpperCase()}</p>
                  <p className="mt-3">{user.story?.slice(200) || "Story..."}</p>
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
