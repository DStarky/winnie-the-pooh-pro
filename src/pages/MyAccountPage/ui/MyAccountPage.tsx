import { useTranslation } from 'react-i18next';
import { classNames } from 'src/shared/lib/classNames/classNames';
import { Title } from 'src/shared/ui/Title';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'src/entities/User';
import { ThemeTitle } from 'src/shared/ui/Title/ui/Title';
import { Button, ThemeButton } from 'src/shared/ui/Button';
import { memo, useEffect } from 'react';
import type { ReducersList } from 'src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import DynamicModuleLoader from 'src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, profileReducer } from 'src/entities/Profile';
import { useAppDispatch } from 'src/shared/lib/hooks/useAppDispatch/useAppDispatch';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface MyAccountPageProps {
  className?: string;
}

const MyAccountPage = memo(function MyAccountPage({ className }: MyAccountPageProps) {
  const { t } = useTranslation('translation', { keyPrefix: 'myAccountPage' });
  const authData = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const onLogout = () => {
    dispatch(userActions.logout());
  };

  if (authData) {
    return (
      <DynamicModuleLoader reducers={reducers}>
        <div
          className={classNames('', {}, [className])}
          data-testid="my-account-page"
        >
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
      </DynamicModuleLoader>
    );
  }

  return (
    <div data-testid="my-account-page">
      <Title>{t('You must log in')}</Title>
    </div>
  );
});

export default MyAccountPage;
