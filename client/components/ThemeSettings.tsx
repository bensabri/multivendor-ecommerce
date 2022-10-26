import { useGlobalContext } from '../context/Context';
import { MdOutlineCancel } from 'react-icons/md';
import { themeColors } from '../data/dummy';

const ThemeSettings: React.FC = () => {
	const {
		handleSetColor,
		handleSetMode,
		currentMode,
		currentColor,
		setThemeSettings,
	} = useGlobalContext();
	return (
		<div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
			<div className="float-right h-screen dark:text-gray-200 bg-white dark:bg-main-dark-bg w-400">
				<div className="flex justify-between items-center p-4 ml-4">
					<p className="font-semibold text-xl">Settings</p>
					<button
						type="button"
						className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
						onClick={() => setThemeSettings(false)}
						style={{
							color: 'rgb(153, 171, 180)',
							borderRadius: '50%',
						}}
					>
						<MdOutlineCancel />
					</button>
				</div>
				<div className="flex-col border-t-1 border-color p-4 ml-4">
					<p className="font-semibold text-lg">Theme Options</p>
					<div className="mt-4">
						<input
							type="radio"
							id="light"
							name="theme"
							value="Light"
							className="cursor-pointer"
							onChange={handleSetMode}
							checked={currentMode === 'Light'}
						/>

						<label
							htmlFor="light"
							className="ml-2 text-md cursor-pointer"
						>
							Light
						</label>
					</div>
					<div className="mt-4">
						<input
							type="radio"
							id="dark"
							name="theme"
							value="Dark"
							className="cursor-pointer"
							onChange={handleSetMode}
							checked={currentMode === 'Dark'}
						/>

						<label
							htmlFor="dark"
							className="ml-2 text-md cursor-pointer"
						>
							Dark
						</label>
					</div>
				</div>
				<div className="flex-col border-t-1 border-color p-4 ml-4">
					<p className="font-semibold text-lg">Theme Colors</p>
					<div className="flex gap-3">{/* {themeColors. } */}</div>
				</div>
			</div>
		</div>
	);
};

export default ThemeSettings;
