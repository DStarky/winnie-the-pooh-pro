import { useTranslation } from 'react-i18next';
import { classNames } from 'src/shared/lib/classNames/classNames';
import { Title } from 'src/shared/ui/Title';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'src/entities/User';
import { ThemeTitle } from 'src/shared/ui/Title/ui/Title';

interface MyAccountPageProps {
  className?: string;
}

const MyAccountPage = ({ className }: MyAccountPageProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'myAccountPage' });
  const authData = useSelector(getUserAuthData);

  if (authData) {
    return (
      <div className={classNames('', {}, [className])}>
        <Title
          size="h3"
          theme={ThemeTitle.PRIMARY}
        >
          {t('My account')}
        </Title>
      </div>
    );
  }

  return <Title>{t('You must log in')}</Title>;
};

export default MyAccountPage;
