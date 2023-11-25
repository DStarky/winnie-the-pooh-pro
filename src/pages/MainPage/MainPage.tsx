import { useThemeToggle } from '../../theme-provider';

const MainPage = () => {
	const toggleTheme = useThemeToggle();

	return (
		<>
			<p className='app'>Lira Earrings</p>
			<button onClick={toggleTheme}>Переключить тему</button>
			<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia minus vero earum repellat reiciendis dolorem? Ex fuga possimus quae iure repellat, consequatur eaque, a obcaecati laudantium earum corporis, vitae atque.</p>
		</>
	);
};
export default MainPage;
