import { useTranslation } from 'react-i18next';
import { useThemeToggle } from 'src/app/providers/ThemeProvider';

const MainPage = () => {
	const toggleTheme = useThemeToggle();
	const { t, i18n } = useTranslation('main');

	return (
		<>
			<p className='app'>Lira Earrings</p>
			<h1>{t('h1')}</h1>
			<h2>Something text</h2>
			<h3>Something text</h3>
			<h4>Something text</h4>
			<h5>Something text</h5>
			<div className='square'></div>
		</>
	);
};
export default MainPage;
