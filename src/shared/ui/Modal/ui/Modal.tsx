import { useEffect, type ReactNode, useCallback, memo, useState } from 'react';
import styles from './Modal.module.scss';
import { classNames } from 'src/shared/lib/classNames/classNames';
import { motion } from 'framer-motion';

export interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  withoutInitial?: boolean;
  lazy?: boolean;
}

const Modal = memo(function Modal(props: ModalProps) {
  const { className, children, onClose, isOpen, withoutInitial, lazy } = props;

  const [isMounted, setIsMounted] = useState(false);

  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    },
    [closeHandler],
  );

  useEffect(() => {
    if (isOpen) setIsMounted(true);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose, onKeyDown]);

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <motion.div
      data-testid="modal"
      initial={withoutInitial ? false : { opacity: 0 }}
      animate={{
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? 'auto' : 'none',
      }}
      className={classNames(styles.root, {}, [className])}
    >
      <div
        className={styles.overlay}
        onClick={closeHandler}
      >
        <motion.div
          initial={withoutInitial ? false : { scale: 0.5 }}
          animate={{
            scale: isOpen ? 1 : 0.5,
          }}
          className={styles.content}
          onClick={onContentClick}
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
});

export default Modal;
