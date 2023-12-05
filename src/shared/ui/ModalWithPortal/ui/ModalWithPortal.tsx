import { Portal } from 'src/shared/ui/Portal';
import { Modal } from 'src/shared/ui/Modal';
import type { ModalProps } from 'src/shared/ui/Modal/ui/Modal';

const ModalWithPortal = ({ className, children, onClose, isOpen }: ModalProps) => (
  <Portal>
    <Modal
      className={className}
      onClose={onClose}
      isOpen={isOpen}
    >
      {children}
    </Modal>
  </Portal>
);

export default ModalWithPortal;
