import './styles/index.scss';
import { AppRouter } from './providers/router';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from 'src/entities/User';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <Suspense fallback="">
      <AppRouter />
    </Suspense>
  );
};
export default App;
