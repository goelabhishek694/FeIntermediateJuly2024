import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"users",
    initialState: {
        name: "Scaler",
        role: "admin"
    },
    reducers: {
       setUser: () => {

       }
    }
});

export const {setUser} = userSlice.actions;
export default userSlice.reducer;