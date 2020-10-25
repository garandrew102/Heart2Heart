import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./Timer.css";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Timer = () => {
  const history = useHistory();
  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Too late...</div>;
    }
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{`${minutes}:${seconds}`}</div>
      </div>
    );
  };

  return (
    <>
      <div id="timer-container">
        <h1 className="title">Diagnosing...</h1>
        <div id="timer-wrapper">
          <CountdownCircleTimer
            isPlaying
            duration={180}
            size={300}
            strokeWidth={30}
            colors={[
              ["#004777", 0.33],
              ["#F7B801", 0.33],
              ["#A30000", 0.33],
            ]}
            onComplete={() => [true, 1000]}
          >
            {renderTime}
          </CountdownCircleTimer>
          <p className="info">
            "Every three minutes someone is diagnosed with leukemia, lymphoma,
            other cancer and genetic diseases."
          </p>
        </div>
        <div>
          <Button
            onClick={() => {
              history.push("/search");
            }}
            className="landing-cta mt-5"
          >
            View Stories
          </Button>
          <Button
            onClick={() => {
              history.push("/register");
            }}
            className="landing-cta mt-5 ml-4"
          >
            Share Your Story
          </Button>
        </div>
      </div>
    </>
  );
};

export default Timer;
