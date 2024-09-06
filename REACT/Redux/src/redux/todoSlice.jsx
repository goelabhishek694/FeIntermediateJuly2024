import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name:"toolbox",
    initialState:{
        task:"",
        todoList:["task1","task2"]
    },
    reducers:{
        setValue:(state,obj) =>{
            console.log("i am going to set task state");
            console.log(state," ", obj);
            state.task = obj.payload
        },
        addTask:(state,obj)=>{
            const task=obj.payload;
            const newTaskArr = [...state.todoList,task];
            state.todoList = newTaskArr;
        }
    }
})

export default TodoSlice