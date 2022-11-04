import { Modal } from '@mantine/core';
import Image, { ImageLoaderProps } from 'next/image';
import React, { useState } from 'react';
import {
	DeleteProductMutationFn,
	ProductsSearchDocument,
	ProductsSearchQuery,
	UpdateProductMutation,
	UpdateProductMutationFn,
} from '../../../generated';
import Header from '../Header';
import { PencilIcon } from '@heroicons/react/solid';

interface iProps {
	dataUpdatedProduct: UpdateProductMutation | null | undefined;
	price: number;
	setPrice: React.Dispatch<React.SetStateAction<number>>;
	stock: number;
	setStock: React.Dispatch<React.SetStateAction<number>>;
	updateProduct: UpdateProductMutationFn;
	deleteProduct: DeleteProductMutationFn;
	title: string;
	description: string;
	currentPrice: number | undefined;
	currentStock: number | undefined;
	id: string;
	currentMode: string;
	currentColor: string;
	image: string | undefined;
}

const EditProduct = ({
	dataUpdatedProduct,
	updateProduct,
	deleteProduct,
	price,
	setPrice,
	setStock,
	stock,
	id,
	title,
	description,
	currentPrice,
	currentStock,
	currentMode,
	currentColor,
	image,
}: iProps) => {
	const [opened, setOpened] = useState<boolean>(false);
	const [openedSecond, setOpenedSecond] = useState<boolean>(false);

	// Vendeur can change the price and stock of the product

	const handleUpdateProduct = async (e: React.SyntheticEvent) => {
		e.preventDefault;
		await updateProduct({
			variables: {
				id,
				price,
				stock,
			},
		});
	};

	const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
		return `http://localhost:1337${src}?w=${width}&q=${quality || 75}`;
	};

	const handleDeleteProduct = async () => {
		await deleteProduct({
			variables: {
				id,
			},
			// update: (cache, { data }) => {
			// 	cache.writeQuery({
			// 		query: ProductsSearchDocument,
			// 		data: data,
			// 	});
			// },
			refetchQueries: [ProductsSearchDocument],
		}).then(() => setOpenedSecond(false));
	};

	return (
		<div>
			<Modal
				classNames={{
					modal: `bg-main-bg ${
						currentMode === 'Dark' ? 'bg-secondary-dark-bg' : ''
					}`,
				}}
				opened={opened}
				size="xl"
				onClose={() => setOpened(false)}
			>
				<div className={`${currentMode === 'Dark' ? 'dark' : ''}`}>
					<div className="flex-grow m-2 md:m-5">
						<div className="lg:p-3 xl:p-5 space-y-4 bg-white dark:bg-main-dark-bg shadow rounded-xl">
							<Header
								category="page"
								title="Modification  produit"
							/>
							<h2
								title={title}
								className="text-xl xl:text-2xl uppercase dark:text-gray-200"
							>
								{`${title.substring(0, 65)}...`}
							</h2>
							<div className="flex items-center h-auto">
								<div className="lg:p-3 xl:p-5 space-y-4 bg-white dark:bg-main-dark-bg">
									<Image
										width={150}
										height={150}
										loader={myLoader}
										objectFit="contain"
										src={image!}
									/>
								</div>
								<div
									title={description}
									dangerouslySetInnerHTML={{
										__html: description.substring(0, 200),
									}}
									className="text-xs md:text-sm dark:text-gray-200"
								/>
							</div>
							<div className="border-b border-gray-300 mb-2" />
							<div className="flex flex-col items-center space-y-8">
								<form
									className="space-y-8"
									onSubmit={handleUpdateProduct}
								>
									<div className="flex flex-col">
										<label
											htmlFor="price"
											className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 dark:text-gray-200"
										>
											Prix
										</label>
										<div className="relative">
											<input
												id="price"
												defaultValue={Number(
													currentPrice
												)}
												min="1"
												type="number"
												step="0.01"
												onChange={(
													e: React.ChangeEvent<HTMLInputElement>
												) =>
													setPrice(
														Number(e.target.value)
													)
												}
												className="dark:bg-main-dark-bg dark:text-gray-200 focus:border-green-400 focus:ring-green-500 text-sm sm:text-base placeholder-gray-500 pl-3 rounded-lg border border-gray-400 py-1 focus:outline-none"
												placeholder="Nouveau prix"
											/>
										</div>
									</div>
									<div className="flex flex-col">
										<label
											htmlFor="stock"
											className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 dark:text-gray-200"
										>
											Stock{' '}
										</label>
										<div className="relative">
											<input
												type="number"
												id="stock"
												defaultValue={Number(
													currentStock
												)}
												min="0"
												className="dark:bg-main-dark-bg dark:text-gray-200 focus:border-green-400 focus:ring-green-500 text-sm sm:text-base placeholder-gray-500 pl-3 rounded-lg border border-gray-400 py-1 focus:outline-none"
												placeholder="Nouveau stock"
												required
												onChange={(
													e: React.ChangeEvent<HTMLInputElement>
												) =>
													setStock(
														Number(e.target.value)
													)
												}
											/>
										</div>
									</div>
									<button
										style={{
											backgroundColor: currentColor,
										}}
										className={` w-full p-2 lg:text-md  font-normal text-white rounded transition duration-150 ease-in`}
									>
										Modifier
									</button>
								</form>
								<button
									onClick={() => setOpenedSecond(true)}
									className=" ml-[18rem] text-red-500 p-2 lg:text-md  font-semibold border border-red-500 rounded transition duration-150 ease-in "
								>
									Supprimer
								</button>
								{/* Delete product to disable comment from here */}
								<Modal
									opened={openedSecond}
									classNames={{
										modal: `${
											currentMode === 'Dark'
												? 'bg-secondary-dark-bg'
												: ''
										}`,
									}}
									onClose={() => setOpenedSecond(false)}
								>
									<h2 className="mb-5 text-red-600">
										Comfirmer la suppression de{' '}
										<span className="text-red-700 font-bold">
											{title}
										</span>{' '}
									</h2>
									<button
										onClick={handleDeleteProduct}
										className="bg-red-500 ml-[18rem] p-2 lg:text-md  font-normal text-white rounded transition duration-150 ease-in "
									>
										Confirmer
									</button>
								</Modal>
							</div>
						</div>
					</div>
				</div>
			</Modal>
			<PencilIcon
				onClick={() => {
					setOpened(!opened);
					setPrice(currentPrice!);
					setStock(currentStock!);
				}}
				className="w-4 cursor-pointer"
			/>
		</div>
	);
};

export default EditProduct;
