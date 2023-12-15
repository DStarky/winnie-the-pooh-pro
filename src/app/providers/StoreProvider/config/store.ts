import type { ReducersMapObject } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import type { StateSchema } from './StateSchema';
import { counterReducer } from 'src/entities/Counter';
import { userReducer } from 'src/entities/User';
import { createReducerManager } from './reducerManager';

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
