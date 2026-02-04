import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        value: "light",
    },
    reducers: {
        toggle: (state) => {
            state.value = state.value === "light" ? "dark" : "light"
        },
        dark: (state) => {
            state.value = "dark"
        },
        light: (state) => {
            state.value = "light"
        }
    }
})


export const { toggle, light, dark } = themeSlice.actions;
export default themeSlice.reducer;