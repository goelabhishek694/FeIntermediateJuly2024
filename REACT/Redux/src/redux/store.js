import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import TodoSlice from "./todoSlice";

//creating a store
const store = configureStore({
    //able to access sattes of counter slice 
    reducer:{
        counterState: counterSlice.reducer,
        todoState: TodoSlice.reducer
    }
});

export default store;


// counterState: {
//     count:5,
//         name:"",
//         age:0,
// }