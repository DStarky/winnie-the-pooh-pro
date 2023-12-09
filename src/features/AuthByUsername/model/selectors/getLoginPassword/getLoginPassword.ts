import type { LoginSchema } from './../../types/loginSchema';
import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from '../getLoginState/getLoginState';

export const getLoginPassword = createSelector(getLoginState, (loginForm: LoginSchema) => loginForm.password);
