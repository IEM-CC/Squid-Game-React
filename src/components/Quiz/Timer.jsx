import React, { useState } from "react";
import Countdown from "react-countdown";

const Timer = () => {
  // const time = useSelector((state) => state.paper.duration);
  const [settedDate, setDate] = useState(Date.now() + (10 * 1000));
  const [completed, setCompleted] = useState(false);
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      setCompleted(completed);
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
