import {
	AiOutlineCalendar,
	AiOutlineShoppingCart,
	AiOutlineAreaChart,
	AiOutlineBarChart,
	AiOutlineStock,
	AiOutlineHome,
} from 'react-icons/ai';
import { BiStore } from 'react-icons/bi';
import { FiShoppingBag, FiPieChart } from 'react-icons/fi';

export const links = [
	{
		title: 'Dashboard',
		links: [
			{
				name: '',
				icon: <AiOutlineHome />,
			},
		],
	},

	{
		title: 'Pages',
		links: [
			{
				name: 'store',
				icon: <BiStore />,
			},
			{
				name: 'commandes',
				icon: <AiOutlineShoppingCart />,
			},
			{
				name: 'products',
				icon: <FiShoppingBag />,
			},
		],
	},
	{
		title: 'Apps',
		links: [
			{
				name: 'calendar',
				icon: <AiOutlineCalendar />,
			},
		],
	},
	{
		title: 'Charts',
		links: [
			{
				name: 'line',
				icon: <AiOutlineStock />,
			},
			{
				name: 'area',
				icon: <AiOutlineAreaChart />,
			},

			{
				name: 'bar',
				icon: <AiOutlineBarChart />,
			},
			{
				name: 'pie',
				icon: <FiPieChart />,
			},
		],
	},
];

export const themeColors = [
	{
		name: 'blue-theme',
		color: '#1A97F5',
	},
	{
		name: 'green-theme',
		color: '#03C9D7',
	},
	{
		name: 'purple-theme',
		color: '#7352FF',
	},
	{
		name: 'red-theme',
		color: '#FF5C8E',
	},
	{
		name: 'indigo-theme',
		color: '#1E4DB7',
	},
	{
		color: '#FB9678',
		name: 'orange-theme',
	},
];
