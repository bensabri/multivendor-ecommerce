import { Icontext, IProductList } from '../@types/model';
import { createContext, useContext, useState, ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

const AppContext = createContext<Partial<Icontext>>({});

const AppProvider = ({ children }: Props) => {
	const [clients, setClients] = useState<string>('text');
	const [productList, setProductList] = useState<IProductList['product']>([]);
	const [activeTab, setActiveTab] = useState<boolean>(false);

	const contextValue: Icontext = {
		clients,
		setClients,
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
