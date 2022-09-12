import { gql, useLazyQuery } from '@apollo/client';
import { Loader, Pagination } from '@mantine/core';
import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Product from '../../components/Product/Product';
import { useGlobalContext } from '../../context/Context';
import {
	GetCategoriesDocument,
	GetCategoriesQuery,
	GetCategoriesQueryVariables,
} from '../../generated';

const Category: NextPage = () => {
	const { activeCategory, activePageCategory, setPageCategory } =
		useGlobalContext();
	const [itemPerPages] = useState(10); // Set the item showen per page

	const [getCategory, { data, loading }] = useLazyQuery<
		GetCategoriesQuery,
		GetCategoriesQueryVariables
	>(GetCategoriesDocument, {
		variables: {
			title: activeCategory.replaceAll('é', 'e'),
			pageSize: itemPerPages,
			page: activePageCategory,
			suspended: false,
		},
	});

	useEffect(() => {
		getCategory();
	}, []);

	if (loading)
		return (
			<div className="flex justify-center items-center h-screen">
				<Loader color="gray" />
			</div>
		);

	return (
		<div>
			<Head>
				<title>Market place</title>
				<link rel="icon" href="/croissant-de-lune.png" />
			</Head>
			<Header />
			{data?.categories?.data[0] ? (
				<div className="bg-gray-100">
					<h2>{data.categories.data[0].attributes?.title}</h2>
					<main className="max-w-screen-2xl mx-auto">
						<div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
							{data.categories.data[0].attributes?.products?.data.map(
								({ id, attributes }) => (
									<Product
										key={id}
										id={id}
										attributes={attributes}
									/>
								)
							)}
						</div>
						<div className="p-5">
							<Pagination
								radius="lg"
								total={Math.ceil(
									data.categories.meta.pagination.total /
										itemPerPages
								)}
								page={activePageCategory}
								onChange={setPageCategory}
								withEdges
								position="center"
							/>
						</div>
					</main>
				</div>
			) : (
				<div className="flex justify-center items-center h-[30rem]">
					<p>Aucun produit</p>
				</div>
			)}
			<Footer />
		</div>
	);
};

export default Category;
