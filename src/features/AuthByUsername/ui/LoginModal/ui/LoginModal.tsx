import { classNames } from 'src/shared/lib/classNames/classNames';
import { ModalWithPortal } from 'src/shared/ui/ModalWithPortal';
import { LoginForm } from '../../LoginForm';
import { memo } from 'react';
import type { ModalProps } from 'src/shared/ui/Modal/ui/Modal';

interface LoginModalProps extends ModalProps {}

const LoginModal = memo(function LoginModal({ className, isOpen, onClose, lazy }: LoginModalProps) {
  return (
    <ModalWithPortal
      isOpen={isOpen}
      onClose={onClose}
      className={classNames('', {}, [className])}
      lazy={lazy}
    >
      <LoginForm />
    </ModalWithPortal>
  );
});

export default LoginModal;
