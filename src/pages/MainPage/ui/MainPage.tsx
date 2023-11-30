import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'src/shared/ui/Button';

const MainPage = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation('main');

  const throwError = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error('Произошла чудовищная ошибка');
    }
  }, [error]);

  return (
    <>
      <h1>{t('h1')}</h1>
      <div className="square" />
      <Button
        theme={ThemeButton.OUTLINE}
        onClick={throwError}
      >
        {t('ErrorBoundary')}
      </Button>
    </>
  );
};
export default MainPage;
