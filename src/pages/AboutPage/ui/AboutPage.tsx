import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'about' });

  return (
    <div data-testid="about-page">
      <h1>{t('About us')}</h1>
      <p>{t('lorem')}</p>
      <p>{t('helloWorld')}</p>
    </div>
  );
};
export default AboutPage;
