import type { StateSchema } from 'src/app/providers/StoreProvider';
import type { DeepPartial } from 'src/shared/types/DeepPartial';
import { getCounterValue } from './getCounterValue';
describe('getCounterValue test', () => {
  test('', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10,
      },
    };
    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });
});
