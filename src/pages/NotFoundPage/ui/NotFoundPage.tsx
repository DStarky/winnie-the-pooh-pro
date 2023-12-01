import { useTranslation } from 'react-i18next';
import styles from './NotFoundPage.module.scss';
import { classNames } from 'src/shared/lib/classNames/classNames';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation('notfound');
  return (
    <div
      data-testid="not-found-page"
      className={classNames(styles.root, {}, [className])}
    >
      <h1 className={classNames(styles.heading, {}, [])}>{t('Page Not Found')}</h1>
    </div>
  );
};

export default NotFoundPage;
