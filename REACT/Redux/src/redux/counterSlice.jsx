import {createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"CounterSlice",
    initialState:{
        count:5
    }
})

export default counterSlice;