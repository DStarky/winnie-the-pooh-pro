import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';
import { classNames } from 'src/shared/lib/classNames/classNames';
import { AppNavLink } from 'src/shared/ui/AppNavLink';
import { LangSwitcher } from 'src/widgets/LangSwitcher';
import { ThemeSwitcher } from 'src/widgets/ThemeSwitcher';

interface NavbarProps  {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <header className={classNames(styles.root, {}, [className])} data-testid='navbar'>
      <AppNavLink to="/">{t('Main Page')}</AppNavLink>
      <AppNavLink to="/about">{t('About Page')}</AppNavLink>
      <ThemeSwitcher />
      <LangSwitcher />
    </header>
  );
};
export default Navbar;
