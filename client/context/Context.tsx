import { IProductList } from '../@types/model';
import { Icontext } from '../@types/context';
import { createContext, useContext, useState, ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

const AppContext = createContext({} as Icontext);

const AppProvider = ({ children }: Props) => {
	const [productList, setProductList] = useState<IProductList['product']>([]);
	const [activeTab, setActiveTab] = useState<boolean>(false);

	const contextValue: Icontext = {
		activeTab,
		setActiveTab,
		productList,
		setProductList,
	};
	return (
		<AppContext.Provider value={contextValue}>
			{children}
		</AppContext.Provider>
	);
};

const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
