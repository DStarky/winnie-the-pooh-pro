import styles from './Title.module.scss';
import { classNames } from 'src/shared/lib/classNames/classNames';

export enum ThemeTitle {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export type TitleSizes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

interface TitleProps {
  className?: string;
  children?: string;
  size?: TitleSizes;
  theme?: ThemeTitle;
}

const Title = (props: TitleProps) => {
  const { className, children, size: Tag = 'h3', theme = ThemeTitle.PRIMARY } = props;
  return (
    <div className={classNames(styles.root, {}, [className, styles[theme]])}>
      <Tag>{children}</Tag>
    </div>
  );
};

export default Title;
