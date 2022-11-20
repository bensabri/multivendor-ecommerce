import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CheckoutProduct from '../components/Checkout/CheckoutProduct';
import Header from '../components/Header/Header';
import { useGlobalContext } from '../context/Context';
import Currency from 'react-currency-formatter';

const checkout: NextPage = () => {
	const { productList } = useGlobalContext();
	const [reRender, setReRender] = useState<boolean>(false);
	const router = useRouter();

	const total = productList?.reduce((a, b) => a + b.price * b.quantity, 0);

	const product = productList?.map((item) => ({
		// tranformed product for database
		category: item.category,
		title: item.title,
		price: item.price,
		quantity: item.quantity,
		total: item.total,
		reference: item.reference,
		image: item.image,
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
		}));

	// Render the list after delete an item
	const handleCount = () => {
		setReRender(!reRender);
	};

	const handletotalDelivery = () => {
		const getTotalSells = (name: string): number => {
			// Get the total price amount per vendeur
			let filterName = productList
				.filter((item) => item.seller_name === name)
				.reduce((a, b) => a + b.total, 0);
			return filterName;
		};

		const uniqueSeller = [
			...new Map(
				productList.map((item) => [item['seller_name'], item.vendeur])
			).values(),
		];

		const totalPriceSeller = uniqueSeller.map((item) => {
			// Create an object of each vendeur by name, total delivery, price, get the total sells per vendeur
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

		return {
			totalDeliveryPrice: totalDeliveryPrice,
			totalPriceSeller: totalPriceSeller,
			deliveryPrice: deliveryPrice,
		};
	};

	const { totalDeliveryPrice, totalPriceSeller } = handletotalDelivery();

	useEffect(() => {
		handletotalDelivery();
	}, [reRender]);

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
			</main>
		</div>
	);
};

export default checkout;
