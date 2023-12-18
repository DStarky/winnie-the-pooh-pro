import { createAsyncThunk } from '@reduxjs/toolkit';
import type { LoginSchema } from '../../types/loginSchema';
import { userActions, type User } from 'src/entities/User';
import { USER_LOCALSTORAGE_KEY } from 'src/shared/const/localStorage';
import type { ThunkConfig } from 'src/app/providers/StoreProvider';
import axios from 'axios';

type LoginByUsernameProps = Pick<LoginSchema, 'username' | 'password'>;

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.post<User>('/login', authData);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));

      extra.navigate('/about');
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error) {
        return rejectWithValue(error.response?.data.message || 'error');
      } else {
        throw new Error('Ошибка полученияд анных');
      }
    }
  },
);
