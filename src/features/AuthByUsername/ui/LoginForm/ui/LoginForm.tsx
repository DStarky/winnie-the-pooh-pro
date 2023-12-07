import { useTranslation } from 'react-i18next';
import styles from './LoginForm.module.scss';
import { classNames } from 'src/shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'src/shared/ui/Button';
import { Input } from 'src/shared/ui/Input';

interface LoginFormProps {
  className?: string;
}

const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'auth' });

  return (
    <form
      className={classNames(styles.root, {}, [className])}
      data-testid="login-form"
    >
      <Input placeholder={t('Username')} />
      <Input
        placeholder={t('Password')}
        type="password"
      />
      <Button theme={ThemeButton.MODAL_FILLED}>{t('Log in')}</Button>
    </form>
  );
};

export default LoginForm;
