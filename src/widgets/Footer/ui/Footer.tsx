import styles from './Footer.module.scss';
import { classNames } from 'src/shared/lib/classNames/classNames';

interface FooterProps {
	className?: string;
}

const Footer = ({ className }: FooterProps) => (
  <div className={classNames(styles.root, {}, [className])} />
);

export default Footer;
