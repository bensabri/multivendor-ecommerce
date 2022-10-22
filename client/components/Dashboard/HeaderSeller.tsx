import { FiSettings } from 'react-icons/fi';
import { MdOutlineCancel } from 'react-icons/md';
import { useGlobalContext } from '../../context/Context';
import { Tooltip } from '@mantine/core';
import Sidebar from './Sidebar';

const HeaderSeller = () => {
	const { activeMenu, themeSettings, setThemeSettings, currentColor } =
		useGlobalContext();
	return (
		<div>
			<div className="fixed right-4 bottom-4 " style={{ zIndex: '1000' }}>
				<Tooltip
					label="Settings"
					withArrow
					onClick={() => setThemeSettings(true)}
				>
					<button
						style={{
							background: currentColor,
							borderRadius: '50%',
						}}
						className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
					>
						<FiSettings />
					</button>
				</Tooltip>
			</div>
			{activeMenu ? (
				<div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
					<Sidebar />
				</div>
			) : (
				<div className="w-0 dark:bg-secondary-dark-bg">
					<Sidebar />
				</div>
			)}
		</div>
	);
};

export default HeaderSeller;
