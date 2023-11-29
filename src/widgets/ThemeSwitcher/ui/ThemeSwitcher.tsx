import { useThemeToggle } from 'src/app/providers/ThemeProvider';
import { classNames } from 'src/shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'src/shared/ui/Button';

interface ThemeSwitcherProps {
	className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const toggleTheme = useThemeToggle();

	return (
		<Button
			className={classNames('', {}, [className])}
			onClick={toggleTheme}
			theme={ThemeButton.FILLED}
			// wide
		>
			Переключить тему
		</Button>
	);
};

export default ThemeSwitcher;
