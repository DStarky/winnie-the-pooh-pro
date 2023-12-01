import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <div data-testid="about-page">
      <h1>{t('О нас')}</h1>
      <p>{t('lorem')}</p>
      <p>{t('Привет мир')}</p>
      <p>{t('hello')}</p>
    </div>
  );
};
export default AboutPage;
