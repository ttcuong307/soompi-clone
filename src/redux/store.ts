import { AnyAction, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import thunkMiddleware  from "redux-thunk";
import { rootReducer } from "./rootReducer";


const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type ReduxState = ReturnType<typeof rootReducer>
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  AnyAction
>;

export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store