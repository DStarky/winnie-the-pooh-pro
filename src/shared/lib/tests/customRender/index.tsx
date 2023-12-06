import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import type { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import Theme from 'src/app/providers/ThemeProvider';
import i18nForTests from 'src/shared/config/i18n/i18nForTests';
import type { StateSchema } from 'src/app/providers/StoreProvider';
import { StoreProvider } from 'src/app/providers/StoreProvider';
import type { DeepPartial } from 'src/shared/types/DeepPartial';

export interface customRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

export const customRender = (component: ReactNode, options: customRenderOptions = {}) => {
  const { route = '/', initialState } = options;

  return render(
    <StoreProvider initialState={initialState}>
      <Theme>
        <MemoryRouter initialEntries={[route]}>
          <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
        </MemoryRouter>
      </Theme>
    </StoreProvider>,
  );
};
