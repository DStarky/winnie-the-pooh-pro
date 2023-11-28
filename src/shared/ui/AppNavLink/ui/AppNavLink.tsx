import type { LinkProps } from 'react-router-dom';
import styles from './AppNavLink.module.scss';
import { classNames } from 'src/shared/lib/classNames/classNames';
import { NavLink } from 'react-router-dom';

export enum AppNavLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

interface AppNavLinkProps extends LinkProps {
	className?: string;
	theme?: AppNavLinkTheme;
}

const AppNavLink: React.FC<AppNavLinkProps> = ({
	className,
	children,
	to,
	theme = AppNavLinkTheme.PRIMARY,
	...otherProps
}) => (
	<NavLink
		to={to}
		className={({ isActive }) =>
			`${classNames(styles.root, {}, [className, styles[theme]])} ${
				isActive ? styles['active'] : ''
			}`
		}
		{...otherProps}
	>
		{children}
	</NavLink>
);

export default AppNavLink;
