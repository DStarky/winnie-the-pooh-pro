import type { StateSchema } from 'src/app/providers/StoreProvider';
import type { DeepPartial } from 'src/shared/types/DeepPartial';
import { getLoginState } from './getLoginState';

describe('getLoginPassoword test', () => {

  test('get empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginState(state as StateSchema)).toEqual(undefined);
  });
  test('get login form state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'admin',
        password: '123'
      }
    };

    const expectedState = {
      username: 'admin',
      password: '123',
    };
    expect(getLoginState(state as StateSchema)).toEqual(expectedState);
  });
});
