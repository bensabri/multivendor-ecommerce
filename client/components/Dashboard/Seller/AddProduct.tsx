import { Group, Text, Modal } from '@mantine/core';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { useGlobalContext } from '../../../context/Context';
import {
	CreateProductDocument,
	CreateProductMutation,
	CreateProductMutationVariables,
	VendeursQuery,
} from '../../../generated';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import Header from '../Header';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import axios from 'axios';
import Image from 'next/image';
import { stripHtml } from 'string-strip-html';
import { RichTextEditor } from '@mantine/rte';

interface iProps {
	vendeur?: VendeursQuery;
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FormData {
	title: string;
	description: string;
	reference: string;
	price: string;
	category: string;
	seller_name: string;
	stock: string;
	delivery_time: string;
	images: File[];
}

const AddProduct = ({ vendeur, open, setOpen }: iProps) => {
	const { currentColor, currentMode } = useGlobalContext();
	const [selectedImage, setSelectedImage] = useState<File[]>();
	const [opened, setOpened] = useState<boolean>(false);
	const [value, setValue] = useState<string>('');

	const { handleSubmit, formState, register, watch, control, reset } =
		useForm<FormData>({
			mode: 'onTouched',
			defaultValues: {
				title: '',
				description: '',
				reference: '',
				price: '',
				category: '',
				seller_name: '',
				stock: '',
				delivery_time: '',
				images: [],
			},
		});
	const { isSubmitting, errors } = formState;

	// Post products to the database with vendeur signature
	const [uploadImg, { data, loading }] = useMutation<
		CreateProductMutation,
		CreateProductMutationVariables
	>(CreateProductDocument);

	// Get the array of categories and replace the _ by space
	const selectList = vendeur?.categories?.data.map((item) =>
		item.attributes?.title?.replaceAll('_', ' ')
	);

	const formDataImg = new FormData();

	const onSubmit = async (data: FormData) => {
		const files = data.images;
		console.log(files);

		for (const file of files) {
			formDataImg.append('files', file);
		}
		// Upload files to database
		axios
			.post(`${process.env.NEXT_PUBLIC_HOST}/api/upload`, formDataImg)
			.then(() => {
				reset();
				setSelectedImage([]);
				setValue('');
				setOpened(true);
			})
			.catch((error) => {
				console.log(`Error creating produit ${error}`);
			});
	};
	return (
		<div>
			<Modal
				size="xl"
				opened={open}
				closeOnClickOutside={false}
				onClose={() => setOpen(false)}
				classNames={{
					modal: `bg-main-bg ${
						currentMode === 'Dark' ? 'bg-secondary-dark-bg' : ''
					}`,
				}}
			>
				<div
					className={`px-[7rem] dark:bg-main-dark-bg ${
						currentMode === 'Dark' ? 'dark' : ''
					}`}
				>
					<Modal
						opened={opened}
						onClose={() => setOpened(false)}
						withCloseButton={false}
					>
						Votre produit à bien étais ajouté il sera validé par
						notre équipe
					</Modal>
					<Header category="page" title="Ajouter un produit" />
					<form onSubmit={handleSubmit(onSubmit)}>
						<Controller
							control={control}
							name="images"
							rules={{
								required: true,
							}}
							render={({ field: { onChange, value } }) => (
								<div>
									<Dropzone
										// loading={loading}
										className="dark:bg-main-dark-bg dark:text-gray-200"
										onDrop={(data) => {
											console.log('accepted files', data);
											onChange(data);
											setSelectedImage(data);
										}}
										onReject={(data) =>
											console.log('rejected files', data)
										}
										maxSize={1000000}
										accept={IMAGE_MIME_TYPE}
									>
										<Group
											position="center"
											spacing="xl"
											style={{
												minHeight: 220,
												pointerEvents: 'none',
											}}
										>
											<HiOutlinePhotograph />

											<div>
												<Text size="xl" inline>
													Drag images here or click to
													select files
												</Text>
												<Text
													size="sm"
													color="dimmed"
													inline
													mt={7}
												>
													Attach as many files as you
													like, each file should not
													exceed 1mb
												</Text>
											</div>
										</Group>
									</Dropzone>
									{selectedImage && (
										<button
											className="dark:text-gray-200"
											onClick={() => {
												setSelectedImage([]);
												onChange();
											}}
										>
											Clear
										</button>
									)}
								</div>
							)}
						/>
						{errors.images && (
							<p className="text-xs text-red-500">
								Vous devez ajoutez au minimun une image
							</p>
						)}
						{selectedImage?.map((item, i) => (
							<Image
								key={i}
								src={URL.createObjectURL(item)}
								width={100}
								height={100}
								objectFit="contain"
							/>
						))}
						<div className="flex flex-col mb-6">
							<label
								htmlFor="title"
								className="dark:text-gray-200 mb-1 mt-2 text-xs sm:text-sm tracking-wide text-gray-600"
							>
								Titre <span className="text-red-500">*</span>
							</label>
							<div className="relative">
								<input
									id="title"
									type="text"
									{...register('title', {
										required:
											'Vous devez renseigner ce champs',
										minLength: {
											value: 3,
											message: 'Min length is 3',
										},
									})}
									className={`${
										errors.reference
											? 'focus:border-red-500 focus:ring-red-500 border-red-500'
											: 'focus:border-green-400 focus:ring-green-500'
									} dark:bg-main-dark-bg dark:text-gray-200 text-sm sm:text-base placeholder-gray-500 pl-3 rounded-lg border border-gray-400 w-full py-2 focus:outline-none`}
									placeholder="Nom du Produit"
								/>
								<p className="text-xs text-red-500">
									{errors.title?.message}
								</p>
							</div>
						</div>
						<div className="flex flex-col mb-6">
							<label className="dark:text-gray-200 mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
								Description{' '}
								<span className="text-red-500">*</span>
							</label>
							<Controller
								control={control}
								name="description"
								defaultValue=""
								rules={{
									validate: {
										required: (v) =>
											(v &&
												stripHtml(v).result.length >
													0) ||
											'Description is required',
										minLength: (v) =>
											(v &&
												stripHtml(v).result.length >
													20) ||
											'Le contenue minimun est de 20 caractéres',
									},
								}}
								render={({ field: { onChange, value } }) => (
									<RichTextEditor
										classNames={{
											root: 'dark:bg-main-dark-bg dark:text-gray-200',
											toolbar: 'dark:bg-main-dark-bg',
											toolbarControl:
												'dark:text-gray-500',
										}}
										controls={[
											[
												'bold',
												'italic',
												'underline',
												'link',
											],
											['blockquote', 'h1', 'h2', 'h3'],
											['unorderedList', 'orderedList'],
											[
												'alignLeft',
												'alignCenter',
												'alignRight',
											],
										]}
										value={value}
										onChange={onChange}
									/>
								)}
							/>
							<p className="text-xs text-red-500">
								{errors.description?.message}
							</p>
						</div>
						<div className="flex flex-col mb-6">
							<label
								htmlFor="reference"
								className="dark:text-gray-200 mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
							>
								Réference{' '}
								<span className="text-red-500">*</span>
							</label>
							<div className="relative">
								<input
									id="reference"
									type="number"
									{...register('reference', {
										required:
											'Vous devez renseigner ce champs',
										valueAsNumber: true,
										minLength: {
											value: 5,
											message: 'Min length is 5',
										},
									})}
									className={`${
										errors.reference
											? 'focus:border-red-500 focus:ring-red-500 border-red-500'
											: 'focus:border-green-400 focus:ring-green-500'
									} dark:bg-main-dark-bg dark:text-gray-200 text-sm sm:text-base placeholder-gray-500 pl-3 rounded-lg border border-gray-400 w-full py-2 focus:outline-none`}
									placeholder="Réference du produit"
								/>
								<p className="text-xs text-red-500">
									{errors.reference?.message}
								</p>

								{/* Divider */}
							</div>
						</div>
					</form>
				</div>
				{/* <button>Validé</button> */}
			</Modal>
		</div>
	);
};

export default AddProduct;
