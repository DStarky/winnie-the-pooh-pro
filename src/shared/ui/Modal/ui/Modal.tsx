import type { ReactNode } from 'react';
import styles from './Modal.module.scss';
import { classNames } from 'src/shared/lib/classNames/classNames';

interface ModalProps {
  className?: string;
  children?: ReactNode;
}

const Modal = ({ className, children }: ModalProps) => (
  <div className={classNames(styles.root, {}, [className])}>
    <div className={styles.overlay}>
      <div className={styles.content}>{children}</div>
    </div>
  </div>
);

export default Modal;
 