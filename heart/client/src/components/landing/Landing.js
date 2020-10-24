import React from "react";
import Timer from "../timer/Timer";
import { Button, Card } from "react-bootstrap";
import img1 from "../../assets/images/Donate.jpg";
import img2 from "../../assets/images/Gift.png";
import img3 from "../../assets/images/share.jpg";
import "./Landing.css";

const Landing = () => {
  return (
    <>
      <div className="timer-container">
        <Timer />
      </div>
      <div className="container">
        <Card className="cards" style={{ width: "18rem" }}>
          <Card.Img src={img1} alt="donate" />
          <Card.ImgOverlay>
            <Card.Title>Lorem awevfdwsdfddwddffd</Card.Title>
            <Button variant="primary">Donate</Button>
          </Card.ImgOverlay>
        </Card>
        <Card className="cards" style={{ width: "18rem" }}>
          <Card.Img src={img2} alt="gift" />
          <Card.ImgOverlay>
            <Card.Title>Lorem awevfdwsdfddwddffd</Card.Title>
            <Button variant="primary">Gift of Life</Button>
          </Card.ImgOverlay>
        </Card>
        <Card className="cards" style={{ width: "18rem" }}>
          <Card.Img src={img3} alt="share" />
          <Card.ImgOverlay>
            <Card.Title>Lorem awevfdwsdfddwddffd</Card.Title>
            <Button variant="primary">Share</Button>
          </Card.ImgOverlay>
        </Card>
      </div>
    </>
  );
};

export default Landing;
