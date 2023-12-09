import type { StateSchema } from 'src/app/providers/StoreProvider';
import type { DeepPartial } from 'src/shared/types/DeepPartial';
import { getUserAuthData } from './getUserAuthData';

describe('getLoginPassoword test', () => {
  test('get password', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          id: '123',
          username: 'testUser',
        },
      },
    };
    expect(getUserAuthData(state as StateSchema)).toEqual({
      id: '123',
      username: 'testUser',
    });
  });
});
