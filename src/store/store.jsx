import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "../app/root-reducer.jsx";

const store = configureStore({
    reducer: rootReducer
})

export default store;