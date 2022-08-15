import { Icontext } from '../@types/model';
import { createContext, useContext, useState, ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

const AppContext = createContext<Partial<Icontext>>({});

const AppProvider = ({ children }: Props) => {
	const [clients, setClients] = useState<string>('text');

	const contextValue: Icontext = {
		clients,
		setClients,
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
