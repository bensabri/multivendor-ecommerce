import { Loader, Tooltip } from '@mantine/core';
import dynamic from 'next/dynamic';
import { useGlobalContext } from '../../context/Context';
import { useState, useEffect } from 'react';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';

import {
	DeleteProductDocument,
	DeleteProductMutation,
	DeleteProductMutationVariables,
	ProductsSearchDocument,
	ProductsSearchQuery,
	ProductsSearchQueryVariables,
	UpdateProductDocument,
	UpdateProductMutation,
	UpdateProductMutationVariables,
	VendeursDocument,
	VendeursQuery,
	VendeursQueryVariables,
} from '../../generated';
import Image, { ImageLoaderProps } from 'next/image';
import HeaderSeller from '../../components/Dashboard/HeaderSeller';
import Navbar from '../../components/Dashboard/Navbar';
import ThemeSettings from '../../components/ThemeSettings';
import Header from '../../components/Dashboard/Header';

const CreateProducts = dynamic(
	() => {
		return import('../../components/Dashboard/Seller/CreateProducts');
	},
	{
		ssr: false,

		loading: () => (
			<div className="flex justify-center items-center h-[30rem]">
				<Loader color="gray" />
			</div>
		),
	}
);

const Products: React.FC = () => {
	const {
		activeMenu,
		activePageProductSeller,
		setPageProductSeller,
		themeSettings,
		currentMode,
		currentColor,
	} = useGlobalContext();

	const [productPerPage, setProductPerPage] = useState<number>(10);
	const [sortPrice, setSortPrice] = useState<boolean>(false);
	const [sortStock, setSortStock] = useState<boolean>(false);
	const [search, setSearch] = useState<string>('');
	const [filter, setFilter] = useState('price:asc');
	const [price, setPrice] = useState<string>('');
	const [stock, setStock] = useState<string>('');
	const [open, setOpen] = useState<boolean>(false);

	const { data: vendeur, loading: loadVend } = useQuery<
		VendeursQuery,
		VendeursQueryVariables
	>(VendeursDocument, {
		variables: {
			email: 'vendeurs@mail.com',
		},
	});

	const [getProducts, { data, loading }] = useLazyQuery<
		ProductsSearchQuery,
		ProductsSearchQueryVariables
	>(ProductsSearchDocument, {
		variables: {
			sort: [filter],
			email: 'vendeur1@ymail.com',
			pageSize: productPerPage,
			page: activePageProductSeller,
		},
	});

	// Mutation to Update the Price and the Stock
	const [updateProduct, { data: dataUpt }] = useMutation<
		UpdateProductMutation,
		UpdateProductMutationVariables
	>(UpdateProductDocument);

	// Mutation to Delete the product
	const [deleteProduct, { data: dataDeleted }] = useMutation<
		DeleteProductMutation,
		DeleteProductMutationVariables
	>(DeleteProductDocument);

	useEffect(() => {
		getProducts();
	}, []);

	const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
		return `http://localhost:1337${src}?w=${width}&q=${quality || 75}`;
	};

	const rows = data?.products?.data.map((item) => (
		<tr key={item.id}>
			<td>
				<Image
					className="rounded-full"
					width={40}
					height={40}
					loader={myLoader}
					objectFit="fill"
					src={item.attributes?.image.data[0].attributes?.url!}
				/>
			</td>
			<td title={item.attributes?.title} className="dark:text-gray-200">
				{item.attributes?.title.substring(0, 17)}
			</td>
			<td className="dark:text-gray-200">
				{item.attributes?.category.replaceAll('_', ' ')}
			</td>
			<td className="dark:text-gray-200">{item.attributes?.stock}</td>
			<td className="dark:text-gray-200">{item.attributes?.price}</td>
			<td className="dark:text-gray-200">
				<Tooltip label="Modifier">test</Tooltip>
			</td>
		</tr>
	));

	return (
		<>
			{vendeur?.vendeurs?.data.length === 0 ? (
				<div className="flex justify-center items-center h-screen">
					<h2>Page non disponible</h2>{' '}
				</div>
			) : (
				<div
					className={`flex relative dark:bg-main-dark-bg ${
						currentMode === 'Dark' ? 'dark' : ''
					}`}
				>
					<HeaderSeller />
					<div
						className={
							activeMenu
								? 'dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full  '
								: 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
						}
					>
						<div className="fixed md:static  dark:bg-main-dark-bg navbar w-full ">
							<Navbar />
						</div>
						{themeSettings && <ThemeSettings />}
						<div className="m-2 md:m-10 mt-24 p-2 md:p-10 shadow bg-white rounded-3xl dark:bg-secondary-dark-bg">
							<Header category="page" title="Produit" />
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Products;
