export interface Icontext {
	activeTab: boolean;
	setActiveTab: Dispatch<SetStateAction<boolean>>;
	productList: IProductList['product'];
	setProductList: Dispatch<SetStateAction<IProductList[]>>;
}
