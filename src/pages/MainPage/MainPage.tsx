import { useThemeToggle } from '../../theme-provider';

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
