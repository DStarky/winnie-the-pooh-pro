import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'src/shared/ui/Button';
import Modal from 'src/shared/ui/Modal/ui/Modal';

const MainPage = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'mainPage' });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div data-testid="main-page">
      <h1>{t('title')}</h1>
      <Button
        theme={ThemeButton.FILLED}
        onClick={() => setIsOpen(true)}
      >
        Modal toggle
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};
export default MainPage;
