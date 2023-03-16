import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { data } from "../demo";

const Results = () => {
  const answer = useSelector((state) => state.answer.answer);
  console.log(answer);
  return (
    <div className="w-screen overflow-x-hidden overscroll-y-scroll h-5/6 pt-[240px] w-fit flex flex-col justify-center items-center">
      {data.map((i, index) => {
        if (answer[index]) {
          return (
            <div
              key={index}
              className="text-3xl w-2/3 flex justify-around items-center my-6"
            >
              <span className="mx-5 text-black rounded-full font-fold bg-white px-5 py-3">
                {index + 1}
              </span>
              <span
                className={`mx-5 p-3 rounded-xl ${
                  answer[index].ans ? "bg-[#21db40]" : "bg-[#de4c4c]"
                }`}
              >
                {answer[index].ans ? "Correct" : "InCorrect"}
              </span>
              <span className="mx-5 w-[150px] bg-[#3eb5e4] p-3 rounded-xl text-white  ">
                <FontAwesomeIcon icon={faClock} className="mr-3" />
                {answer[index].time / 1000}s
              </span>
            </div>
          );
        }else{
            return (
                <div
                key={index}
                className="text-3xl w-2/3 flex justify-around items-center my-6"
              >
                <span className="mx-5 text-black rounded-full font-fold bg-white px-5 py-3">
                  {index + 1}
                </span>
                <span
                  className={`mx-5 p-3 rounded-xl bg-[#cac842]`}
                >
                  {'UnAnswered'}
                </span>
                <span className="mx-5 bg-[#3eb5e4] p-3 rounded-xl text-white  ">
                  <FontAwesomeIcon icon={faClock} className="mr-3" />
                  {0}s
                </span>
              </div>  
            )
        }
      })}
    </div>
  );
};

export default Results;
