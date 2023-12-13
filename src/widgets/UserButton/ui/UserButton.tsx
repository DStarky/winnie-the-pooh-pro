import styles from './UserButton.module.scss';
import { classNames } from 'src/shared/lib/classNames/classNames';
import UserIcon from 'src/shared/assets/icons/user-circle.svg';
import { LoginModal } from 'src/features/AuthByUsername';
import { memo, useCallback, useState } from 'react';
import { getUserAuthData } from 'src/entities/User';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RoutePath } from 'src/shared/config/routeConfig';

interface UserButtonProps {
  className?: string;
}

const UserButton = memo(function UserButton({ className }: UserButtonProps) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const authData = useSelector(getUserAuthData);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = useCallback(() => {
    setIsLoginModalOpen(false);
  }, []);

  if (authData) {
    return (
      <Link to={RoutePath.my_account}>
        <button
          data-testid="user-button"
          type="button"
          className={classNames(styles.root, {}, [className])}
          onClick={openLoginModal}
        >
          <UserIcon className={styles.icon} />
        </button>
      </Link>
    );
  }

  return (
    <>
      <button
        data-testid="user-button"
        type="button"
        className={classNames(styles.root, {}, [className])}
        onClick={openLoginModal}
      >
        <UserIcon className={styles.icon} />
      </button>
      {isLoginModalOpen ? (
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={closeLoginModal}
          lazy
        />
      ) : null}
    </>
  );
});

export default UserButton;
