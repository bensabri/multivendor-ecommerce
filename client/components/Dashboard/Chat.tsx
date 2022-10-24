import React from 'react';
import { useGlobalContext } from '../../context/Context';
import Button from './Button';
import { MdOutlineCancel } from 'react-icons/md';

const Chat = () => {
	const { currentColor } = useGlobalContext();
	return (
		<div className="nav-item absolute right-5 md:right-52 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
			<div className="flex justify-between items-center">
				<div className="flex gap-3">
					<p className="font-semibold text-lg dark:text-gray-200">
						Messages
					</p>
					<button
						type="button"
						className="text-white  text-xs rounded p-1 px-2 bg-orange"
					>
						0 Message
					</button>
				</div>
				<Button
					icon={<MdOutlineCancel />}
					color="rgb(153, 171, 180)"
					bgHoverColor="light-gray"
					size="2xl"
					borderRadius="50%"
				/>
			</div>
			<div className="mt-5">
				<div className="dark:text-gray-200 flex justify-center">
					<p>{`Aucun Message`}</p>
				</div>
			</div>
			<div className="mt-5">
				<Button
					color="white"
					bgColor={currentColor}
					text="See all messages"
					borderRadius="10px"
					width="full"
				/>
			</div>
		</div>
	);
};

export default Chat;
