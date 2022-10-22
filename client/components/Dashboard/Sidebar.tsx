import Link from 'next/link';
import { useRouter } from 'next/router';
import { useGlobalContext } from '../../context/Context';
import { FiShoppingCart } from 'react-icons/fi';
import { MdOutlineCancel } from 'react-icons/md';
import { Tooltip } from '@mantine/core';
import { links } from '../../data/dummy';

const Sidebar = () => {
	const { activeMenu, setActiveMenu, screenSize, currentColor } =
		useGlobalContext();

	const router = useRouter();

	const handleCloseSideBar = () => {
		if (activeMenu && screenSize! <= 900) {
			setActiveMenu(false);
		}
	};

	const activeLink =
		'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
	const normalLink =
		'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 cursor-pointer';

	return (
		<div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
			{activeMenu && (
				<>
					<div className="flex justify-between items-center cursor-pointer">
						<Link href="/" passHref onClick={handleCloseSideBar}>
							<div className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
								<FiShoppingCart />
								<span>Medinah store</span>
							</div>
						</Link>
						<Tooltip label="Menu" withArrow>
							<button
								type="button"
								onClick={() =>
									setActiveMenu(
										(prevActiveMenu: boolean) =>
											!prevActiveMenu
									)
								}
								className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
							>
								<MdOutlineCancel />
							</button>
						</Tooltip>
					</div>
					<div className="mt-10">
						{links.map((item, index) => (
							<div key={index}>
								<p className="text-gray-400 m-3 mt-4 uppercase">
									{item.title}
								</p>
								{item.links.map((link, index) => (
									<div
										key={index}
										style={{
											backgroundColor:
												router.pathname ===
												`/account/${link.name}`
													? currentColor
													: `/account${link.name}` ===
													  router.pathname
													? currentColor
													: '',
										}}
										className={
											router.pathname ===
											`/account/${link.name}`
												? activeLink
												: `/account${link.name}` ===
												  router.pathname
												? activeLink
												: normalLink
										}
										onClick={() =>
											router.push(`/account/${link.name}`)
										}
									>
										{link.icon}
										<span className="capitalize">
											{link.name || 'accueil'}
										</span>
									</div>
								))}
							</div>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default Sidebar;
