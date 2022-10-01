import { useRouter } from 'next/router';

const AccountDetailHeader = () => {
	const router = useRouter();

	return (
		<div className="absolute top-12 right-0 z-100 pt-5 shadow bg-white w-96 invisible delay-500 md:group-hover:visible">
			<div className="border-b cursor-pointer space-y-2">
				<div className="hover:bg-gray-100">
					<p
						onClick={() => router.push('/account')}
						className="text-black text-thin border-t p-2"
					>
						Mes commandes
					</p>
				</div>
				<div className="hover:bg-gray-100">
					<p className="text-black text-thin border-t p-2">
						Se déconnecter
					</p>
				</div>
			</div>
		</div>
	);
};

export default AccountDetailHeader;
