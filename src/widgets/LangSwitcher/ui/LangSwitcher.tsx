import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, ThemeButton } from 'src/shared/ui/Button';

const LangSwitcher = memo(function LangSwitcher() {
  const { t, i18n } = useTranslation('translation', { keyPrefix: 'buttons' });

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <Button
      onClick={toggleLang}
      theme={ThemeButton.OUTLINE}
    >
      {t('Change language')}
    </Button>
  );
});

export default LangSwitcher;
