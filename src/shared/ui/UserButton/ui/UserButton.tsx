import styles from './UserButton.module.scss';
import { classNames } from 'src/shared/lib/classNames/classNames';
import UserIcon from 'src/shared/assets/icons/user-circle.svg';
import { LoginModal } from 'src/features/AuthByUsername';
import { useCallback, useState } from 'react';

interface UserButtonProps {
  className?: string;
}

const UserButton = ({ className }: UserButtonProps) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = useCallback(() => {
    setIsLoginModalOpen(false);
  }, []);

  return (
    <>
      <button
        type="button"
        className={classNames(styles.root, {}, [className])}
        onClick={openLoginModal}
      >
        <UserIcon className={styles.icon} />
      </button>
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={closeLoginModal}
      />
    </>
  );
};

export default UserButton;
