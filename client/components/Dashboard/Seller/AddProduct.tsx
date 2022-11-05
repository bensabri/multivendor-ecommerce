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

export const dropzoneChildren = () => (
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
	vendeur: VendeursQuery | undefined;
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
	images: string;
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
				images: '',
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
	};
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<button>Validé</button>
			</form>
		</div>
	);
};

export default AddProduct;