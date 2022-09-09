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
			pageSize: 10,
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
			{products?.products?.data[0] ? (
				<main className="max-w-screen-2xl mx-auto">
					{loading ? (
						<div>Loading</div>
					) : (
						<ProductFeed data={products} />
					)}
				</main>
			) : (
				<div className="flex justify-center items-center h-[30rem]">
					<p>Aucun produit</p>
				</div>
			)}
		</div>
	);
};

export default products;
