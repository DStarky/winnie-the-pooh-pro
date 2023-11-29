import { useTranslation } from 'react-i18next';

import { classNames } from 'src/shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'src/shared/ui/Button';

interface LangSwitcherProps {
	className?: string;
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
	const { t, i18n } = useTranslation('buttons');

	const toggleLang = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};
	return (
		<Button
			className={classNames('', {}, [className])}
			onClick={toggleLang}
			theme={ThemeButton.OUTLINE}
		>
			{t('Сменить язык')}
		</Button>
	);
};

export default LangSwitcher;
