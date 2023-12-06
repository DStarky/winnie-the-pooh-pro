import { counterReducer, counterActions } from './counterSlice';
import type { CounterSchema } from '../types/CounterSchema';
describe('Counter test', () => {
  test('decrement', () => {
    const state: CounterSchema = {
      value: 10
    };
    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
  });
  test('empty state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
  });
});