import { screen } from '@testing-library/react';
import Theme from 'src/app/providers/ThemeProvider';
import App from 'src/app/App';
import { renderWithRouter } from 'src/shared/lib/tests/renderWithRouter/renderWithRouter';

describe('Not Found Page component', () => {
  test('Not Found Page render', async () => {
    renderWithRouter(<App />, '/no-exist-page');
    screen.debug();
    const errorPage = await screen.findByTestId('not-found-page');
    expect(errorPage).toBeInTheDocument();
  });
});
