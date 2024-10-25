import {createSlice} from "@reduxjs/toolkit";

const loaderSlice = createSlice({
    name:"loaders",
    initialState: {
        loading: false
    },
    reducers: {
        showLoading: (state) => {
            state.loading = true;
        },
        hideLoading: (state) => {
            state.loading = false;
        }
    }
});

// console.log(loaderSlice);
export const {showLoading, hideLoading} = loaderSlice.actions;
export default loaderSlice.reducer;