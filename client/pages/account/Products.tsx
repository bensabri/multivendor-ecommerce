import { Loader, Pagination, Table, Tooltip } from '@mantine/core';
import dynamic from 'next/dynamic';
import { useGlobalContext } from '../../context/Context';
import { useState, useEffect } from 'react';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { PlusCircleIcon } from '@heroicons/react/outline';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import { PencilIcon } from '@heroicons/react/solid';
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
import EditProduct from '../../components/Dashboard/Seller/EditProduct';

const AddProduct = dynamic(
	() => {
		return import('../../components/Dashboard/Seller/AddProduct');
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
		user,
	} = useGlobalContext();

	const [productPerPage, setProductPerPage] = useState<number>(10);
	const [sortPrice, setSortPrice] = useState<boolean>(false);
	const [sortStock, setSortStock] = useState<boolean>(false);
	const [search, setSearch] = useState<string>('');
	const [filter, setFilter] = useState<string>('price:asc');
	const [price, setPrice] = useState<number>(0);
	const [stock, setStock] = useState<number>(0);
	const [open, setOpen] = useState<boolean>(false);

	const { data: vendeur, loading: loadVend } = useQuery<
		VendeursQuery,
		VendeursQueryVariables
	>(VendeursDocument, {
		variables: {
			email: user,
		},
	});

	const [getProducts, { data, loading }] = useLazyQuery<
		ProductsSearchQuery,
		ProductsSearchQueryVariables
	>(ProductsSearchDocument, {
		variables: {
			sort: [filter],
			email: user,
			pageSize: productPerPage,
			page: activePageProductSeller,
		},
	});

	// Mutation to Update the Price and the Stock
	const [updateProduct, { data: dataUpdatedProduct }] = useMutation<
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
			<td
				title={item.attributes?.title}
				className="dark:text-gray-200 capitalize"
			>
				{item.attributes?.title.substring(0, 17)}
			</td>
			<td className="dark:text-gray-200">
				{item.attributes?.category.replaceAll('_', ' ')}
			</td>
			<td className="dark:text-gray-200">{item.attributes?.stock}</td>
			<td className="dark:text-gray-200">{item.attributes?.price}</td>
			<td className="dark:text-gray-200">
				<EditProduct
					dataUpdatedProduct={dataUpdatedProduct}
					price={price}
					setPrice={setPrice}
					stock={stock}
					setStock={setStock}
					updateProduct={updateProduct}
					deleteProduct={deleteProduct}
					title={item.attributes?.title!}
					description={item.attributes?.description!}
					currentPrice={item.attributes?.price}
					currentStock={item.attributes?.stock}
					id={item.id!}
					currentMode={currentMode}
					currentColor={currentColor}
					image={item.attributes?.image.data[0].attributes?.url}
				/>
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
							<div className="flex justify-between items-center">
								<div className="bg-white py-3 flex flex-col mb-6 dark:bg-secondary-dark-bg">
									<label
										htmlFor="search"
										className="mb-1 text-xs sm:text-sm tracking-wide dark:text-gray-200"
									>
										Recherche
									</label>
									<div className="relative">
										<input
											id="search"
											type="text"
											value={search}
											onChange={(e) => {
												setSearch(e.target.value);
												if (search?.length >= 2) {
													getProducts({
														variables: {
															email: user,
															contains:
																e.target.value,
														},
													});
												}
											}}
											className="dark:bg-main-dark-bg text-gray-800 focus:border-green-400 focus:ring-green-500 text-sm sm:text-base placeholder-gray-500 pl-3 rounded-lg border border-gray-400  py-1 focus:outline-none"
											placeholder="Chercher un produit"
										/>
									</div>
								</div>
								<Tooltip label="Ajouter un produit" withArrow>
									<button
										onClick={() => setOpen(true)}
										type="button"
										style={{
											backgroundColor: currentColor,
										}}
										className={`rounded-full cursor-pointer p-2 lg:text-md font-normal text-white transition duration-150 ease-in`}
									>
										<PlusCircleIcon className="w-9" />
									</button>
								</Tooltip>
							</div>
							<AddProduct
								vendeur={vendeur}
								open={open}
								setOpen={setOpen}
							/>
							{loading ? (
								<div className="flex justify-center items-center h-[30rem]">
									<Loader color="gray" />
								</div>
							) : (
								<div className="bg-white border p-5 dark:bg-secondary-dark-bg">
									<Table verticalSpacing="md" fontSize="md">
										<thead>
											<tr>
												<th>
													<p className="text-gray-400 dark:text-gray-200 text-md md:text-lg">
														Image
													</p>{' '}
												</th>
												<th>
													<p className="text-gray-400 dark:text-gray-200 text-md md:text-lg">
														Titre
													</p>{' '}
												</th>
												<th>
													<p className="text-gray-400 dark:text-gray-200 text-md md:text-lg">
														Catégorie
													</p>
												</th>
												<th
													className="cursor-pointer"
													onClick={() => {
														setSortStock(
															!sortStock
														);
														setFilter(
															sortStock
																? 'stock:asc'
																: 'stock:desc'
														);
													}}
												>
													<p className="text-gray-400 dark:text-gray-200 text-md md:text-lg flex items-center">
														Stock
														{sortStock ? (
															<ChevronUpIcon className="w-4 ml-2" />
														) : (
															<ChevronDownIcon className="w-4 ml-2" />
														)}
													</p>
												</th>
												<th
													className="cursor-pointer"
													onClick={() => {
														setSortPrice(
															!sortPrice
														);
														setFilter(
															sortPrice
																? 'price:asc'
																: 'price:desc'
														);
													}}
												>
													<p className="text-gray-400 dark:text-gray-200 text-md md:text-lg flex items-center">
														Prix{' '}
														{sortPrice ? (
															<ChevronUpIcon className="w-4 ml-2" />
														) : (
															<ChevronDownIcon className="w-4 ml-2" />
														)}
													</p>
												</th>
												<th>
													<p className="text-gray-400 dark:text-gray-200 text-md md:text-lg">
														Edit
													</p>
												</th>
											</tr>
										</thead>
										<tbody>{rows}</tbody>
									</Table>
								</div>
							)}
							<div className="py-5">
								<Pagination
									radius="lg"
									total={Math.ceil(
										data?.products?.meta.pagination.total! /
											productPerPage
									)} // get number of pages
									page={activePageProductSeller} // Get the active page when click on page number
									onChange={setPageProductSeller}
									withEdges
									position="center"
									styles={{
										item: {
											backgroundColor: 'white',
											color:
												currentMode === 'Dark'
													? 'white'
													: 'black',
											'&[data-active]': {
												backgroundColor: currentColor,
											},
										},
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Products;
