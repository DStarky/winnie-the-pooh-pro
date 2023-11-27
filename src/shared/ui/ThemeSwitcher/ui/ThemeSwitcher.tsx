import { useThemeToggle } from 'src/app/providers/ThemeProvider';
import styles from './ThemeSwitcher.module.scss';
import { classNames } from 'src/shared/lib/classNames/classNames';
import Button, { ThemeButton } from 'src/shared/ui/Button/Button';


interface ThemeSwitcherProps {
	className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const toggleTheme = useThemeToggle();

	return (
		<Button
			className={classNames(styles.root, {}, [className])}
			onClick={toggleTheme}
			theme={ThemeButton.FILLED}
			// wide
			>
			Переключить тему
		</Button>
	);
};

export default ThemeSwitcher;
