import { useTranslation } from 'react-i18next';
import { Counter } from 'src/entities/Counter';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div data-testid="main-page">
      <h1>{t('navbar.Main')}</h1>
      <Counter />
    </div>
  );
};
export default MainPage;
