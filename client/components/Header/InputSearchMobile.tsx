import { LazyQueryExecFunction } from '@apollo/client';
import { SearchIcon } from '@heroicons/react/outline';
import React, { FC } from 'react';
import { Exact, GetProductsQuery, InputMaybe } from '../../generated';
import { useRouter } from 'next/router';
import Image, { ImageLoaderProps } from 'next/image';

type Iprops = {
	data: GetProductsQuery | undefined;
	inputSearch: string;
	setInputSearch: React.Dispatch<React.SetStateAction<string>>;
	searchProduct: LazyQueryExecFunction<
		GetProductsQuery,
		Exact<{
			limit?: InputMaybe<number> | undefined;
			contains?: InputMaybe<string> | undefined;
		}>
	>;
};

const InputSearchMobile: FC<Iprops> = ({
	inputSearch,
	setInputSearch,
	searchProduct,
	data,
}) => {
	const router = useRouter();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputSearch(e.target.value);
		if (inputSearch?.length >= 2) {
			searchProduct({
				variables: {
					limit: 5,
					contains: 'hijab',
				},
			});
		}
	};

	const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
		return `http://localhost:1337${src}?w=${width}&q=${quality || 75}`;
	};

	return (
		<div
			className={`${
				inputSearch?.length >= 2 ? 'rounded-t-md' : 'rounded-md'
			} sm:hidden h-8 cursor-pointer bg-white hover:bg-blue-100 mx-5`}
		>
			<div className="relative flex">
				<input
					type="text"
					onChange={handleChange}
					value={inputSearch}
					className="p-2 h-8 w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 pb-3"
					placeholder="Chercher votre article ici"
				/>
				<SearchIcon className="h-8 p-2" />
				<div className="absolute z-100 top-8 left-0 bg-white rounded-b-md w-full">
					{inputSearch?.length >= 2 &&
						data?.products?.data.map((item) => (
							<div
								key={item.id}
								className="flex hover:bg-gray-100 border-b-2 p-2 z-100"
							>
								<Image
									loader={myLoader}
									src={
										item.attributes?.image.data[0]
											.attributes?.url!
									}
									property="property"
									height={60}
									width={60}
									objectFit="contain"
								/>
								<p
									onClick={() => {
										router.push(
											`/products/${item.attributes?.slug}`
										);
										setInputSearch('');
									}}
									className="p-2 font-semibold"
								>
									{item.attributes?.title}{' '}
								</p>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default InputSearchMobile;
