import { Loader } from '@mantine/core';
import dynamic from 'next/dynamic';
import { useGlobalContext } from '../../context/Context';
import { useState } from 'react';
import { useLazyQuery, useQuery } from '@apollo/client';
import {
	VendeursDocument,
	VendeursQuery,
	VendeursQueryVariables,
} from '../../generated';

const CreateProducts = dynamic(
	() => {
		return import('../../components/Dashboard/Seller/CreateProducts');
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
	} = useGlobalContext();

	const [productPerPage, setProductPerPage] = useState<number>(10);
	const [sortPrice, setSortPrice] = useState<boolean>(false);
	const [sortStock, setSortStock] = useState<boolean>(false);
	const [search, setSearch] = useState<string>('');
	const [filter, setFilter] = useState('price:asc');
	const [price, setPrice] = useState<string>('');
	const [stock, setStock] = useState<string>('');
	const [open, setOpen] = useState<boolean>(false);

	const { data: vendeur, loading: loadVend } = useQuery<
		VendeursQuery,
		VendeursQueryVariables
	>(VendeursDocument, {
		variables: {
			email: 'vendeurs@mail.com',
		},
	});

	// const [getProducts, { data, loading }] = useLazyQuery()

	return <div>Products</div>;
};

export default Products;
