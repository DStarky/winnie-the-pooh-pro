import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';
import { classNames } from 'src/shared/lib/classNames/classNames';
import { AppNavLink } from 'src/shared/ui/AppNavLink';
import { LangSwitcher } from 'src/widgets/LangSwitcher';
import { ThemeSwitcher } from 'src/widgets/ThemeSwitcher';
import { UserButton } from 'src/widgets/UserButton';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'navbar' });

  return (
    <header
      className={classNames(styles.root, {}, [className])}
      data-testid="navbar"
    >
      <AppNavLink
        data-testid="main-link"
        to="/"
      >
        {t('Main')}
      </AppNavLink>
      <AppNavLink
        data-testid="about-link"
        to="/about"
      >
        {t('About us')}
      </AppNavLink>
      <UserButton />
      <ThemeSwitcher />
      <LangSwitcher />
    </header>
  );
};
export default Navbar;
