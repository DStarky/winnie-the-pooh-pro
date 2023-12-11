import { useDispatch, useSelector, useStore } from 'react-redux';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LoginForm.module.scss';

import type { DispatchType } from 'src/app/providers/StoreProvider/ui/StoreProvider';
import { loginActions, loginReducer } from '../../../model/slice/loginSlice';
import { getLoginUsername, getLoginPassword, getLoginError, getLoginLoading, loginByUsername } from '../../../index';

import { Button, ThemeButton } from 'src/shared/ui/Button';
import { classNames } from 'src/shared/lib/classNames/classNames';
import { Input } from 'src/shared/ui/Input';
import { Text, ThemeText } from 'src/shared/ui/Text';
import { Title } from 'src/shared/ui/Title';
import type { ReduxStoreWithManager } from 'src/app/providers/StoreProvider';

interface LoginFormProps {
  className?: string;
}

const LoginForm = memo(function LoginForm({ className }: LoginFormProps) {
  const { t } = useTranslation('translation', { keyPrefix: 'auth' });
  const dispatch = useDispatch<DispatchType>();

  const store = useStore() as ReduxStoreWithManager;
  const loginUsername = useSelector(getLoginUsername);
  const loginPassword = useSelector(getLoginPassword);
  const loginError = useSelector(getLoginError);
  const loginLoading = useSelector(getLoginLoading);

  useEffect(() => {
    store.reducerManager.add('loginForm', loginReducer);

    return () => {
      store.reducerManager.remove('loginForm');
    };
    //eslint-disable-next-line
  }, []);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      dispatch(loginByUsername({ username: loginUsername, password: loginPassword }));
    },
    [dispatch, loginUsername, loginPassword],
  );

  return (
    <form
      className={classNames(styles.root, {}, [className])}
      data-testid="login-form"
      onSubmit={onSubmit}
    >
      <Title size="h4">{t('Log in')}</Title>
      {loginError ? (
        <Text
          size="m"
          theme={ThemeText.ERROR}
        >
          {loginError}
        </Text>
      ) : null}
      <Input
        placeholder={t('Username')}
        onChange={onChangeUsername}
        value={loginUsername}
      />
      <Input
        placeholder={t('Password')}
        type="password"
        onChange={onChangePassword}
        value={loginPassword}
      />
      <Button
        theme={ThemeButton.MODAL_FILLED}
        type="submit"
        disabled={loginLoading}
      >
        {t('Log in')}
      </Button>
    </form>
  );
});

export default LoginForm;
