import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { LoginSchema } from '../../types/loginSchema';
import { userActions, type User } from 'src/entities/User';
import { USER_LOCALSTORAGE_KEY } from 'src/shared/const/localStorage';

type LoginByUsernameProps = Pick<LoginSchema, 'username' | 'password'>;

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData);
      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message || 'error');
    }
  },
);
