import { Group, Text, Modal } from '@mantine/core';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { useGlobalContext } from '../../../context/Context';
import { VendeursQuery } from '../../../generated';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

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

const CreateProducts = ({ vendeur, open, setOpen }: iProps) => {
	const { currentColor, currentMode } = useGlobalContext();
	const [selectedImage, setSelectedImage] = useState<File[]>();
	const [opened, setOpened] = useState<boolean>(false);
	const [value, setValue] = useState<string>('');

	const { handleSubmit, formState, register, watch, control, reset } =
		useForm({
			mode: 'onTouched',
			defaultValues: {
				title: '',
				reference: '',
				price: '',
				category: '',
				seller_name: '',
				stock: '',
				delivery_time: '',
			},
		});
	const { isSubmitting, errors } = formState;

	// Post products to the database with vendeur signature

	return <div>CreateProducts</div>;
};

export default CreateProducts;
