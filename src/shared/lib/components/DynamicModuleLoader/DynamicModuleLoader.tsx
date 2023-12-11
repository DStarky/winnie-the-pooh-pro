import type { Reducer } from '@reduxjs/toolkit';
import { useEffect, type ReactNode } from 'react';
import { useDispatch, useStore } from 'react-redux';
import type { ReduxStoreWithManager } from 'src/app/providers/StoreProvider';
import type { StateSchemaKey } from 'src/app/providers/StoreProvider/config/StateSchema';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
  children?: ReactNode;
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
  const { children, reducers, removeAfterUnmount = true } = props;
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    //eslint-disable-next-line
  }, []);

  return <>{children}</>;
};
export default DynamicModuleLoader;
