import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from 'src/app/App';
import { customRender } from 'src/shared/lib/tests/customRender';

describe('Not Found Page component', () => {
  test('Not Found Page render', async () => {
    customRender(<App />, '/not-exist-page');
    const errorPage = await screen.findByTestId('not-found-page');
    expect(errorPage).toBeInTheDocument();
  });

  test('About link click', async () => {
    customRender(<App />, '/not-exist-page');

    await waitFor(() => screen.getByTestId('not-found-page'));
    const aboutLink = screen.getByTestId('about-link');
    userEvent.click(aboutLink);
    await waitFor(() => {
      const aboutPage = screen.getByTestId('about-page');
      expect(aboutPage).toBeInTheDocument();
    });
  });
});
