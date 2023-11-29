import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'src/app/layout';
import { routeConfig } from 'src/shared/config/routeConfig/routeConfig';
import { PageLoader } from 'src/shared/ui/PageLoader';

const AppRouter = () => (
  <Routes>
    <Route
      path="/"
      element={<Layout />}
    >
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={<Suspense fallback={<PageLoader />}>{element}</Suspense>}
        />
      ))}
    </Route>
  </Routes>
);
export default AppRouter;
