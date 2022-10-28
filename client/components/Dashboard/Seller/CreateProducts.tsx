import { Group, Text, Modal } from '@mantine/core';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { VendeursQuery } from '../../../generated';

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
	return <div>CreateProducts</div>;
};

export default CreateProducts;
