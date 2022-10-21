import { useQuery } from '@apollo/client';
import { Loader } from '@mantine/core';
import { NextPage } from 'next';
import Head from 'next/head';
import AccountCustomer from '../../components/Dashboard/Customer/AccountCustomer';
import AccountSeller from '../../components/Dashboard/Seller/AccountSeller';
import {
	VendeursDocument,
	VendeursQuery,
	VendeursQueryVariables,
} from '../../generated';

const Account: NextPage = () => {
	const { data, loading } = useQuery<VendeursQuery, VendeursQueryVariables>(
		VendeursDocument
	);

	if (loading)
		return (
			<div className="flex justify-center items-center h-[30rem]">
				<Loader color="gray" />
			</div>
		);

	return (
		<div>
			<Head>
				<title>Tableau de bord </title>
				<link rel="icon" href="/croissant-de-lune.png" />
			</Head>
			{data?.vendeurs?.data.length === 0 ? (
				<AccountCustomer />
			) : (
				<div>
					<AccountSeller vendeur={data} />
				</div>
			)}
		</div>
	);
};

export default Account;
