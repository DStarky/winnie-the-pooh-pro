import { render } from '@testing-library/react';
import type { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import Theme from 'src/app/providers/ThemeProvider';
import i18nForTests from 'src/shared/config/i18n/i18nForTests';

export function renderWithTranslation(component: ReactNode) {
  return render(
    <Theme>
      <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
    </Theme>,
  );
}
