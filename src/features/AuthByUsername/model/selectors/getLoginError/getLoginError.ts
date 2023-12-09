import type { LoginSchema } from './../../types/loginSchema';
import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from '../getLoginState/getLoginState';

export const getLoginError = createSelector(getLoginState, (loginForm: LoginSchema) => loginForm.error);
