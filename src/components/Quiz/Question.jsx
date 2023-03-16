import React from "react";

const Question = (props) => {
  return (
    <div className="bg-white w-2/3 overflow-x-hidden mb-6 overflow-y-auto m-auto text-xl p-3 rounded-lg">
      {props.qname}
    </div>
  );
};

export default Question;
