import { render, screen, waitFor } from '@testing-library/react';
import ThemeSwitcher from './ThemeSwitcher';
import Theme from 'src/app/providers/ThemeProvider';
import { renderWithTranslation } from 'src/shared/lib/tests/renderWithTranslation/renderWithTranslation';


describe('Theme Switcher component', () => {
  test('Theme Switcher render', () => {
    render(
      <Theme>
        <ThemeSwitcher />
      </Theme>,
    );
    expect(screen.getByTestId('theme-switcher')).toBeInTheDocument();
  });
  test('Theme Switcher text', async () => {
    renderWithTranslation(<ThemeSwitcher />);
    await waitFor(() => screen.getByTestId('theme-switcher'));
    screen.debug();
  });
});
