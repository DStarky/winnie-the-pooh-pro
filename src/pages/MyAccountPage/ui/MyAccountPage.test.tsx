import { screen, waitFor } from '@testing-library/react';
import { customRender } from 'src/shared/lib/tests/customRender';
import MyAccountPage from './MyAccountPage';

describe('My account page test', () => {
  test('My account page render', async () => {
    customRender(<MyAccountPage />);
    await waitFor(() => screen.getByTestId('my-account-page'));
    expect(screen.getByTestId('my-account-page')).toBeInTheDocument();
  });
});
