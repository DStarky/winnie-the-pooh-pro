import { lazy } from 'react';

export const LoginFormAsync = lazy(() => import(/* webpackChunkName: "LoginForm" */ './LoginForm'));
