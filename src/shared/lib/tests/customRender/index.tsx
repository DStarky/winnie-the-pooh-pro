import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import type { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import Theme from 'src/app/providers/ThemeProvider';
import i18nForTests from 'src/shared/config/i18n/i18nForTests';

export const customRender = (component: ReactNode, initialRoute: string = '') =>
  render(
    <Theme>
      <MemoryRouter initialEntries={[initialRoute]}>
        <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
      </MemoryRouter>
    </Theme>,
  );
