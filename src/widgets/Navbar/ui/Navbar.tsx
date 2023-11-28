import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';
import { classNames } from 'src/shared/lib/classNames/classNames';
import { AppNavLink } from 'src/shared/ui/AppNavLink';
import { Button, ThemeButton } from 'src/shared/ui/Button';
import { ThemeSwitcher } from 'src/shared/ui/ThemeSwitcher';

interface NavbarProps {
	className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
	const { t, i18n } = useTranslation();

	const toggleLang = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};

	return (
		<header className={classNames(styles.root, {}, [className])}>
			<AppNavLink to='/'>Home</AppNavLink>
			<AppNavLink to='/about'>About</AppNavLink>
			<ThemeSwitcher />
			<Button
				onClick={toggleLang}
				theme={ThemeButton.OUTLINE}>
				{t('Сменить язык')}
			</Button>
		</header>
	);
};
export default Navbar;
