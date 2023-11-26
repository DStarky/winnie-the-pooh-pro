import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

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
