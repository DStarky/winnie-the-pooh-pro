import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <>
      <h1>{t('О нас')}</h1>
      <p>{t('lorem')}</p>
      <p>{t('Привет мир')}</p>
      <p>{t('hello')}</p>
    </>
  );
};
export default AboutPage;
