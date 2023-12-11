import type { StateSchema } from 'src/app/providers/StoreProvider';

export const getLoginUsername = (state: StateSchema) => state?.loginForm?.username || '';
