import { configureStore } from "@reduxjs/toolkit";
import loadersReducer from "./loaderSlice";
// import usersReducer from "./userSlice";
import userSlice from "./userSlice";

const store = configureStore({
    reducer:{
        loaders: loadersReducer,
        users: userSlice.reducer
    },
});

export default store;