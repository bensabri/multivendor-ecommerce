import { NextPage } from 'next';
import Head from 'next/head';
import Header from '../../components/Header/Header';
import ProductFeed from '../../components/ProductFeed';

const products: NextPage = () => {
	return (
		<div className="bg-gray-100">
			<Head>
				<title>Market place</title>
				<link rel="icon" href="/croissant-de-lune.png" />
			</Head>
			<Header />
			<main className="max-w-screen-2xl mx-auto">
				<ProductFeed />
			</main>
		</div>
	);
};

export default products;
