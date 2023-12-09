// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

import type { Preview } from '@storybook/react';
import Theme from '../../src/app/providers/ThemeProvider';
import StoreProvider from '../../src/app/providers/StoreProvider/ui/StoreProvider';
import '../../src/app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';

const myThemes = {
  light: 'light',
  dark: 'dark',
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        items: ['light', 'dark'],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = myThemes[context.globals.theme];
      return (
        <StoreProvider>
          <BrowserRouter>
            <Theme>
              <body data-theme={theme}>
                <div style={{ padding: '3rem' }}>
                  <Story />
                </div>
              </body>
            </Theme>
          </BrowserRouter>
        </StoreProvider>
      );
    },
  ],
};

export default preview;
