import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import TodoSlice from "./todoSlice";
import UserSlice from "./userSlice";

//creating a store
const store = configureStore({
    //able to access sattes of counter slice 
    reducer:{
        counterState: counterSlice.reducer,
        todoState: TodoSlice.reducer,
        userState: UserSlice.reducer
    }
});

export default store;


// counterState: {
//     count:5,
//         name:"",
//         age:0,
// }