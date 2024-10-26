import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"users",
    initialState: {
        user:null
    },
    reducers: {
       setUser: (state, data) => {
            console.log(data.payload);
            state.user = data.payload;
       }
    }
});

// export const {setUser} = userSlice.actions;
// export default userSlice.reducer;

export default userSlice