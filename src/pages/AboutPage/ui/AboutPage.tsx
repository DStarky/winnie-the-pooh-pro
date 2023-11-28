import { useTranslation } from 'react-i18next';

const AboutPage = () => {
	const { t, i18n } = useTranslation();

	return (
		<>
			<h1>ABOUT PAGE</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit necessitatibus inventore repellat accusantium beatae, pariatur veritatis molestias
				illum, saepe, delectus eaque ex! Molestiae fuga voluptates molestias laudantium autem? Quasi, sit?
			</p>
			<p>{t('Привет мир')}</p>
		</>
	);
};
export default AboutPage;
