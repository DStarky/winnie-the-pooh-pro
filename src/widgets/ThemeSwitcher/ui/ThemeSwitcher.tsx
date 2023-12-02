import { useTranslation } from 'react-i18next';
import { useThemeToggle } from 'src/app/providers/ThemeProvider';
import { classNames } from 'src/shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'src/shared/ui/Button';
import Icon from 'src/shared/assets/icons/cloud.svg';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const toggleTheme = useThemeToggle();
  const { t } = useTranslation('translation', { keyPrefix: 'buttons' });

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
      theme={ThemeButton.FILLED}
      data-testid="theme-switcher"
      // wide
    >
      {t('themeSwitcher')}
      <Icon style={{ width: '24px', height: '24px', marginLeft: '12px' }} strokeWidth={1} />
    </Button>
  );
};

export default ThemeSwitcher;
