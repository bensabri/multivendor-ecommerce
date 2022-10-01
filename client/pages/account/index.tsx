import { NextPage } from 'next';
import Head from 'next/head';
import AccountCustomer from '../../components/Dashboard/Customer/AccountCustomer';

const Account: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Tableau de bord </title>
				<link rel="icon" href="/croissant-de-lune.png" />
			</Head>
			<AccountCustomer />
		</div>
	);
};

export default Account;
