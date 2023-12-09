import type { StateSchema } from 'src/app/providers/StoreProvider';
import type { DeepPartial } from 'src/shared/types/DeepPartial';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassoword test', () => {
  test('get password', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: 'qwerty',
      },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('qwerty');
  });
});
