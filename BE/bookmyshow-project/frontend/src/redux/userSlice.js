import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"users",
    initialState: {
        user:null
    },
    reducers: {
        setUser: (state, action) => {
            console.log(action.payload);
            state.user = action.payload;
       }
    }
});

export const {setUser} = userSlice.actions;
export default userSlice.reducer;

// export default userSlice