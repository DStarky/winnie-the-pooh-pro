import type { StateSchema } from 'src/app/providers/StoreProvider';
import type { DeepPartial } from 'src/shared/types/DeepPartial';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername test', () => {
  test('get username', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'admin',
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('admin');
  });
  test('get using empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
