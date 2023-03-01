import React from "react";
import QuestionArea from "./QuestionArea";
import Timer from "./Timer";
import { data } from "../demo";
import { useSelector } from "react-redux";
const Quiz = () => {
  const currentQ = useSelector(state=>state.question.currentQ)
  return (
    <div className="flex flex-col items-center  h-screen w-screen">
      <Timer />
      <QuestionArea data={data} currentQ={currentQ}/>
    </div>
  );
};

export default Quiz;
