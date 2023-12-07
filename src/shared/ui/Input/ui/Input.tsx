import { memo, type InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';
import { classNames } from 'src/shared/lib/classNames/classNames';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const Input = memo(function Input(props: InputProps) {
  const { className, onChange, value, type = 'text', placeholder, ...otherProps } = props;

  const mods: Record<string, boolean> = {};

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <input data-testid="input"
      value={value}
      onChange={onChangeHandler}
      type={type}
      placeholder={placeholder}
      className={classNames(styles.root, mods, [className])}
      {...otherProps}
    />
  );
});

export default Input;
