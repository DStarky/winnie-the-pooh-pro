import type { ReducersMapObject } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import type { StateSchema } from './StateSchema';
import { counterReducer } from 'src/entities/Counter';
import { userReducer } from 'src/entities/User';
import { createReducerManager } from './reducerManager';
import { $api } from 'src/shared/api/api';
import type { NavigateOptions, To } from 'react-router-dom';

export function createReduxStore(initialState?: StateSchema, navigate?: (to: To, options?: NavigateOptions) => void) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
            navigate,
          },
        },
      }),
  });

  // eslint-gisable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
