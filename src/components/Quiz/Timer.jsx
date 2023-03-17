import React, { useState } from "react";
import Countdown from "react-countdown";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Timer = () => {
  const [settedDate, setDate] = useState(Date.now() + 300000);
  const [completed, setCompleted] = useState(false);
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      setCompleted(completed);
      return <Navigate to='/results' />
      // Render a countdown
    } else {
      setCompleted(completed);
      return (
        <div className={hours == 0 && minutes <= 5 ? "text-white" : ""}>{`${
          hours < 10 ? "0" + hours : hours
        } : ${minutes < 10 ? "0" + minutes : minutes} : ${
          seconds < 10 ? "0" + seconds : seconds
        }`}</div>
      );
    }
  };
  return (
    <div className="text-white h-[100px] text-3xl font-semibold">
      <Countdown
        controlled={false}
        autoStart
        date={settedDate}
        renderer={renderer}
      />
    </div>
  );
};

export default Timer;
