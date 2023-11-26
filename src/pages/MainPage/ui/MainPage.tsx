import { useThemeToggle } from '../../../app/providers/ThemeProvider';

const MainPage = () => {
	const toggleTheme = useThemeToggle();

	return (
		<>
			<p className='app'>Lira Earrings</p>
			<button onClick={toggleTheme}>Переключить тему</button>
		</>
	);
};
export default MainPage;
