import { useEffect, type ReactNode, useCallback } from 'react';
import styles from './Modal.module.scss';
import { classNames } from 'src/shared/lib/classNames/classNames';
import { motion, AnimatePresence } from 'framer-motion';
import Portal from 'src/shared/ui/Portal/Portal';

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
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose, onKeyDown]);

  return (
    <Portal>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            className={classNames(styles.root, mods, [className])}
          >
            <div
              className={styles.overlay}
              onClick={closeHandler}
            >
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{
                  scale: 1,
                }}
                exit={{ scale: 0.5 }}
                transition={{
                  duration: 0.3,
                }}
                className={styles.content}
                onClick={onContentClick}
              >
                {children}
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Portal>
  );
};

export default Modal;
