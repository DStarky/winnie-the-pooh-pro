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

const AppLink: React.FC<AppLinkProps> = ({ className, children, to, theme = AppLinkTheme.PRIMARY, ...otherProps }) => (
  <Link
    to={to}
    className={classNames('', {}, [className, styles[theme]])}
    {...otherProps}
  >
    {children}
  </Link>
);

export default AppLink;
