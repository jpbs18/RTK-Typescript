import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";

export const fetchUsers = createAsyncThunk(
  "users/fetch",
  async (payload: AbortSignal, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get("http://localhost:3005/users", { signal: payload });
      return data;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      } else if(error.name === "AbortError"){
        return "Request aborted!"
      }

      return "Something went wrong with your request.";
    }
  }
);

export const deleteUser = createAsyncThunk(
  "user/delete",
  async (payload: number, { rejectWithValue, getState, dispatch }) => {
    try {
      await axios.delete(`http://localhost:3005/users/${payload}`);
      return payload;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      }

      return "Something went wrong with your request.";
    }
  }
);

export const addUser = createAsyncThunk(
  "user/create",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const config = {
        method: "post",
        url: "http://localhost:3005/users",
        headers: { "Content-Type": "application/json" },
        data: { name: faker.name.fullName() },
      };

      const { data } = await axios(config);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      }

      return "Something went wrong with your request.";
    }
  }
);
