import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { questionActions } from "../../store";

const Options = (props) => {
  const dispatch = useDispatch()
  const [nav, setNav] = useState(false)
  const clickHandler = () => {
    if(props.correct === props.onum){
      dispatch(questionActions.next())
    }else{
      setNav(true)
    }
  }
  if(nav){
    return <Navigate to='/results' />
  }
  return (
    <button onClick={clickHandler}>
      <pre className="bg-white w-fit m-2 text-xl p-3 rounded-lg">
        {props.oname}
      </pre>
    </button>
  );
};

export default Options;
