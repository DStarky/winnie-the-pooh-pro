import type { StateSchema } from 'src/app/providers/StoreProvider';

export const getLoginLoading = (state: StateSchema) => state?.loginForm?.isLoading || false;
