import { configureStore } from "@reduxjs/toolkit";
import { answerSlice } from "./answer";
import { questionSlice } from "./question";

export const store = configureStore({
    reducer:{
        question: questionSlice.reducer,
        answer: answerSlice.reducer
    }
})

export const questionActions = questionSlice.actions
export const answerActions = answerSlice.actions