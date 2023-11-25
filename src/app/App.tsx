import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import './styles/index.scss';
import { AboutPage } from 'src/pages/AboutPage';
import { MainPage } from 'src/pages/MainPage';

const App = () => {
	return (
		<Suspense fallback={<h1>Loading...</h1>}>
			<Routes>
				<Route
					path={'/about'}
					element={<AboutPage />}
				/>
				<Route
					path={'/'}
					element={<MainPage />}
				/>
			</Routes>
		</Suspense>
	);
};
export default App;
