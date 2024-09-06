import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name:"userInfo",
    initialState:{
        user:null,
        error: false,
        loading: true,
        param : null
    },
    reducers:{
        userLoading:(state) => {
            state.error = false;
            state.loading = true;
        },
        userData:(state, obj) => {
            state.loading = false;
            state.user= obj.payload;
        },
        userError:(state) => {
            state.loading = false;
            state.error = true;
        },
        getParam: (state,obj) => {
            state.param=obj.payload;
        }
    }
})

export default UserSlice