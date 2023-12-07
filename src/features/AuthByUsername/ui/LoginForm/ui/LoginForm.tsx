import { useTranslation } from 'react-i18next';
import styles from './LoginForm.module.scss';
import { classNames } from 'src/shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'src/shared/ui/Button';

interface LoginFormProps {
  className?: string;
}

const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'auth' });

  return (
    <form className={classNames(styles.root, {}, [className])}>
      <input type="text" />
      <input type="text" />
      <Button theme={ThemeButton.MODAL_FILLED}>{t('authButton')}</Button>
    </form>
  );
};

export default LoginForm;
