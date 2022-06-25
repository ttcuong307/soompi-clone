import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

import { TypedDispatch } from "../../store";

import { UserType } from "../../../types/type";

export const fetchUser = createAsyncThunk(
  '/users/:id',
  async(userId:number) => {
    const resp = await axios.get<UserType>(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
    if (resp.status > 400) {
      return resp.data;
    } else {
      return resp.data;
    }
  }
)