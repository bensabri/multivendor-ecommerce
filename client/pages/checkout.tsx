import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CheckoutProduct from '../components/Checkout/CheckoutProduct';
import Header from '../components/Header/Header';
import { useGlobalContext } from '../context/Context';
import Currency from 'react-currency-formatter';
import { useMutation, useQuery } from '@apollo/client';
import {
	CreateCommandeDocument,
	CreateCommandeMutation,
	CreateCommandeMutationVariables,
	CreateCommandeVendeurDocument,
	CreateCommandeVendeurMutation,
	CreateCommandeVendeurMutationVariables,
	GetClientsDocument,
	GetClientsQuery,
	GetClientsQueryVariables,
	GetOrdersDocument,
} from '../generated';
import { useId } from 'react';

const checkout: NextPage = () => {
	const { productList, user } = useGlobalContext();
	const [reRender, setReRender] = useState<boolean>(false);
	const router = useRouter();

	const { data: dataClient, loading } = useQuery<
		GetClientsQuery,
		GetClientsQueryVariables
	>(GetClientsDocument, {
		variables: {
			email: user,
			limit: 1,
		},
	});

	const total = productList?.reduce((a, b) => a + b.price * b.quantity, 0);

	const product = productList?.map((item) => ({
		// tranformed product for database
		category: item.category,
		title: item.title,
		price: item.price,
		quantity: item.quantity,
		total: item.total,
		reference: item.reference,
		image: item.image.data[0].id,
		vendeur: {
			seller_name: item.vendeur.name,
			seller_email: item.vendeur.email,
			delivery_price: item.vendeur.delivery_price,
		},
	}));

	const uniqueEmails = new Set();
	const status = productList // Remove duplicate email from seller email
		.filter((item) => {
			const isDuplicate = uniqueEmails.has(item.vendeur.email);

			uniqueEmails.add(item.vendeur.email);

			if (!isDuplicate) {
				return true;
			}

			return false;
		})
		.map((item) => ({
			seller_email: item.vendeur.email,
			delivery_price: item.vendeur.delivery_price,
		}));

	const statusOrder = status.map((item) => ({
		// mutate to database createOrder
		seller_email: item.seller_email,
	}));

	const stockProducts = productList.map(({ id, quantity, stock }) => {
		return {
			id: id,
			stock: stock,
			quantity: quantity,
		};
	});

	// Get unique seller
	const uniqueSeller = [
		...new Map(
			productList.map((item) => [item['seller_name'], item.vendeur])
		).values(),
	];

	// Render the list after delete an item
	const handleCount = () => {
		setReRender(!reRender);
	};

	// Get the seller products in one array
	const getSellerProducts = (email: string) => {
		let filterEmail = product.filter(
			(item) => item.vendeur.seller_email === email
		);

		return filterEmail;
	};

	const productSeller = status.map((item) => {
		return {
			vendeur: item.seller_email,
			delivery_price: item.delivery_price,
			product: getSellerProducts(item.seller_email),
		};
	});

	const getTotalSells = (name: string) => {
		// Get the total price amount per vendeur
		let filterName = productList
			.filter((item) => item.seller_name === name)
			.reduce((a, b) => a + b.total, 0);
		return filterName;
	};

	const totalPriceSeller = uniqueSeller.map((item) => {
		// Create an object of each vendeur by name, total delivery, price
		// get the total sells per vendeur
		return {
			name: item.name,
			total: getTotalSells(item.name),
			delivery_price: item.delivery_price,
		};
	});

	const deliveryPrice = totalPriceSeller.map((item) => {
		// from that object split the free delivery price and the payed
		// get if the delivery if free or not
		if (item.total < 50) {
			return { delivery_price: item.delivery_price };
		}
		return { delivery_price: 0 };
	});

	const totalDeliveryPrice = deliveryPrice.reduce(
		(a, b) => a + b.delivery_price,
		0
	);

	const [createOrderSeller, { data: orderDataSeller }] = useMutation<
		CreateCommandeVendeurMutation,
		CreateCommandeVendeurMutationVariables
	>(CreateCommandeVendeurDocument);

	// Create order by posting it to database

	const [createOrder, { data: orderDataCreated }] = useMutation<
		CreateCommandeMutation,
		CreateCommandeMutationVariables
	>(CreateCommandeDocument, {
		variables: {
			order_id: 646161,
			product: product,
			status: statusOrder,
			client_email: user,
			client: {
				firstname: dataClient?.clients?.data[0].attributes?.firstname,
				lastname: dataClient?.clients?.data[0].attributes?.lastname,
				email: dataClient?.clients?.data[0].attributes?.email,
				phone_number:
					dataClient?.clients?.data[0]?.attributes?.phone_number,
				billing_address: {
					address:
						dataClient?.clients?.data[0].attributes?.billing_address
							?.address,
					zip_code:
						dataClient?.clients?.data[0].attributes?.billing_address
							?.zip_code,
					city: dataClient?.clients?.data[0].attributes
						?.billing_address?.city,
					country:
						dataClient?.clients?.data[0].attributes?.billing_address
							?.country,
				},
			},
		},
	});

	const orderSeller = productSeller.map((item) => {
		return {
			delivery_price:
				item.product.reduce((a, b) => a + b.total, 0) >= 50
					? 0
					: item.delivery_price,
			order_id: 646161,
			total: Number(
				item.product.reduce((a, b) => a + b.total, 0).toFixed(2)
			),
			seller_email: item.vendeur,
			product: item.product,
			client: {
				firstname: dataClient?.clients?.data[0].attributes?.firstname,
				lastname: dataClient?.clients?.data[0].attributes?.lastname,
				email: dataClient?.clients?.data[0].attributes?.email,
				phone_number:
					dataClient?.clients?.data[0].attributes?.phone_number,
				billing_address: {
					address:
						dataClient?.clients?.data[0].attributes?.billing_address
							?.address,
					zip_code:
						dataClient?.clients?.data[0].attributes?.billing_address
							?.zip_code,
					city: dataClient?.clients?.data[0].attributes
						?.billing_address?.city,
					country:
						dataClient?.clients?.data[0].attributes?.billing_address
							?.country,
				},
			},
		};
	});

	const createCheckoutSession = async () => {
		localStorage.setItem('productList', JSON.stringify(productList));

		await Promise.all(
			orderSeller.map((item) => {
				createOrderSeller({
					variables: item,
				});
			})
		);
	};

	const handleCreateOrder = () => {
		createOrder();
	};

	return (
		<div className="bg-gray-100">
			<Head>
				<title>Checkout page </title>
				<link rel="icon" href="/croissant-de-lune.png" />
			</Head>
			<Header />
			<main className="lg:flex max-w-screen-xl mx-auto grid">
				{/* Left */}
				<div className="flex-grow m-2 md:m-5 shadow-md">
					<div className="flex flex-col p-5 space-y-4 bg-white rounded-md">
						<div className="flex justify-between border-b border-gray-300">
							<h1 className="text-xl md:text-2xl pb-4">
								{productList.length === 0
									? 'Votre panier est vide'
									: 'Détail de votre panier'}
							</h1>
							<h2 className="mt-5">Prix</h2>
						</div>
						{productList.map((item, i) => (
							<CheckoutProduct
								i={i}
								key={item.id}
								category={item.category}
								description={item.description}
								price={item.price}
								title={item.title}
								quantity={item.quantity}
								stock={item.stock}
								vendeur={item.vendeur}
								image={item.image}
								reference={item.reference}
								handleCount={handleCount}
							/>
						))}
						{totalPriceSeller.map((item, i) => (
							<div key={i} className="text-right text-md">
								{item.total < 50 && (
									<p className="text-xs">{`Plus que ${(
										50 - item.total
									).toFixed(
										2
									)} € d'achat pour la livraison gratuite avec ce vendeur `}</p>
								)}
								<span>{`Livraison: ${item.name}  `}</span>
								{item.total >= 50 ? (
									<span className="font-bold text-lg text-red-600 ml-2">
										<Currency quantity={0} currency="EUR" />
									</span>
								) : (
									<span className="font-bold text-lg text-red-600 ml-2">
										<Currency
											quantity={item.delivery_price}
											currency="EUR"
										/>
									</span>
								)}
							</div>
						))}
						{productList.length === 0 && (
							<p className="py-5 ">Aucun product</p>
						)}
						<p className="text-right text-xl">
							Sous-total:
							<span className="font-bold text-2xl text-red-600 ml-2">
								<Currency
									quantity={total + totalDeliveryPrice}
									currency="EUR"
								/>
							</span>
						</p>
					</div>
				</div>
				{/* Right */}
				{productList.length > 0 && (
					<div className="flex flex-col bg-white p-10 shadow-md my-5 mx-2 md:mx-5 lg:ml-0 lg:w-80 rounded-md">
						{!user && (
							<p className="pb-5">
								Vous devez vous connecté pour passé commande
							</p>
						)}
						<div className="space-y-10">
							<button
								role="link"
								type="button"
								onClick={createCheckoutSession}
								className="w-full p-2 m-5 font-semibold lg:m-0 text-xs md:text-sm bg-basketBtn hover:bg-green-600 text-white rounded outline-none"
							>
								CARTE BANCAIRE
							</button>
						</div>
					</div>
				)}
			</main>
		</div>
	);
};

export default checkout;
