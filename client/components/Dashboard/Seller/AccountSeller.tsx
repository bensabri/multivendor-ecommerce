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
import Navbar from '../Navbar';
import ThemeSettings from '../../ThemeSettings';
import { BsBoxSeam } from 'react-icons/bs';
import { FiBarChart } from 'react-icons/fi';
import { PieChart, Pie, Tooltip } from 'recharts';

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
			value: handleCount(attributes?.status!),
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
			>
				<div className="fixed md:static  dark:bg-main-dark-bg navbar w-full ">
					<Navbar />
				</div>
				{themeSettings && <ThemeSettings />}
				<div className="mt-12">
					<div className="flex flex-wrap lg:flex-nowrap justify-center">
						<div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-contain bg-right ">
							<div className="flex justify-between items-center">
								<div>
									<p className="font-bold text-gray-400">
										{`Total de vos gains`}
									</p>
									<p className="text-2xl">{total} €</p>
								</div>
							</div>
						</div>
						<div className="flex m-3 flex-wrap justify-center gap-1 items-center">
							<div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
								<button
									onClick={() =>
										router.push('/account/products')
									}
									type="button"
									style={{
										color: 'rgb(255, 244, 229)',
										backgroundColor: 'rgb(254, 201, 15)',
									}}
									className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
								>
									<BsBoxSeam />
								</button>
								<p className="mt-3">
									<span className="text-lg font-semibold">
										{product &&
											product.products?.data.length}
									</span>
								</p>
								<p className="text-sm text-gray-400  mt-1">
									{`Produits`}
								</p>
							</div>
							<div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
								<button
									type="button"
									style={{
										color: 'white',
										backgroundColor: '#59d649',
									}}
									className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
								>
									<FiBarChart />
								</button>
								<p className="mt-3">
									<span className="text-lg font-semibold">
										{
											orderSeller?.commandeVendeurs?.data
												.length
										}
									</span>
								</p>
								<p className="text-sm text-gray-400  mt-1">
									{`Total ventes`}
								</p>
							</div>
						</div>
					</div>
					<div className="flex gap-10 flex-wrap justify-center">
						<div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780 ">
							<div className="flex justify-between">
								<p className="font-semibold text-3xl">
									Commandes
								</p>
							</div>
							<div className="grid grid-cols-2 mt-2 m-4">
								<div className="my-auto  border-r-1 pr-10 border-color">
									{arrUniq.map(({ attributes }, i) => (
										<div
											className="flex justify-between items-center space-y-3"
											key={i}
										>
											<p>
												{attributes?.status.replaceAll(
													'_',
													' '
												)}
											</p>
											<p>
												{handleCount(
													attributes?.status!
												)}
											</p>
										</div>
									))}
								</div>
								<div className="mt-8 z-10">
									<PieChart width={300} height={300}>
										<Pie
											dataKey="value"
											label
											labelLine={false}
											isAnimationActive={false}
											data={data}
											cx={150}
											cy={150}
											innerRadius={30}
											outerRadius={80}
										/>
										<Tooltip />
									</PieChart>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AccountSeller;
