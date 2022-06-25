import { combineReducers } from "@reduxjs/toolkit";

import { generalStore } from "./slices/generalSlice/generalSlice";
import { stateUser } from "./slices/userSlice/userSlice";

export const rootReducer = combineReducers({
  stateUser: stateUser,  
  generalStore: generalStore,
})
