import type { StateSchema } from 'src/app/providers/StoreProvider';
import type { DeepPartial } from 'src/shared/types/DeepPartial';
import { getLoginError } from './getLoginError';

describe('getLoginError test', () => {
  test('get error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'ERROR',
      },
    };
    expect(getLoginError(state as StateSchema)).toEqual('ERROR');
  });
  test('without error', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginError(state as StateSchema)).toEqual('');
  });
});
