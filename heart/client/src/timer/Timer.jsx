import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = () => {
  const hourSeconds = 3600;

  const timerProps = {
    isPlaying: true,
    size: 120,
    strokeWidth: 6,
  };

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="failed">DEAD</div>;
    } else {
      return (
        <div className="time-wrapper">
          <div className="time">{remainingTime}</div>
        </div>
      );
    }
  };

  return (
    <>
      <CountdownCircleTimer
        {...timerProps}
        isPlaying
        duration={hourSeconds}
        colors={[
          ["#004777", 0.33],
          ["#F7B801", 0.33],
          ["#A30000", 0.33],
        ]}
        onComplete={() => [true, 1000]}
      >
        {("minutes", renderTime)}
      </CountdownCircleTimer>
    </>
  );
};

export default Timer;
