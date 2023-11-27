import { useThemeToggle } from 'src/app/providers/ThemeProvider';

const MainPage = () => {
	const toggleTheme = useThemeToggle();

	return (
		<>
			<p className='app'>Lira Earrings</p>
			<h1>Something text</h1>
			<h2>Something text</h2>
			<h3>Something text</h3>
			<h4>Something text</h4>
			<h5>Something text</h5>
			<div className='square'></div>
			<button onClick={toggleTheme}>Переключить тему</button>
		</>
	);
};
export default MainPage;
