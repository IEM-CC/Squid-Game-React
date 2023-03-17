import React from "react";
import QuestionArea from "./QuestionArea";
import Timer from "./Timer";
import { data } from "../demo";
import { useDispatch, useSelector } from "react-redux";
import { questionActions } from "../../store";
import { Navigate } from "react-router-dom";
const Quiz = () => {
  const currentQ = useSelector(state=>state.question.currentQ)
  if( currentQ === data.length){
    return <Navigate to='/results' />
  }
  window.onunload = window.history.forward()
  return (
    <div className="flex flex-col items-center relative h-screen w-screen">
      <Timer />
      <QuestionArea data={data} currentQ={currentQ}/>
    </div>
  );
};

export default Quiz;
