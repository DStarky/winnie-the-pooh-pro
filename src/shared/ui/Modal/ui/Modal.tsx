import type { ReactNode } from 'react';
import styles from './Modal.module.scss';
import { classNames } from 'src/shared/lib/classNames/classNames';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const Modal = ({ className, children, onClose, isOpen }: ModalProps) => {
  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
  };

  const closeHandler = () => {
    if (onClose) {
      onClose();
    }
  };

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation(); 
  }

  return (
    <div className={classNames(styles.root, mods, [className])}>
      <div
        className={styles.overlay}
        onClick={closeHandler}
      >
        <div className={styles.content} onClick={onContentClick}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
