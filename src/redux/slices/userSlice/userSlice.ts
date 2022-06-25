import { createSlice } from "@reduxjs/toolkit";

import { stateUserType } from "../../../types/storeType";
import { UserType } from "../../../types/type";

import { fetchUser } from "./asyncThunk";

const emptyUser:UserType = {
  id: 0,
  name: '',
  email: '',
  address: {
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    geo: {
      lat: '',
      lng: '',
    }
  },
  phone: '',
  website: '',
  company: {
    name: '',
    catchPhrase: '',
    bs: '',
  }
}

const initialState = {
  currentUser: emptyUser,
  isLoading: true,
} as stateUserType


const slice = createSlice({
  name: "stateUser",
  initialState,
  reducers:{

  },
  extraReducers:(builder) => {

    builder.addCase(fetchUser.pending, (state, action) => {
      state.currentUser = emptyUser
      state.isLoading = true
    })
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      let resp = action.payload
      state.currentUser = resp
      state.isLoading = false
    })
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.isLoading = false
    })
  }

})

export const stateUser = slice.reducer;