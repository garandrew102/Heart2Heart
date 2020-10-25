import React from "react";
import Timer from "./timer/Timer";
import { Button, Card } from "react-bootstrap";
import img1 from "../../assets/images/Donate.jpg";
import img2 from "../../assets/images/Gift.png";
import img3 from "../../assets/images/share.jpg";
import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <>
      <Timer />

      <div id="landing-info-container">
        <Card className="cards">
          <Card.Img src={img1} alt="donate" />
          <Card.ImgOverlay></Card.ImgOverlay>
          <Card.Body>
            <p className="text-justify">
              When you support Gift of Life and its mission, you give hope to
              countless children and adults in desperate need of life-saving
              transplants by helping to grow our donor registry.
            </p>
            <a
              className="btn"
              href="https://www.giftoflife.org/register"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate
            </a>
          </Card.Body>
        </Card>
        <Card className="cards">
          <Card.Img src={img2} alt="gift" />
          <Card.ImgOverlay></Card.ImgOverlay>
          <Card.Body>
            <p className="text-justify">
              Gift of Life believes that every person battling blood cancer
              deserves a second chance at life. It all begins with one
              remarkable person, one life-changing swab and one huge win —
              finding a match and a cure.
            </p>
            <a
              className="btn"
              href="https://www.giftoflife.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gift of Life
            </a>
          </Card.Body>
        </Card>
        <Card className="cards">
          <Card.Img src={img3} alt="share" />
          <Card.ImgOverlay></Card.ImgOverlay>
          <Card.Body>
            <p className="text-justify">
              Heart 2 Heart is a social platform for bone marrow donors and
              those who have received those donations to share their stories.
              Our aim is to demystify the donation process and share the impact
              that donations have on those who need them.
            </p>
            <p className="text-justify">
              Donors of bone marrow or recipients of a donation are also able to
              connect and show that connection through the site in order to show
              both sides of the story.
            </p>
            <Button as={Link} className="btn" to="/register" variant="primary">
              Register
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Landing;
