import { configureStore } from "@reduxjs/toolkit";
import { questionSlice } from "./question";

export const store = configureStore({
    reducer:{
        question: questionSlice.reducer
    }
})

export const questionActions = questionSlice.actions