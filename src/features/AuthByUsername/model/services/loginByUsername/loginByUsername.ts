import { createAsyncThunk } from '@reduxjs/toolkit';

// First, create the thunk
const loginByUsername = createAsyncThunk('login/loginByUsername', async (userId: number, thunkAPI) => {
  const response = await userAPI.fetchById(userId);
  return response.data;
});
