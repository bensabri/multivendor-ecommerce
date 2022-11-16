import { useLazyQuery } from '@apollo/client';
import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import ProductFeed from '../../components/Product/ProductFeed';
import { Loader, Pagination } from '@mantine/core';
import {
	GetProductsDocument,
	GetProductsQuery,
	GetProductsQueryVariables,
} from '../../generated';
import { useGlobalContext } from '../../context/Context';
import Footer from '../../components/Footer/Footer';
import { IProductList } from '../../@types/model';

type Props = {
	product: IProductList[];
};

const products: NextPage<Props> = () => {
	const [itemPerPages] = useState<number>(10); // Set the item showen per page
	const { activePageProducts, setPageProducts, product } = useGlobalContext();

	const [getProducts, { loading, error, data: products }] = useLazyQuery<
		GetProductsQuery,
		GetProductsQueryVariables
	>(GetProductsDocument, {
		variables: {
			pageSize: itemPerPages,
			page: activePageProducts,
			suspended: false,
		},
	});

	useEffect(() => {
		getProducts();
	}, []);

	if (loading)
		return (
			<div className="flex justify-center items-center h-screen">
				<Loader color="gray" />
			</div>
		);

	return (
		<div className="bg-gray-100">
			<Head>
				<title>{products?.products?.data[0].attributes?.title} </title>
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
					<div className="p-5">
						<Pagination
							radius="lg"
							total={Math.ceil(
								products.products.meta.pagination.total /
									itemPerPages
							)} // get number of pages
							page={activePageProducts} // Get the active page when click on page number
							onChange={setPageProducts}
							withEdges
							position="center"
						/>
					</div>
				</main>
			) : (
				<div className="flex justify-center items-center h-[30rem]">
					<p>Aucun produit</p>
				</div>
			)}
			<Footer />
		</div>
	);
};

export default products;
