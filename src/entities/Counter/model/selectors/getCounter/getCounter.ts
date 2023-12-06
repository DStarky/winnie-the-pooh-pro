import type { StateSchema } from 'src/app/providers/StoreProvider';

export const getCounter = (state: StateSchema) => state.counter;
