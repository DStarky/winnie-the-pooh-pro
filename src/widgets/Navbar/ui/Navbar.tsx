import styles from './Navbar.module.scss';
import { classNames } from 'src/shared/lib/classNames/classNames';
import AppNavLink from 'src/shared/ui/AppNavLink/AppNavLink';
import { ThemeSwitcher } from 'src/shared/ui/ThemeSwitcher';

interface NavbarProps {
	className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
	return (
		<header className={classNames(styles.root, {}, [className])}>
			<AppNavLink to='/' >Home</AppNavLink>
			<AppNavLink to='/about'>About</AppNavLink>
			<ThemeSwitcher />
		</header>
	);
};
export default Navbar;
