import React from "react";

const Question = (props) => {
  return (
    <pre className="bg-white w-2/3 mb-4 h-1/2 overflow-y-auto m-auto text-xl p-3 rounded-lg">
      {props.qname}
    </pre>
  );
};

export default Question;
