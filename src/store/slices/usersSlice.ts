import { createSlice } from "@reduxjs/toolkit";
import { addUser, deleteUser, fetchUsers, RootState } from "..";

interface User {
  id: number;
  name: string;
}

interface UserState {
  isLoading: boolean,
  isCreating: boolean,
  error: string;
  users: User[];
}

const initialState: UserState = {
  isLoading: false,
  isCreating: false,
  error: "",
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
      state.error = "";
    });

    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
      state.users = [];
    });

    builder.addCase(deleteUser.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    });

    builder.addCase(deleteUser.rejected, (state, action) => {
      state.error = action.payload as string;
    });

    builder.addCase(addUser.pending, (state, action) => {
      state.isCreating = true;
    });

    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isCreating = false;
      state.users.push(action.payload);
    });

    builder.addCase(addUser.rejected, (state, action) => {
      state.isCreating = false;
      state.error = action.payload as string;
    });
  },
});

export const usersReducer = usersSlice.reducer;
export const selectUsers = (state: RootState) => state.users;
export type { User };
