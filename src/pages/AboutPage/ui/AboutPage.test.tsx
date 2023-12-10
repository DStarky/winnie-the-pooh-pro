import { screen, waitFor } from '@testing-library/react';
import { customRender } from 'src/shared/lib/tests/customRender';
import AboutPage from './AboutPage';

describe('Abut page test', () => {
  test('Abut page render', async () => {
    customRender(<AboutPage />);
    await waitFor(() => screen.getByTestId('about-page'));
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });
});
