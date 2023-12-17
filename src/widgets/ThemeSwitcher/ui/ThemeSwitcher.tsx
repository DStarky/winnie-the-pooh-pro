import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useThemeToggle } from 'src/app/providers/ThemeProvider';
import { Button, ThemeButton } from 'src/shared/ui/Button';

const ThemeSwitcher = memo(function ThemeSwitcher() {
  const toggleTheme = useThemeToggle();
  const { t } = useTranslation('translation', { keyPrefix: 'buttons' });

  return (
    <Button
      onClick={toggleTheme}
      theme={ThemeButton.FILLED}
      data-testid="theme-switcher"
      // wide
    >
      {t('Change theme')}
    </Button>
  );
});

export default ThemeSwitcher;
