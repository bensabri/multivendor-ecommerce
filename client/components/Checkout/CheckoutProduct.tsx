import { NativeSelect } from '@mantine/core';
import Image, { ImageLoaderProps } from 'next/image';
import { FC, useEffect, useState } from 'react';
import Currency from 'react-currency-formatter';
import { IproductListVendeur } from '../../@types/model';
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
	image: string;
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
	const [quantityCheckout, setQuantity] = useState<number>(quantity);
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

	// Feed the select with stock from database
	const dataSelect = Array(stock)
		.fill(stock)
		.map((_, i) => {
			return String(i + 1);
		});

	return (
		<div className="grid grid-cols-5 border-b border-gray-300 pb-3">
			<Image
				alt={title}
				loader={myLoader}
				height={100}
				width={100}
				objectFit="contain"
				src={image}
			/>
			<div className="col-span-3 mx-5 ">
				<p className="font-semibold line-clamp-1">{title}</p>
				<div
					dangerouslySetInnerHTML={{
						__html: description.slice(0, 100),
					}}
					className="text-xs my-2 md:text-sm"
				/>
				<p className="text-xs my-2">Vendu par: {vendeur.name}</p>
				<div className="mt-3 flex items-end w-40">
					<NativeSelect
						label="Quantité"
						data={dataSelect}
						onChange={(event) => {
							setQuantity(Number(event.currentTarget.value));
							const updateQte = [...productList];
							updateQte[i].quantity = Number(
								event.currentTarget.value
							);
							handleCount();
						}}
						value={quantityCheckout}
					/>
					<p
						onClick={() => {
							removeProduct(reference);
						}}
						className="text-xs ml-5 mb-1 cursor-pointer hover:underline"
					>
						Supprimer
					</p>
				</div>
			</div>
			<div className="text-right text-xl text-red-600 font-bold">
				<Currency
					quantity={(quantityCheckout || 1) * price}
					currency="EUR"
				/>
			</div>
		</div>
	);
};

export default CheckoutProduct;
