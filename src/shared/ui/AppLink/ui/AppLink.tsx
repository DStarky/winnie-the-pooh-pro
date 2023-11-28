import type { LinkProps } from 'react-router-dom';
import styles from './AppLink.module.scss';
import { classNames } from 'src/shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
	className?: string;
	theme?: AppLinkTheme;
}

const AppLink: React.FC<AppLinkProps> = props => {
	const { className, children, to, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;

	return (
		<Link
			to={to}
			className={classNames(styles.root, {}, [className, styles[theme]])}
			{...otherProps}>
			{children}
		</Link>
	);
};

export default AppLink;
