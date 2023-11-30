import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'src/shared/config/i18n/i18n';

import App from 'src/app/App';
import Theme from 'src/app/providers/ThemeProvider';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import { ErrorPage } from './widgets/ErrorPage';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <ErrorBoundary fallback={<ErrorPage />}>
      <Theme>
        <App />
      </Theme>
    </ErrorBoundary>
  </BrowserRouter>,
);
