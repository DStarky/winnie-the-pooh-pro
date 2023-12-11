import { ModalWithPortal } from 'src/shared/ui/ModalWithPortal';
import { LoginForm } from '../../LoginForm';
import { Suspense, memo } from 'react';
import type { ModalProps } from 'src/shared/ui/Modal/ui/Modal';
import { Loader } from 'src/shared/ui/Loader';

interface LoginModalProps extends ModalProps {}

const LoginModal = memo(function LoginModal({ className, isOpen, onClose, lazy }: LoginModalProps) {
  return (
    <ModalWithPortal
      isOpen={isOpen}
      onClose={onClose}
      className={className}
      lazy={lazy}
    >
      <Suspense fallback={<Loader />}>
        <LoginForm />
      </Suspense>
    </ModalWithPortal>
  );
});

export default LoginModal;
