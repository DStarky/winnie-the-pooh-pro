import { useTranslation } from 'react-i18next';
import { classNames } from 'src/shared/lib/classNames/classNames';
import { Title } from 'src/shared/ui/Title';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'src/entities/User';
import { ThemeTitle } from 'src/shared/ui/Title/ui/Title';
import { Button, ThemeButton } from 'src/shared/ui/Button';

interface MyAccountPageProps {
  className?: string;
}

const MyAccountPage = ({ className }: MyAccountPageProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'myAccountPage' });
  const authData = useSelector(getUserAuthData);
  
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(userActions.logout());
  };

  if (authData) {
    return (
      <div className={classNames('', {}, [className])}>
        <Title
          size="h3"
          theme={ThemeTitle.PRIMARY}
        >
          {t('My account')}
        </Title>
        <Button
          theme={ThemeButton.FILLED}
          onClick={onLogout}
        >
          {t('Log out')}
        </Button>
      </div>
    );
  }

  return <Title>{t('You must log in')}</Title>;
};

export default MyAccountPage;
