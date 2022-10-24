import { useRouter } from 'next/router';
import { useGlobalContext } from '../../context/Context';
import { VendeursQuery } from '../../generated';
import { MdOutlineCancel } from 'react-icons/md';
import Button from './Button';

type iProps = {
	vendeur?: VendeursQuery;
};

const UserProfile = ({ vendeur }: iProps) => {
	const router = useRouter();
	const { currentColor } = useGlobalContext();
	return (
		<div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
			<div className="flex justify-between items-center">
				<p className="font-semibold text-lg dark:text-gray-200">
					Profil vendeur
				</p>
				<Button
					icon={<MdOutlineCancel />}
					color="rgb(153, 171, 180)"
					bgHoverColor="light-gray"
					size="2xl"
					borderRadius="50%"
				/>
			</div>
			<div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
				<div>
					<p className="capitalize font-semibold text-xl dark:text-gray-200">
						{vendeur && vendeur.vendeurs?.data[0].attributes?.name}
					</p>
					<p className="text-gray-500 text-sm dark:text-gray-400">
						{' '}
						Administrateur{' '}
					</p>
					<p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
						{/* {user.email} */}
					</p>
				</div>
			</div>
			<div className="mt-5">
				<Button
					color="white"
					bgColor={currentColor}
					text="Logout"
					borderRadius="10px"
					width="full"
				/>
			</div>
		</div>
	);
};

export default UserProfile;
