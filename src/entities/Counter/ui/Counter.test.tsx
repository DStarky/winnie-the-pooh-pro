import { screen, waitFor } from '@testing-library/react';
import { customRender } from 'src/shared/lib/tests/customRender';
import Counter from './Counter';
import userEvent from '@testing-library/user-event';

describe('Counter test', () => {
  test('Counter render', async () => {
    customRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    await waitFor(() => screen.getByTestId('counter'));
    expect(screen.getByTestId('counter')).toBeInTheDocument();
    expect(screen.getByTestId('counter-title')).toHaveTextContent('10');
  });
  test('Counter increment click', async () => {
    customRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    await waitFor(() => screen.getByTestId('counter'));
    await waitFor(() => userEvent.click(screen.getByTestId('increment-btn')));
    expect(screen.getByTestId('counter-title')).toHaveTextContent('11');
  });
  test('Counter decrement click', async () => {
    customRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    await waitFor(() => screen.getByTestId('counter'));
    await waitFor(() => userEvent.click(screen.getByTestId('decrement-btn')));
    expect(screen.getByTestId('counter-title')).toHaveTextContent('9');
  });
});
