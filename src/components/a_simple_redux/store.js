import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./slice/counter.js";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
});