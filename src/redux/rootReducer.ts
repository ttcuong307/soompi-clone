import { combineReducers} from "@reduxjs/toolkit";

import { stateUser } from "./slices/userSlice/userSlice";

export const rootReducer = combineReducers({
  stateUser: stateUser,  
})
