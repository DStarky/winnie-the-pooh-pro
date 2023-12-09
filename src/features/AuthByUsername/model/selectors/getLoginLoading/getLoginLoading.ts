import type { LoginSchema } from './../../types/loginSchema';
import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from '../getLoginState/getLoginState';

export const getLoginLoading = createSelector(getLoginState, (loginForm: LoginSchema) => loginForm.isLoading);
