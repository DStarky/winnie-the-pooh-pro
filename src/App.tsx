import { Route, Routes } from 'react-router-dom';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { Suspense } from 'react';

const App = () => {
	return (
		<Suspense fallback={<h1>Loading...</h1>}>
			<Routes>
				<Route
					path={'/about'}
					element={<AboutPageAsync />}
				/>
				<Route
					path={'/'}
					element={<MainPageAsync />}
				/>
			</Routes>
		</Suspense>
	);
};
export default App;
