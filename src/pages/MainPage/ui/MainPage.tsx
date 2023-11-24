import { useThemeToggle } from '../../../app/providers/ThemeProvider';

const MainPage = () => {
	const toggleTheme = useThemeToggle();

	return (
		<>
			<p className='app'>Lira Earrings</p>
			<h1>Something text</h1>
			<button onClick={toggleTheme}>Переключить тему</button>
		</>
	);
};
export default MainPage;
