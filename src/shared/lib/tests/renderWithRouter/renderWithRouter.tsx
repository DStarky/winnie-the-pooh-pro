import { render } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import Theme from 'src/app/providers/ThemeProvider';

export const renderWithRouter = (component: ReactNode, initialRoute: string = '') =>
  render(
    <Theme>
      <MemoryRouter initialEntries={[initialRoute]}>{component}</MemoryRouter>
    </Theme>,
  );
