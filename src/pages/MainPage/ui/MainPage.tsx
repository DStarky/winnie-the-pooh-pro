import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'src/shared/ui/Button';
import Modal from 'src/shared/ui/Modal/ui/Modal';
import ModalWithPortal from 'src/shared/ui/ModalWithPortal/ui/ModalWithPortal';

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
      <ModalWithPortal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quas earum ipsa commodi laboriosam labore optio
        pariatur, facere in vero nobis eum at mollitia a dolorum rem sunt tenetur libero.
      </ModalWithPortal>
    </div>
  );
};
export default MainPage;
