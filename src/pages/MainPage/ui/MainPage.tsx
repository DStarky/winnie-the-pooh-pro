import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <>
      <h1>{t('h1')}</h1>
      <div className="square" />
    </>
  );
};
export default MainPage;
