import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Name from "./components/Main/Name";
import Quiz from "./components/Quiz/Quiz";
import Results from "./components/Results/Results";
import { questionActions } from "./store";

export default function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(questionActions.setTime(10))
  },[])
  return (
    <div className="h-screen w-screen overflow-hidden bg-[#FB3E64] flex justify-center items-center">
      <Routes>
        <Route path="/" element={<Name/>} />
        <Route path="/quiz" element={<Quiz />}/>  
        <Route path="/results" element={<Results />}/>  
      </Routes>
    </div>
  )
}