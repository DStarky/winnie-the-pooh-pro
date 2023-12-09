import styles from './Text.module.scss';
import { classNames } from 'src/shared/lib/classNames/classNames';

export enum ThemeText {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export type TextSizes = 'xs' | 's' | 'm' | 'l';

interface TextProps {
  className?: string;
  children?: string;
  size?: TextSizes;
  theme?: ThemeText;
}

const Text = (props: TextProps) => {
  const { children, className, size = 'xs', theme = ThemeText.PRIMARY } = props;

  return (
    <div
      className={classNames(styles.root, {}, [className])}
      data-testid="text-component"
    >
      {children ? <p className={classNames(styles.text, {}, [styles[size], styles[theme]])}>{children}</p> : null}
    </div>
  );
};

export default Text;
