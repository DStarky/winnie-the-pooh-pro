import type { StateSchema } from 'src/app/providers/StoreProvider';

export const getLoginError = (state: StateSchema) => state?.loginForm?.error || '';
