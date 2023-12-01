import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'mainPage' });

  return (
    <div data-testid="main-page">
      <h1>{t('title')}</h1>
      <div className="square" />
    </div>
  );
};
export default MainPage;
