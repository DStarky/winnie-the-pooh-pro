import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { loginActions } from 'src/features/AuthByUsername/model/slice/loginSlice';
import styles from './LoginForm.module.scss';

import { classNames } from 'src/shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'src/shared/ui/Button';
import { Input } from 'src/shared/ui/Input';
import { getLoginUsername } from 'src/features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from 'src/features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from 'src/features/AuthByUsername/model/selectors/getLoginError/getLoginError';
import { getLoginLoading } from 'src/features/AuthByUsername/model/selectors/getLoginLoading/getLoginLoading';
import { loginByUsername } from 'src/features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import type { DispatchType } from 'src/app/providers/StoreProvider/ui/StoreProvider';

interface LoginFormProps {
  className?: string;
}

const LoginForm = memo(function LoginForm({ className }: LoginFormProps) {
  const { t } = useTranslation('translation', { keyPrefix: 'auth' });
  const dispatch = useDispatch<DispatchType>();
  const loginUsername = useSelector(getLoginUsername);
  const loginPassword = useSelector(getLoginPassword);
  const loginError = useSelector(getLoginError);
  const loginLoading = useSelector(getLoginLoading);

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
      <div>{loginError ? <p style={{ color: 'red' }}>{loginError}</p> : null}</div>
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
