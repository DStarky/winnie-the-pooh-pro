import type { AnyAction, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import type { AxiosInstance } from 'axios';
import type { NavigateOptions, To } from 'react-router-dom';
import type { CounterSchema } from 'src/entities/Counter';
import type { ProfileSchema } from 'src/entities/Profile';
import type { UserSchema } from 'src/entities/User';
import type { LoginSchema } from 'src/features/AuthByUsername';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  // Подгружаемые редьюсеры
  profile?: ProfileSchema;
  loginForm?: LoginSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => StateSchema;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArgs {
  api: AxiosInstance;
  navigate: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArgs;
}