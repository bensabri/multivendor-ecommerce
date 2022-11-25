import { useQuery } from '@apollo/client';
import { Loader } from '@mantine/core';
import Image, { ImageLoaderProps } from 'next/image';
import {
	GetOrdersDocument,
	GetOrdersQuery,
	GetOrdersQueryVariables,
} from '../../../generated';
import Header from '../../Header/Header';
import Currency from 'react-currency-formatter';
import { useGlobalContext } from '../../../context/Context';

const AccountCustomer = () => {
	const { user } = useGlobalContext();
	const { data, loading } = useQuery<GetOrdersQuery, GetOrdersQueryVariables>(
		GetOrdersDocument,
		{
			variables: {
				limit: 1000,
				client_email: user,
				is_payed: true,
				sort: 'createdAt:DESC',
			},
		}
	);

	const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
		return `http://localhost:1337${src}?w=${width}&q=${quality || 75}`;
	};
	function formatMyDate(value: string, locale = 'en-GB') {
		return new Date(value).toLocaleDateString(locale);
	}

	if (loading)
		return (
			<div className="flex justify-center items-center h-[30rem]">
				<Loader color="gray" />
			</div>
		);

	return (
		<div className="bg-gray-100">
			<Header />
			<main className="lg:flex max-w-screen-lg mx-auto grid">
				<div className="flex-grow m-2 md:m-5 space-y-5">
					<h2 className="text-center text-2xl">
						Historique des commandes
					</h2>
					{data?.commandes?.data.map(({ id, attributes }) => (
						<div
							key={id}
							className="flex flex-col p-5 space-y-4 shadow-md bg-white rounded-md"
						>
							<div className="flex justify-between border-b border-gray-300">
								<h2 className="text-xl md:text-2xl pb-4">
									{`Détail de votre commande N°${attributes?.order_id}`}
								</h2>
								<p>
									{`Date de commande  ${formatMyDate(
										attributes?.createdAt
									)} `}
								</p>
							</div>
							<div className="flex justify-between border-b border-gray-300">
								{attributes?.status!.map((item) => (
									<p
										key={id}
										className="text-xs md:text-md pb-4 font-bold"
									>
										{`Status: `}
										<span className="font-normal">
											{`${item?.seller_email?.slice(
												0,
												8
											)} ${item?.status?.replaceAll(
												'_',
												' '
											)}`}{' '}
										</span>
									</p>
								))}
							</div>
							{attributes?.product!.map((item) => (
								<div
									key={item?.id}
									className="grid grid-cols-6 border-b border-gray-300 pb-3"
								>
									{item?.image?.data ? (
										<Image
											loader={myLoader}
											height={100}
											width={100}
											objectFit="contain"
											alt={item.title!}
											src={
												item.image.data?.attributes
													?.url!
											}
										/>
									) : (
										<p>Aucune image</p>
									)}
									<div
										title={item?.title!}
										className="col-span-3 mx-5"
									>
										<p className="font-semibold line-clamp-2">
											{item?.title}
										</p>
										<p className="text-xs my-2">
											Vendu par:{' '}
											{item?.vendeur?.seller_name}
										</p>
									</div>
									<div className="mx-auto">
										<p>{`Qté ${item?.quantity}`}</p>
									</div>
									<div className="text-right text-xl text-red-600 font-bold">
										<Currency
											quantity={item?.price!}
											currency="EUR"
										/>
									</div>
								</div>
							))}
							<div className="text-right">
								<span>{`Livraison:`} </span>
								<span className="font-bold text-lg text-red-600 ml-1">
									<Currency
										quantity={
											attributes?.total_delivery_price!
										}
										currency="EUR"
									/>
								</span>
							</div>
							<p className="text-right text-xl">
								Sous-total:
								<span className="font-bold text-2xl text-red-600 ml-2">
									<Currency
										quantity={attributes?.total!}
										currency="EUR"
									/>
								</span>
							</p>
						</div>
					))}
				</div>
			</main>
		</div>
	);
};

export default AccountCustomer;
