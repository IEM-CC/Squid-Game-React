import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { questionActions } from "../../store";
import Options from "./Options";
import Question from "./Question";

const QuestionArea = (props) => {

  return (
    <div className="w-full items-center justify-center h-2/3">
      <Question qname={props.data[props.currentQ].Question} />
      <div className="flex flex-wrap w-2/3 m-auto justify-around overflow-y-auto h-2/3">
        {props.data[props.currentQ].Options.map((i,index)=>
        <Options currentQ={props.currentQ} length={props.data.length - 1} correct={props.data[props.currentQ].Correct} 
        key={index} onum={index+1} oname={i}/>)}
      </div>
    </div>
  );
};

export default QuestionArea;
