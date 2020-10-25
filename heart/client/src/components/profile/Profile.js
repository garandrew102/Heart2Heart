import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Profile.css";
import { Jumbotron, Card, Image, Button } from "react-bootstrap";
import defaultAvatar from "../../assets/images/defaultAvatar.png";

const Profile = ({ match }) => {
  const { id } = match.params;
  const [profile, setProfile] = useState();

  useEffect(() => {
    axios(`/api/users/${id}`)
      .then(({ data }) => {
        setProfile(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleClick = () => {
    axios
      .patch(`/api/connect/request/${id}`)
      .then(({ data }) => {
        alert("Request Submitted Successfully!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Jumbotron
        className="d-flex justify-content-around mb-5"
        style={{ width: "100%", borderRadius: "40px" }}
      >
        <div id="user-avatar">
          <Image
            src={profile?.avatar || defaultAvatar}
            alt="profile-picture"
            width={250}
            height={250}
            roundedCircle
          />
          </div>
        <div id="user-info" className="mx-5 my-5 text-center">
          <h1>{profile?.username}</h1>
          <h5>{profile?.role}</h5>
          {profile?.connection?.map((connections) => {
            return (
              <Button
                as={Link}
                className="connection-status"
                to={`/profiles/${connections.connectionId}`}
              >
                {profile?.role === "donor"
                  ? `I donated bone marrow to ${connections.name}`
                  : `I received bone marrow from ${connections.name}`}
              </Button>
            );
          })}
          <Button onClick={handleClick}>Request Connection</Button>
        </div>
      </Jumbotron>
      <Card>
        <Card.Header>
          <Card.Title>My Donor Story:</Card.Title>
        </Card.Header>
        <Card.Body>
          {profile?.story || "This user hasn't entered a story yet."}
        </Card.Body>
      </Card>
    </>
  );
};

export default Profile;
