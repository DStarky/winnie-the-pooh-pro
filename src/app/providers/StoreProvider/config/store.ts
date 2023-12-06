import { configureStore } from '@reduxjs/toolkit';
import type { StateSchema } from './StateSchema';
import { counterReducer } from 'src/entities/Counter';

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}

