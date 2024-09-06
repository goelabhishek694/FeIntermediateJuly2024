import {createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"CounterSlice",
    initialState:{
        count:5,
        name:"",
        age:0,
    },
    // it contains reducers object which describes all the possible state chnages 
    // Here we have centralized state management logic for counter , as we have an initial state in the slice and we are writing all the possible methods for state change inside the slice.
    reducers:{
        increment:(state)=>{
            state.count+=1;
        },
        decrement:(state)=>{
            state.count-=1;
        }
    }
})

export default counterSlice;

// can u provide any good document /resource file for ESmodule,hot replacement module, babel,webpack?