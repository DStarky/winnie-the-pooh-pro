import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'src/app/layout';
import { routeConfig } from 'src/shared/config/routeConfig/routeConfig';

const AppRouter = () => (
	<Suspense fallback={<h1>Loading...</h1>}>
		<Routes>
			<Route path='/' element={<Layout />}>
				{Object.values(routeConfig).map(({ element, path }) => (
					<Route
						key={path}
						path={path}
						element={element}
					/>
				))}
			</Route>
		</Routes>
	</Suspense>
);
export default AppRouter;
