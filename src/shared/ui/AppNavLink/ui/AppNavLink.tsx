import type { LinkProps } from 'react-router-dom';
import styles from './AppNavLink.module.scss';
import { classNames } from 'src/shared/lib/classNames/classNames';
import { NavLink } from 'react-router-dom';
import { memo } from 'react';

export enum AppNavLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppNavLinkProps extends LinkProps {
  className?: string;
  theme?: AppNavLinkTheme;
  forcedActive?: boolean;
}

const AppNavLink: React.FC<AppNavLinkProps> = memo(function AppNavLink({
  className,
  forcedActive,
  children,
  to,
  theme = AppNavLinkTheme.PRIMARY,
  ...otherProps
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${classNames(styles.root, { [styles['active']]: forcedActive }, [className, styles[theme]])} ${
          isActive ? styles['active'] : ''
        }`
      }
      {...otherProps}
    >
      {children}
    </NavLink>
  );
});

export default AppNavLink;
