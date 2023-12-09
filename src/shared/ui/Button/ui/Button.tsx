import type { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';
import { classNames } from 'src/shared/lib/classNames/classNames';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  FILLED = 'filled',
  MODAL_FILLED = 'modal-filled',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  wide?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  disabled = false,
  theme = ThemeButton.CLEAR,
  wide = false,
  ...otherProps
}) => {
  const mods: Record<string, boolean> = {
    [styles.wide]: wide,
    [styles.disabled]: disabled,
  };

  return (
    <button
      type="button"
      className={classNames(styles.root, mods, [className, styles[theme]])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;