import styles from './Navbar.module.scss';
import { classNames } from 'src/shared/lib/classNames/classNames';
import { AppNavLink } from 'src/shared/ui/AppNavLink';
import { LangSwitcher } from 'src/widgets/LangSwitcher';
import { ThemeSwitcher } from 'src/widgets/ThemeSwitcher';

interface NavbarProps {
	className?: string;
}

const Navbar = ({ className }: NavbarProps) => (
	<header className={classNames(styles.root, {}, [className])}>
		<AppNavLink to="/">Home</AppNavLink>
		<AppNavLink to="/about">About</AppNavLink>
		<ThemeSwitcher />
		<LangSwitcher />
	</header>
);
export default Navbar;
