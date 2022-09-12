import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import Head from 'next/head';
import { useRef, useState } from 'react';
import Header from '../../components/Header/Header';
import { useGlobalContext } from '../../context/Context';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Currency from 'react-currency-formatter';
import { NativeSelect } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import {
	GetProductsDocument,
	GetProductsQuery,
	GetProductsQueryVariables,
	Vendeur,
} from '../../generated';

interface Idata {
	data: GetProductsQuery;
}

const ProductDetail: NextPage<Idata> = ({ data }) => {
	const { product, setProduct } = useGlobalContext();
	const [quantity, setQuantity] = useState<number>(1);
	const [readMore, setReadMore] = useState<boolean>(false);

	const galeryRef = useRef<ImageGallery>(null);

	const productArray = data.products?.data.map((item) => {
		return {
			id: item.id,
			title: item.attributes?.title,
			delivery_time: item.attributes?.delivery_time,
			description: item.attributes?.description,
			price: item.attributes?.price,
			stock: item.attributes?.stock,
			category: item.attributes?.category,
			image: item.attributes?.image,
			vendeur: item.attributes?.vendeur,
			seller_name: item.attributes?.seller_name,
			reference: item.attributes?.reference,
		};
	});

	const images =
		productArray &&
		productArray[0].image?.data.map((item) => {
			return {
				original: `http://localhost:1337${item.attributes?.url}`,
				thumbnail: `http://localhost:1337${item.attributes?.formats.thumbnail.url}`,
			};
		});

	const handleAddToBasket = (
		title: string | undefined,
		description: string | undefined,
		price: number | undefined,
		category: string | undefined,
		image: string | undefined,
		vendeur: Vendeur,
		seller_name: string | undefined
	) => {
		if (productArray) {
			setProduct([
				...product,
				{
					id: productArray[0].id,
					category: category,
					title: title,
					delivery_time: productArray[0].delivery_time,
					description: description,
					price: price,
					total: price! * quantity,
					quantity: Number(quantity),
					stock: productArray[0].stock,
					image: image,
					vendeur: vendeur,
					seller_name: seller_name,
					reference: productArray[0].reference,
				},
			]);
			showNotification({
				title: 'Ajouté aux panier',
				message: `L'article ${productArray[0].title?.substring(
					0,
					20
				)} a été ajouté aux panier`,
			});
		}
	};

	// Feed the select with stock from database
	const dataSelect =
		productArray &&
		Array(productArray[0].stock)
			.fill(productArray[0].stock)
			.map((_, i) => {
				return String(i + 1);
			});

	return (
		<>
			{productArray && (
				<div className="bg-gray-100">
					<Head>
						<title>{productArray[0].title} </title>
						<link rel="icon" href="/croissant-de-lune.png" />
					</Head>
					<Header />
					<main className="lg:flex max-w-screen-xl mx-auto grid">
						<div className="grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-5 flex-grow m-2 md:m-5">
							{/* Left */}
							<div className="lg:col-span-3 lg:p-3 xl:p-5 space-y-4 bg-white shadow-md rounded-md">
								<div className="pb-3 lg:flex">
									<div className="lg:max-w-md">
										<ImageGallery
											items={images!}
											showFullscreenButton={false}
											showPlayButton={false}
											showNav={false}
											slideOnThumbnailOver={true}
											slideDuration={200}
											// thumbnailPosition="left"
											ref={galeryRef}
											onClick={() =>
												galeryRef.current?.fullScreen()
											}
										/>
									</div>
									<div className="py-5 flex-1 space-y-5">
										<h2
											title={productArray[0].title}
											className="text-xl xl:text-2xl uppercase"
										>
											{`${productArray[0].title?.substring(
												0,
												65
											)}...`}
										</h2>
										<div className="my-auto border-b border-gray-300">
											{readMore ? (
												<div
													dangerouslySetInnerHTML={{
														__html: productArray[0]
															.description!,
													}}
													className="text-xs md:text-sm"
												/>
											) : (
												<div
													dangerouslySetInnerHTML={{
														__html: productArray[0].description!.substring(
															0,
															300
														)!,
													}}
													className="text-xs md:text-sm"
												/>
											)}
											<button
												className="text-blue-800 hover:underline text-xs"
												onClick={() =>
													setReadMore(!readMore)
												}
											>
												{productArray[0].description!
													.length > 300 && readMore
													? ' En lire moins'
													: ' En lire plus'}
											</button>
										</div>
									</div>
								</div>
								{/* Right */}
							</div>
							<div className="lg:col-span-1 flex flex-col p-4 justify-around border-2 text-center lg:text-left xl:text-left xl:p-4 space-y-6 lg:space-y-10 rounded-md bg-white shadow-md">
								<div className="text-red-500 text-2xl lg:text-4xl font-bold">
									<Currency
										quantity={productArray[0].price!}
										currency="EUR"
									/>
								</div>
								<div>
									<p className="text-sm font-semibold xl:text-base p-4">
										Expédier sous:{' '}
										<span className="text-sm xl:text-base font-normal">
											{productArray[0].delivery_time}{' '}
											Jours
										</span>
									</p>
								</div>
								<div className="w-[4rem] mx-auto">
									{dataSelect && (
										<NativeSelect
											label="Quantité"
											data={dataSelect}
											onChange={(event) =>
												setQuantity(
													Number(
														event.currentTarget
															.value
													)
												)
											}
											withAsterisk
										/>
									)}
								</div>
								{productArray[0].stock! > 5 ? (
									<div>
										<p className="text-green-600 font-semibold">
											En Stock
										</p>
									</div>
								) : productArray[0].stock! > 0 ? (
									<div>
										<p className="text-orange-500 font-semibold">
											{`Moins de 5 en stock`}
										</p>
									</div>
								) : productArray[0].stock! === 0 ? (
									<p className="text-red-600 font-semibold">
										Rupture de Stock
									</p>
								) : (
									''
								)}
								<button
									disabled={productArray[0].stock === 0}
									onClick={() => {
										handleAddToBasket(
											productArray[0].title,
											productArray[0].description,
											productArray[0].price,
											productArray[0].category,
											productArray[0].image?.data[0]
												.attributes?.url,
											productArray[0].vendeur?.data
												?.attributes!,
											productArray[0].seller_name
										);
									}}
									className={`${
										productArray[0].stock === 0
											? 'bg-gray-400 cursor-not-allowed p-2 mx-4 text-md font-semibold lg:text-lg text-white rounded'
											: 'bg-basketBtn hover:bg-green-500 p-2 mx-2 lg:text-md xl:text-lg font-normal text-white rounded transition duration-150 ease-in'
									}`}
								>
									Ajouter au panier
								</button>
								<p className="text-sm xl:text-base p-4">
									Vendu par: {productArray[0].seller_name}{' '}
								</p>
							</div>
						</div>
					</main>
				</div>
			)}
		</>
	);
};

export default ProductDetail;

export const getStaticPaths = async () => {
	const client = new ApolloClient({
		uri: `http://localhost:1337/graphql`,
		cache: new InMemoryCache(),
	});

	const { data } = await client.query<
		GetProductsQuery,
		GetProductsQueryVariables
	>({
		query: GetProductsDocument,
		variables: { limit: 1000 },
	});

	const paths = data.products?.data.map((item) => {
		return {
			params: { productSlug: item.attributes?.slug.toString() },
		};
	});

	return {
		paths,
		fallback: 'blocking',
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const client = new ApolloClient({
		uri: `http://localhost:1337/graphql`,
		cache: new InMemoryCache(),
	});
	const { params } = context;

	const { data } = await client.query<
		GetProductsQuery,
		GetProductsQueryVariables
	>({
		query: GetProductsDocument,
		variables: { slug: params?.productSlug?.toString() },
	});

	return {
		props: {
			data,
		},
		revalidate: 60,
	};
};
