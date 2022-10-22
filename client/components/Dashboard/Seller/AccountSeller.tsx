import {
	CommandeVendeursDocument,
	CommandeVendeursQuery,
	CommandeVendeursQueryVariables,
	ProductsDocument,
	ProductsQuery,
	ProductsQueryVariables,
	VendeursQuery,
} from '../../../generated';
import { FC } from 'react';
import { useRouter } from 'next/router';
import { useGlobalContext } from '../../../context/Context';
import { useQuery } from '@apollo/client';
import HeaderSeller from '../HeaderSeller';

interface Iprops {
	vendeur: VendeursQuery | undefined;
}

const AccountSeller: FC<Iprops> = ({ vendeur }) => {
	const { activeMenu, currentColor, themeSettings, currentMode } =
		useGlobalContext();

	const router = useRouter();

	const { data: product } = useQuery<ProductsQuery, ProductsQueryVariables>(
		ProductsDocument,
		{
			variables: {
				seller_name: 'vendeur1',
				limit: 1000,
			},
		}
	);

	const { data: orderSeller } = useQuery<
		CommandeVendeursQuery,
		CommandeVendeursQueryVariables
	>(CommandeVendeursDocument);

	const total = orderSeller?.commandeVendeurs?.data
		.reduce((a, b) => a + b.attributes?.total!, 0)
		.toFixed(2);

	let arrUniq = [
		...new Map(
			orderSeller?.commandeVendeurs?.data?.map((item) => [
				item.attributes?.status,
				item,
			])
		).values(),
	];

	const handleCount = (status: string) => {
		let statusCount = orderSeller?.commandeVendeurs?.data.filter(
			({ attributes }) => attributes?.status === status
		).length;
		return statusCount;
	};

	const COLORS = ['#59d649', '#0088FE', '#FFBB28', '#49d6d4'];

	const data = arrUniq.map(({ attributes }, index) => {
		return {
			name: attributes?.status.replaceAll('_', ' '),
			value: attributes?.status,
			fill:
				attributes?.status === 'En_attente' ? '#f52314' : COLORS[index],
		};
	});

	return (
		<div
			className={`flex relative dark:bg-main-dark-bg ${
				currentMode === 'Dark' ? 'dark' : ''
			}`}
		>
			{/* <Header /> */}
			<HeaderSeller />
			<div
				className={
					activeMenu
						? 'dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full  '
						: 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
				}
			></div>
		</div>
	);
};

export default AccountSeller;
