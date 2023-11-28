import type { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';
import { classNames } from 'src/shared/lib/classNames/classNames';

export enum ThemeButton {
	CLEAR = 'clear',
	OUTLINE = 'outline',
	FILLED = 'filled',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeButton;
	wide?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	className,
	children,
	theme = ThemeButton.CLEAR,
	wide = false,
	...otherProps
}) => (
	<button
		type="button"
		className={classNames(styles.root, { [styles.wide]: wide }, [
			className,
			styles[theme],
		])}
		{...otherProps}
	>
		{children}
	</button>
);

export default Button;
