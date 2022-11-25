import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Tooltip } from '@mantine/core';
import { useGlobalContext } from '../../context/Context';
import {
	VendeursDocument,
	VendeursQuery,
	VendeursQueryVariables,
} from '../../generated';
import Chat from './Chat';
import Notification from '../Notification';
import UserProfile from './UserProfile';

type iProps = {
	title: string;
	customFunc: () => void;
	icon: JSX.Element;
	color: string;
	dotColor?: string;
};

const NavButton = ({ title, customFunc, icon, color, dotColor }: iProps) => (
	<Tooltip label={title} withArrow>
		<button
			type="button"
			onClick={customFunc}
			style={{ color }}
			className="relative text-xl rounded-full p-3 hover:bg-light-gray"
		>
			<span
				style={{ background: dotColor }}
				className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
			/>
			{icon}
		</button>
	</Tooltip>
);

const Navbar = () => {
	const {
		setActiveMenu,
		isClicked,
		handleClick,
		screenSize,
		setScreenSize,
		currentColor,
	} = useGlobalContext();

	const { data: vendeur } = useQuery<VendeursQuery, VendeursQueryVariables>(
		VendeursDocument,
		{
			variables: { email: user },
		}
	);

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth);

		window.addEventListener('resize', handleResize);

		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		if (screenSize! <= 900) {
			setActiveMenu(false);
		} else {
			setActiveMenu(true);
		}
	}, [screenSize]);

	return (
		<div className="flex justify-between p-2 md:mx-6 relative ">
			<NavButton
				title="menu"
				customFunc={() =>
					setActiveMenu((prevActiveMenu: boolean) => !prevActiveMenu)
				}
				color={currentColor}
				icon={<AiOutlineMenu />}
			/>
			<div className="flex">
				<NavButton
					title="Chat"
					dotColor="#03C9D7"
					customFunc={() => setActiveMenu(() => handleClick('chat'))}
					color={currentColor}
					icon={<BsChatLeft />}
				/>
				<NavButton
					title="Notifications"
					dotColor="#03C9D7"
					customFunc={() =>
						setActiveMenu(() => handleClick('notification'))
					}
					color={currentColor}
					icon={<RiNotification3Line />}
				/>
				<Tooltip label="Profile" withArrow>
					<div
						className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
						onClick={() => handleClick('userProfile')}
					>
						<p>
							<span className="text-gray-400 text-14">
								Bonjour,
							</span>
							<span className="capitalize text-gray-400 font-bold ml-1 text-14">
								{vendeur &&
									vendeur.vendeurs?.data[0].attributes?.name}
							</span>
						</p>
						<MdKeyboardArrowDown className="text-gray-400 text-14" />
					</div>
				</Tooltip>
				{isClicked.chat ? <Chat /> : null}
				{isClicked.notification ? <Notification /> : null}
				{isClicked.userProfile ? (
					<UserProfile vendeur={vendeur} />
				) : null}
			</div>
		</div>
	);
};

export default Navbar;
