import { useLazyQuery } from '@apollo/client';
import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import Header from '../../components/Header/Header';
import ProductFeed from '../../components/ProductFeed';
import {
	GetProductsDocument,
	GetProductsQuery,
	GetProductsQueryVariables,
} from '../../generated';

const products: NextPage = () => {
	const [getProducts, { loading, error, data: products }] = useLazyQuery<
		GetProductsQuery,
		GetProductsQueryVariables
	>(GetProductsDocument, {
		variables: {
			pageSize: 1,
			page: 1,
			suspended: false,
		},
	});

	useEffect(() => {
		getProducts();
	}, []);

	if (loading) return <div>Loading</div>;

	return (
		<div className="bg-gray-100">
			<Head>
				<title>Market place</title>
				<link rel="icon" href="/croissant-de-lune.png" />
			</Head>
			<Header />
			<main className="max-w-screen-2xl mx-auto">
				{loading ? <div>Loading</div> : <ProductFeed />}
			</main>
		</div>
	);
};

export default products;
