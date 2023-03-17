import React, { useState } from "react";
import { useFormik } from "formik";
import { Navigate, redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { questionActions } from "../../store";

const Name = () => {
  const [navigate, setNavigate] = useState(false)
  const dispatch = useDispatch()
    const initialValues = {
        name: ''
    }

    const {values, errors, touched, handleChange, handleBlur, handleSubmit} = useFormik({
        initialValues,
        onSubmit: (value,action) => {
            localStorage.setItem('name',JSON.stringify(value.name))
            dispatch(questionActions.setName(value.name))
            setNavigate(true)
            action.resetForm()
        }
    })
  if(navigate){
    return <Navigate to='/quiz' />
  }
  return (
    <form className="flex flex-col bg-white p-4 rounded-xl text-3xl w-1/3" onSubmit={handleSubmit}>
        <label htmlFor="name" className="mb-4">
          Enter Your Name
        </label>
        <input
          className="text-2xl border-none focus:brder-none focus:outline-none focus:bg-white w-4/5 mb-4"
          autoComplete='false'
          type="text"
          name="name"
          placeholder="Type your name"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <button type="submit" className="text-xl bg-[#FB3E64] rounded-xl w-fit px-3 py-2 text-white font-semibold">Submit</button>
      </form>
  );
};

export default Name;
