import { useTranslation } from 'react-i18next';
import { Counter } from 'src/entities/Counter';

const MainPage = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'mainPage' });

  return (
    <div data-testid="main-page">
      <h1>{t('title')}</h1>
      <Counter />
    </div>
  );
};
export default MainPage;
