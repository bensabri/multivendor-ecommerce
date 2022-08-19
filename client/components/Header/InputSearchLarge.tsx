import React, { FC } from 'react';
import { SearchIcon } from '@heroicons/react/outline';

interface Iprops {
	inputSearch: string;
	setInputSearch: React.Dispatch<React.SetStateAction<string>>;
}

const InputSearchLarge: FC<Iprops> = ({ inputSearch, setInputSearch }) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputSearch(e.target.value);
		// if (inputSearch?.length >= 2) {
		//     searchProduct({
		//         variables: {
		//             limit: 5,
		//             contains: inputSearch,
		//         },
		//     });
		// }
	};

	return (
		<div
			className={`${
				inputSearch?.length >= 2 ? 'rounded-t-md' : 'rounded-md'
			} hidden sm:flex items-center h-8 flex-grow cursor-pointer bg-white hover:bg-blue-100 transition duration-150 ease-in`}
		>
			<div className="relative flex flex-grow">
				<input
					type="text"
					onChange={handleChange}
					value={inputSearch}
					className="p-2 h-8 w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 pb-3"
					placeholder="Chercher votre article ici"
				/>
				<SearchIcon className="h-8 p-2" />
			</div>
		</div>
	);
};

export default InputSearchLarge;
