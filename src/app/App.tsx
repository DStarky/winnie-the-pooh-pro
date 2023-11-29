import './styles/index.scss';
import { AppRouter } from './providers/router';
import { Suspense } from 'react';

const App = () => (
  <Suspense fallback="">
    <AppRouter />
  </Suspense>
);
export default App;
