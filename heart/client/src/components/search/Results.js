import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import defaultAvatar from "../../assets/images/defaultAvatar.png";

const Results = () => {
  const { searchResults } = useContext(AppContext);

  return (
    <>
      <h2 className="mt-5 mb-3">Results</h2>
      <div id="search-card-container" className="d-flex flex-column">
        {searchResults?.map((user) => {
          return (
            <Card
              key={user._id}
              className="mb-5"
              style={{ width: "90vw", maxWidth: "600px" }}
            >
              <Card.Body className="d-flex justify-content-around align-items-center">
                <Card.Img
                  src={defaultAvatar}
                  alt="avatar"
                  style={{
                    height: "150px",
                    width: "150px",
                    background: "white",
                    padding: "5px",
                    borderRadius: "10px",
                  }}
                />

                <div
                  className="text-center pt-2 pt-1 px-3"
                  style={{
                    width: "50%",
                    background: "white",
                    borderRadius: "5px",
                    border: "1px solid teal",
                  }}
                >
                  <Card.Title
                    style={{ fontWeight: "bold", fontSize: "30px" }}
                    as={Link}
                    to={`/profiles/${user._id}`}
                  >
                    {user.username.toUpperCase()}
                  </Card.Title>
                  <p style={{ fontWeight: "bold" }}>
                    {user.role.toUpperCase()}
                  </p>
                  <hr />
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
