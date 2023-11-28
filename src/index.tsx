import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import i18n from 'src/shared/config/i18n/i18n';

import App from 'src/app/App';
import Theme from 'src/app/providers/ThemeProvider';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<BrowserRouter>
		<Theme>
			<App />
		</Theme>
	</BrowserRouter>,
);
