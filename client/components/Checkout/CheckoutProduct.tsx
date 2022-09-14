import { NativeSelect } from '@mantine/core';
import Image, { ImageLoaderProps } from 'next/image';
import { FC, useEffect, useState } from 'react';
import Currency from 'react-currency-formatter';
import { IProductListImage, IproductListVendeur } from '../../@types/model';
import { useGlobalContext } from '../../context/Context';

interface Iprops {
	i: number;
	key: string | null | undefined;
	category: string;
	description: string;
	price: number;
	title: string;
	quantity: number;
	stock: number;
	vendeur: IproductListVendeur;
	image: IProductListImage;
	reference: number;
	handleCount: () => void;
}

const CheckoutProduct: FC<Iprops> = ({
	category,
	description,
	price,
	title,
	quantity,
	stock,
	vendeur,
	image,
	reference,
	handleCount,
	i,
}) => {
	const [quantityCheckout, setQuantity] = useState<number>(1);
	const { productList, setProductList, setProduct } = useGlobalContext();

	const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
		return `http://localhost:1337${src}?w=${width}&q=${quality || 75}`;
	};

	// Remove product from the checkout list
	const removeProduct = (id: number) => {
		const removedProduct = productList.filter(
			(product) => product.reference !== id
		);
		setProductList(removedProduct);
		setProduct(removedProduct);
	};

	return (
		<div className="grid grid-cols-5 border-b border-gray-300 pb-3"></div>
	);
};

export default CheckoutProduct;
