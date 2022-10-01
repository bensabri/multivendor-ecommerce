import { useQuery } from '@apollo/client';
import { Loader } from '@mantine/core';
import {
	GetOrdersDocument,
	GetOrdersQuery,
	GetOrdersQueryVariables,
} from '../../../generated';
import Header from '../../Header/Header';

const AccountCustomer = () => {
	const { data, loading } = useQuery<GetOrdersQuery, GetOrdersQueryVariables>(
		GetOrdersDocument,
		{
			variables: {
				limit: 1000,
				client_email: 'ssabril@ymail.com',
				is_payed: true,
				sort: 'createdAt:DESC',
			},
		}
	);

	if (loading)
		return (
			<div className="flex justify-center items-center h-[30rem]">
				<Loader color="gray" />
			</div>
		);

	return (
		<div className="bg-gray-100">
			<Header />
			<main className="lg:flex max-w-screen-lg mx-auto grid">
				<div className="flex-grow m-2 md:m-5 space-y-5">
					<h2 className="text-center text-2xl">
						Historique des commandes
					</h2>
				</div>
			</main>
		</div>
	);
};

export default AccountCustomer;
