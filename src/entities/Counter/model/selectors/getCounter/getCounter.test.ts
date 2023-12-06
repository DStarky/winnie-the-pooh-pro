import type { StateSchema } from 'src/app/providers/StoreProvider';
import { getCounter } from './getCounter';
import type { DeepPartial } from 'src/shared/types/DeepPartial';

describe('getCounter selector', () => {
  test('return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });
});
