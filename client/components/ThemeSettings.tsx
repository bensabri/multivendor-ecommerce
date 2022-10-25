import { useGlobalContext } from '../context/Context';

const ThemeSettings: React.FC = () => {
	const {
		handleSetColor,
		handleSetMode,
		currentMode,
		currentColor,
		setThemeSettings,
	} = useGlobalContext();
	return <div>ThemeSettings</div>;
};

export default ThemeSettings;
