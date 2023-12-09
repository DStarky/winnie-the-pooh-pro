import type { StateSchema } from 'src/app/providers/StoreProvider';
import type { DeepPartial } from 'src/shared/types/DeepPartial';
import { getLoginLoading } from './getLoginLoading';

describe('getLoginLoading test', () => {
  test('get isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: false,
      },
    };
    expect(getLoginLoading(state as StateSchema)).toEqual(false);
  });
});
