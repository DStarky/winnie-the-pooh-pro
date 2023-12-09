import type { LoginSchema } from './../../types/loginSchema';
import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from '../getLoginState/getLoginState';

export const getLoginUsername = createSelector(getLoginState, (loginForm: LoginSchema) => loginForm.username);
