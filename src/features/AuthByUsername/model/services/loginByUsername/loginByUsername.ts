import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { LoginSchema } from '../../types/loginSchema';
import type { User } from 'src/entities/User';

type LoginByUsernameProps = Pick<LoginSchema, 'username' | 'password'>;

// First, create the thunk
export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData);
      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);
