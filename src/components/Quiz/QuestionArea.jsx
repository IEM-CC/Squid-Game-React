import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { questionActions } from "../../store";
import Options from "./Options";
import Question from "./Question";

const QuestionArea = (props) => { 
  const dispatch = useDispatch()
  const open = useSelector(state=>state.question.modal)

  return (
    <div className="w-full items-center justify-center h-2/3">
      <Question qname={props.data[props.currentQ].Question} />
      <div className="flex flex-wrap w-2/3 m-auto justify-around overflow-y-auto h-2/3">
        {props.data[props.currentQ].Options.map((i, index) => (
          <Options
            currentQ={props.currentQ}
            length={props.data.length - 1}
            correct={props.data[props.currentQ].Correct}
            key={index}
            onum={index + 1}
            oname={i}
          />
        ))}
      </div>
      {open && <div className="absolute w-screen h-screen z-40 top-0 left-0 flex justify-center items-center bg-[#00000040]">
        <div className="px-6 py-5 bg-[#ffffff] rounded-xl flex flex-col">
          <div>{props.data[props.currentQ].Answer}</div>
          <button onClick={() => {dispatch(questionActions.next()); dispatch(questionActions.modal(false))}} className="text-xl bg-[#FB3E64] rounded-xl w-fit px-3 py-2 mt-5 text-white font-semibold">Submit</button>
        </div>
      </div>}
    </div>
  );
};

export default QuestionArea;
