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

export const dropzoneChildren: React.FC = () => (
	<Group
		position="center"
		spacing="xl"
		style={{ minHeight: 220, pointerEvents: 'none' }}
	>
		<HiOutlinePhotograph />

		<div>
			<Text size="xl" inline>
				Drag images here or click to select files
			</Text>
			<Text size="sm" color="dimmed" inline mt={7}>
				Attach as many files as you like, each file should not exceed
				1mb
			</Text>
		</div>
	</Group>
);

interface iProps {
	vendeur?: VendeursQuery;
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FormData {
	title: string;
	reference: string;
	price: string;
	category: string;
	seller_name: string;
	stock: string;
	delivery_time: string;
	images: string[];
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
				reference: '',
				price: '',
				category: '',
				seller_name: '',
				stock: '',
				delivery_time: '',
				images: [''],
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
	console.log(process.env.NEXT_PUBLIC_HOST);

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
										// value={value}
									>
										{(status) => dropzoneChildren(status)}
									</Dropzone>
								</div>
							)}
						></Controller>
						<button>Validé</button>
					</form>
				</div>
			</Modal>
		</div>
	);
};

export default AddProduct;
