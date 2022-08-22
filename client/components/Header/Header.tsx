import Image from 'next/image';
import React, { FC, useState } from 'react';
import { useGlobalContext } from '../../context/Context';
import Link from 'next/link';
import InputSearchLarge from './InputSearchLarge';
import { MenuIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import InputSearchSmall from './InputSearchSmall';
import { NavBarData } from './NavBarData';
import { gql, useQuery } from '@apollo/client';

const Header: FC = () => {
	const { activeTab, setActiveTab, productList } = useGlobalContext();
	const [inputSearch, setInputSearch] = useState<string>('');

	const { data } = useQuery(gql`
		query getClients($limit: Int, $email: String) {
			clients(
				pagination: { limit: $limit }
				filters: { email: { eq: $email } }
			) {
				data {
					id
					attributes {
						lastname
						firstname
						email
						phone_number
						billing_address {
							address
							zip_code
							city
							country
						}
					}
				}
			}
		}
	`);

	const handleClick = () => {
		setActiveTab(!activeTab);
	};

	return (
		<header className="bg-gray-900">
			<div className="flex items-center p-1 flex-grow py-2">
				<div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
					<Image
						src="/favicon.ico"
						width={150}
						height={60}
						objectFit="contain"
						className="cursor-pointer"
					/>
				</div>
				<div
					className={`md:flex  md:gap-3 transition duration-500 ease-in-out delay-150 bg-headerLight z-[100] ${
						activeTab
							? 'translate-x-0 lg:hidden fixed top-0 left-0 h-full w-80 flex flex-col'
							: '-translate-x-full fixed top-0 left-0 h-full w-80 flex flex-col '
					}`}
				>
					<div className="cursor-pointer flex items-center bg-cdiscount_blue p-3 bg-headerDefault text-white">
						<div className="mx-auto flex space-x-3">
							<MenuIcon
								onClick={handleClick}
								className="h-6 mr-1"
							/>{' '}
							<p className="text-white font-extrabold text-base">
								Bonjour, Identifiez-vous
							</p>
						</div>
					</div>
					<ul className="mt-5">
						<Link href={`/products/`} passHref>
							<li className="text-white cursor-pointer px-7 py-3 hover:bg-headerDefault">
								Tous produits
							</li>
						</Link>
						{NavBarData?.map((item, i) => (
							<li
								key={i}
								// onClick={() => {
								// 	setActiveCatogory(item.title);
								// 	router.push('/category');
								// }}
								className="text-white cursor-pointer px-7 py-3 hover:bg-headerDefault"
							>
								{item.title}{' '}
							</li>
						))}
					</ul>
				</div>
				<InputSearchLarge
					inputSearch={inputSearch}
					setInputSearch={setInputSearch}
				/>
				<div className="text-white  flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
					<div>
						<Link href="/" passHref>
							<div className="cursor-pointer hover:underline">
								<p className="font-bold md:text-sm">
									Mon compte
								</p>
								<p>Identifiez-vous</p>
							</div>
						</Link>
					</div>
				</div>
				<div
					// onClick={() => router.push('/checkout')}
					className="relative py-2 cursor-pointer hover:underline flex items-center group text-white"
				>
					<ShoppingCartIcon className="h-10" />

					<div className="px-2">
						<p className="font-bold md:text-sm">Panier</p>
						<p className="text-xs">{productList?.length} article</p>
					</div>
					{/* Hover cart icon show the basket detail */}
					{/* <CartDetailHeader /> */}
				</div>
			</div>
			<InputSearchSmall
				inputSearch={inputSearch}
				setInputSearch={setInputSearch}
			/>
			<div className="flex items-center space-x-3 p-3 pl-6  shadow-md text-white text-sm">
				<p className="cursor-pointer hover:underline flex items-center">
					<MenuIcon
						onClick={handleClick}
						className="h-6 mr-1 lg:hidden"
					/>
				</p>
				<Link href={`/products/`} passHref>
					<li className="text-white cursor-pointer hover:underline  hidden lg:inline-flex">
						Tous produits
					</li>
				</Link>
				{NavBarData?.map((item, i) => (
					<li
						// onClick={() => {
						// 	setActiveCatogory(item.title);
						// 	router.push('/category');
						// }}
						key={i}
						className="cursor-pointer hover:underline hidden lg:inline-flex text-md"
					>
						{item.title}{' '}
					</li>
				))}
			</div>
		</header>
	);
};

export default Header;
