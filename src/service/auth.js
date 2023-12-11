// src/redux/usersSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://localhost:8000';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get(`${apiUrl}/getUsers`);
  return response.data;
});

export const addUser = createAsyncThunk('users/addUser', async (userData) => {
  const response = await axios.post(`${apiUrl}/addUser`, userData);
  return response.data;
});

export const updateUser = createAsyncThunk('users/updateUser', async (userData) => {
  const response = await axios.put(`${apiUrl}/updateUser`, userData);
  return response.data;
});

export const deleteUser = createAsyncThunk('users/deleteUser', async (userId) => {
  const response = await axios.delete(`${apiUrl}/deleteUser/${userId}`);
  return response.data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState: { users: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const updatedUser = action.payload;
        state.users = state.users.map((user) =>
          user._id === updatedUser._id ? updatedUser : user
        );
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user._id !== action.payload._id);
      });
  },
});

export default usersSlice.reducer;
