/* eslint-disable i18next/no-literal-string */
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import type { StateSchema } from 'src/app/providers/StoreProvider/config/StateSchema';

const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector((state: StateSchema) => state.counter.value);

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div data-testid="counter">
      <h1 data-testid="counter-title">{counterValue}</h1>
      <button
        data-testid="increment-btn"
        type="button"
        onClick={increment}
      >
        increment
      </button>
      <button
        data-testid="decrement-btn"
        type="button"
        onClick={decrement}
      >
        decrement
      </button>
    </div>
  );
};
export default Counter;
