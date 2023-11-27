import { ButtonHTMLAttributes } from 'react';
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

const Button: React.FC<ButtonProps> = props => {
	const { className, children, theme = ThemeButton.CLEAR, wide, ...otherProps } = props;

	return (
		<button
			className={classNames(styles.root, {}, [className, styles[theme], styles[`${wide ? 'wide' : ''}`]])}
			{...otherProps}>
			{children}
		</button>
	);
};

export default Button;
