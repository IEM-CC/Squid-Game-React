import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { questionActions } from "../../store";
import "../Style.css"
const Options = (props) => {
  const dispatch = useDispatch()
  const [nav, setNav] = useState(false);
  const [broken,setBroken]= useState(false);
  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
  const clickHandler = async () => {
    if(props.correct === props.onum){
      dispatch(questionActions.next())
      setBroken(false)
    }else{
     
      setBroken(true)
      await delay(1000);
      setNav(true)
    }
  }

      if(nav){
        return <Navigate to='/results' />
      } 
  
 
  return (
    <button onClick={clickHandler} >
      <pre className={broken ? 'optionButtonBroken' : 'optionButton'}>
        {props.oname}
      </pre>
     

    </button>
  );
};

export default Options;
