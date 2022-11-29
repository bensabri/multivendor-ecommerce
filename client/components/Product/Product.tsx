import Image, { ImageLoaderProps } from 'next/image';
import { useRouter } from 'next/router';
import { imageProduct, IProductsAttributes } from '../../@types/model';
import Currency from 'react-currency-formatter';
import { Vendeur } from '../../generated';
import { useGlobalContext } from '../../context/Context';
import { FC, useState } from 'react';
import { showNotification } from '@mantine/notifications';
import { Affix, Button, Transition } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { ArrowNarrowUpIcon } from '@heroicons/react/solid';

type Iprops = {
	id: string | null | undefined;
	attributes: IProductsAttributes['attributes'];
};

const Product: FC<Iprops> = ({ id, attributes }) => {
	const [scroll, scrollTo] = useWindowScroll();
	const { product, setProduct } = useGlobalContext();
	const [quantity] = useState<number>(1);
	const router = useRouter();

	const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
		return `http://localhost:1337${src}?w=${width}&q=${quality || 75}`;
	};

	const handleAddToBasket = (
		title: string | undefined,
		description: string | undefined,
		price: number | undefined,
		category: string | undefined,
		image: imageProduct,
		vendeur: Vendeur
	) => {
		setProduct([
			...product,
			{
				id: id,
				category: category,
				title: title,
				delivery_time: attributes?.delivery_time,
				description: description,
				price: price,
				total: attributes?.price! * quantity,
				quantity: Number(quantity),
				stock: attributes?.stock,
				image: image,
				vendeur: vendeur,
				seller_name: attributes?.seller_name,
				reference: attributes?.reference,
			},
		]);
		showNotification({
			title: 'Ajouté aux panier',
			message: `L'article ${attributes?.title.substring(
				0,
				20
			)} a été ajouté aux panier`,
		});
	};

	return (
		<div className="relative flex flex-col m-5 bg-white z-30 p-10 rounded-lg">
			<p className="absolute top-2 right-2 text-xs italic text-gray-400">
				{attributes?.category.replaceAll('_', ' ')}
			</p>
			<Image
				loader={myLoader}
				src={attributes?.image.data[0].attributes?.url!}
				property="property"
				height={200}
				width={200}
				objectFit="contain"
				className="cursor-pointer"
				onClick={() => router.push(`/products/${attributes?.slug}`)}
			/>
			<h4
				title={attributes?.title}
				className="my-3 font-semibold line-clamp-1"
			>
				{attributes?.title}
			</h4>
			{attributes?.stock! > 5 ? (
				<p className="text-green-600 font-normal">{`En Stock`}</p>
			) : attributes?.stock! > 0 ? (
				<p className="text-orange-500 font-normal">{`Moins de 5 en stock`}</p>
			) : attributes?.stock! === 0 ? (
				<p className="text-red-600 font-normal">{`Rupture de Stock`}</p>
			) : (
				''
			)}
			<div
				dangerouslySetInnerHTML={{
					__html: attributes?.description.slice(0, 30)!,
				}}
				className="text-xs md:text-sm my-2 line-clamp-2"
			/>
			{attributes?.stock! > 0 && (
				<div className="mb-5 text-2xl text-red-600 font-bold">
					<Currency quantity={attributes?.price!} currency="EUR" />
				</div>
			)}
			{attributes?.stock! > 0 && (
				<button
					onClick={() => {
						handleAddToBasket(
							attributes?.title,
							attributes?.description,
							attributes?.price,
							attributes?.category,
							attributes?.image!,
							attributes?.vendeur?.data?.attributes!
						);
					}}
					className="p-2 mx-5 text-md font-semibold lg:text-lg bg-basketBtn hover:bg-green-500 text-white rounded transition duration-150 ease-in"
				>
					Ajouter au panier
				</button>
			)}
			<Affix position={{ bottom: 20, right: 20 }}>
				<Transition transition="slide-up" mounted={scroll.y > 0}>
					{(transitionStyles) => (
						<Button
							className="bg-blue-500"
							leftIcon={<ArrowNarrowUpIcon className="w-4" />}
							style={transitionStyles}
							onClick={() => scrollTo({ y: 0 })}
						>
							Scroll to top
						</Button>
					)}
				</Transition>
			</Affix>
		</div>
	);
};

export default Product;
