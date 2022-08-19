export interface Icontext {
	clients: string;
	setClients: Dispatch<React.SetStateAction<string>>;
	activeTab: boolean;
	setActiveTab: Dispatch<SetStateAction<boolean>>;
	productList: IProductList['product'];
	setProductList: Dispatch<SetStateAction<IProductList[]>>;
}

export interface IProductList {
	product: {
		id: number;
		category: string;
		title: string;
		description: string;
		price: number;
		total: number;
		quantity: number;
		stock: number;
		image: string;
		vendeur: string;
		seller_name: string;
		delivery_time: number;
	}[];
}

export const defaultState = {
	clients: '',
	// setClients: React.Dispatch<React.SetStateAction<string>>,
};
