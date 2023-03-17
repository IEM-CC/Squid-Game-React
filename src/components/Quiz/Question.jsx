import React from "react";

const Question = (props) => {
  return (
    <pre style={{textAlign: 'initial'}} className="bg-white w-2/3 overflow-x-hidden mb-6  m-auto text-xl p-3 rounded-lg">
      {props.qname}
    </pre>
  );
};

export default Question;
