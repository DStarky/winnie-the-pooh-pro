import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <div data-testid="main-page">
      <h1>{t('h1')}</h1>
      <div className="square" />
    </div>
  );
};
export default MainPage;
