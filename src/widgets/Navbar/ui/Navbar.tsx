import styles from './Navbar.module.scss';
import { classNames } from 'src/shared/lib/classNames/classNames';
import AppNavLink from 'src/shared/ui/AppNavLink/AppNavLink';

interface NavbarProps {
	className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
	return (
		<header className={classNames(styles.root, {}, [className])}>
			<AppNavLink to='/' >Home</AppNavLink>
			<AppNavLink to='/about'>About</AppNavLink>
		</header>
	);
};
export default Navbar;
