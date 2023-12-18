import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'src/shared/config/i18n/i18n';

import App from 'src/app/App';
import Theme from 'src/app/providers/ThemeProvider';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import { ErrorPage } from './widgets/ErrorPage';
import { StoreProvider } from './app/providers/StoreProvider';

const container = document.getElementById('root') as HTMLElement; 
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary fallback={<ErrorPage />}>
        <Theme>
          <App />
        </Theme>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
);
