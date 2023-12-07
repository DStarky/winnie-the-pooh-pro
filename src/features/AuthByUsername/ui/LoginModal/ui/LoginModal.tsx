import { classNames } from 'src/shared/lib/classNames/classNames';
import { ModalWithPortal } from 'src/shared/ui/ModalWithPortal';
import { LoginForm } from '../../LoginForm';
import { memo } from 'react';

interface LoginModalProps {
  className?: string;
  isOpen?: boolean;
  onClose: () => void;
}

const LoginModal = memo(function LoginModal({ className, isOpen, onClose }: LoginModalProps) {
  return (
    <ModalWithPortal
      isOpen={isOpen}
      onClose={onClose}
      className={classNames('', {}, [className])}
    >
      <LoginForm />
    </ModalWithPortal>
  );
});

export default LoginModal;
