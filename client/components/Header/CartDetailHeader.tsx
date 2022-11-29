import Image, { ImageLoaderProps } from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { useGlobalContext } from '../../context/Context';
import Currency from 'react-currency-formatter';

const CartDetailHeader = () => {
	const { productList } = useGlobalContext();
	const router = useRouter();

	const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
		return `http://localhost:1337${src}?w=${width}&q=${quality || 75}`;
	};

	const total = productList.reduce((a, b) => a + b.price * b.quantity, 0);

	return (
		<div className="absolute top-12 right-0 z-100 p-6 shadow bg-white w-[28rem] invisible delay-500 md:group-hover:visible">
			{productList.length === 0 && (
				<p className="text-black text-lg p-5 text-center">
					Panier vide
				</p>
			)}
			{productList.map((item) => (
				<div
					key={item.id}
					className="grid grid-cols-4 border-b p-2  border-gray-400 cursor-default"
				>
					<Image
						loader={myLoader}
						height={50}
						width={50}
						objectFit="contain"
						src={item.image.data[0].attributes?.url!}
					/>
					<div className="col-span-2 mx-2 ">
						<p
							title={item.title}
							className="text-black text-base font-semibold"
						>
							{item.title.substring(0, 25)}
						</p>
					</div>
					<div className="text-right col-span-1 text-lg text-red-600 font-bold">
						<Currency quantity={item.price} currency="EUR" />
					</div>
				</div>
			))}
			<p className="text-right text-black text-xl py-2">
				Sous-total:
				<span className="font-bold text-2xl text-red-600 ml-2">
					<Currency quantity={total} currency="EUR" />
				</span>
			</p>
			<div className="flex justify-center py-5 bg-gray-100">
				{productList.length > 0 && (
					<button
						onClick={() => router.push('/checkout')}
						className="px-3 py-2 text-sm font-semibold bg-basketBtn hover:bg-green-500 text-white rounded transition duration-150 ease-in outline-none"
					>
						VOIR MON PANIER
					</button>
				)}
			</div>
		</div>
	);
};

export default CartDetailHeader;
