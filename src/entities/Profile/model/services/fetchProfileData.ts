import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from 'src/app/providers/StoreProvider';
import type { Profile } from '../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.get<Profile>('/profile');

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error) {
        return rejectWithValue(error.response?.data.message || 'error');
      } else {
        throw new Error('Ошибка получения данных');
      }
    }
  },
);
