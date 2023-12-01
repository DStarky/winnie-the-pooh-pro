import { screen, waitFor } from '@testing-library/react';
import { customRender } from 'src/shared/lib/tests/customRender';
import MainPage from './MainPage';

describe('Main page test', () => {
  test('Main page render', async () => {
    customRender(<MainPage />);
    await waitFor(() => screen.getByTestId('main-page'));
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
    screen.debug();
  });
});
