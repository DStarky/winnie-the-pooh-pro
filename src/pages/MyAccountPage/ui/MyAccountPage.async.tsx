import { lazy } from 'react';

export const MyAccountPageAsync = lazy(() => import(/* webpackChunkName: "MyAccountPage" */ './MyAccountPage'));
``