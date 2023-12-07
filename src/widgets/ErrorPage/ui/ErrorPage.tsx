import { useTranslation } from 'react-i18next';
import styles from './ErrorPage.module.scss';
import { classNames } from 'src/shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'src/shared/ui/Button';

interface ErrorPageProps {
  className?: string;
}

const ErrorPage = ({ className }: ErrorPageProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div
      data-testid="error-page"
      className={classNames(styles.root, {}, [className])}
    >
      <h1>{t('Something went wrong')}</h1>
      <Button
        theme={ThemeButton.FILLED}
        onClick={reloadPage}
      >
        {t('Reload page')}
      </Button>
    </div>
  );
};

export default ErrorPage;
