import type { RouteProps } from 'react-router-dom';
import { MainPage } from 'src/pages/MainPage';
import { AboutPage } from 'src/pages/AboutPage';
import { NotFoundPage } from 'src/pages/NotFoundPage';
import { MyAccountPage } from 'src/pages/MyAccountPage';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
  MY_ACCOUNT = 'my_account',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.MY_ACCOUNT]: '/my-account',
  // Держать последним
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
    index: true,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.MY_ACCOUNT]: {
    path: RoutePath.my_account,
    element: <MyAccountPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
