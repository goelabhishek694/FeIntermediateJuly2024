import {createSlice} from "@reduxjs/toolkit";

const loaderSlice = createSlice({
    name:"loaders",
    initialState: {
        loading: false
    },
    reducers: {
        ShowLoading: (state) => {
            state.loading = true;
        },
        HideLoading: (state) => {
            state.loading = false;
        }
    }
});

// console.log(loaderSlice);
export const {ShowLoading, HideLoading} = loaderSlice.actions;
export default loaderSlice.reducer;