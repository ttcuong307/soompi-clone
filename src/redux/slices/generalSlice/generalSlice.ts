import { createSlice } from "@reduxjs/toolkit";
import { generalType } from "../../../types/storeType";


const initialState = {
  isDark: false,
} as generalType

const slice = createSlice({
  name: "generalStore",
  initialState,
  reducers:{
    setDarkMode: (state: { isDark: boolean; }) => {
      state.isDark = !state.isDark
    }
  },
})


export const { setDarkMode } = slice.actions;

export const generalStore = slice.reducer;