import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { answerActions, questionActions } from "../../store";
import "../Style.css";
const Options = (props) => {
  const dispatch = useDispatch();
  const [nav, setNav] = useState(false);
  const [broken, setBroken] = useState(false);
  const [time, setTime] = useState(0);
  console.log(time)
  const [done, setDone] = useState(false);
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  useEffect(() => {
    let interval;
    if (done === false) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, []);
  const clickHandler = async () => {
    setDone(true);
    if (props.correct === props.onum) {
      if (props.currentQ === props.length) {
        setNav(true);
        dispatch(questionActions.setTime(0))
      } else {
        dispatch(questionActions.next());
      }
      dispatch(
        answerActions.add({
          index: props.currentQ,
          ans: true,
          time: time,
        })
      );
      setBroken(false);
      setTime(0)
    } else {
      dispatch(
        answerActions.add({
          index: props.currentQ,
          ans: false,
          time: time,
        })
      );
      setBroken(true);
      await delay(1000);
      setNav(true);
    }
  };

  if (nav) {
    return <Navigate to="/results" />;
  }

  return (
    <button onClick={clickHandler}>
      <pre className={broken ? "optionButtonBroken" : "optionButton"}>
        {props.oname}
      </pre>
    </button>
  );
};

export default Options;
