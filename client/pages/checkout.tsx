import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import CheckoutProduct from '../components/Checkout/CheckoutProduct';
import Header from '../components/Header/Header';
import { useGlobalContext } from '../context/Context';

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
		image: item.image.id,
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

	return (
		<div className="bg-gray-100">
			<Head>
				<title>Checkout page </title>
				<link rel="icon" href="/croissant-de-lune.png" />
			</Head>
			<Header />
			<main className="lg:flex max-w-screen-xl mx-auto grid">
				<div className="flex-grow m-2 md:m-5 shadow-md">
					<div className="flex justify-between border-b border-gray-300">
						<h1 className="text-xl md:text-2xl pb-4">
							{productList.length === 0
								? 'Votre panier est vide'
								: 'Détail de votre panier'}
						</h1>
						<h2 className="mt-5">Prix</h2>
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
					</div>
				</div>
			</main>
		</div>
	);
};

export default checkout;
