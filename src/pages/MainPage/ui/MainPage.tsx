import { useTranslation } from 'react-i18next';
import Modal from 'src/shared/ui/Modal/ui/Modal';

const MainPage = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'mainPage' });

  return (
    <div data-testid="main-page">
      <h1>{t('title')}</h1>
      <Modal />
    </div>
  );
};
export default MainPage;
