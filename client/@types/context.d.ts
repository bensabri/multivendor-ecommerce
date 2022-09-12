export interface Icontext {
	activeTab: boolean;
	setActiveTab: Dispatch<SetStateAction<boolean>>;
	productList: IProductList['product'];
	setProductList: Dispatch<SetStateAction<IProductList[]>>;
	product: IProductList['product'];
	setProduct: Dispatch<SetStateAction<IProductList[]>>;
	activePageProducts: number;
	setPageProducts: Dispatch<SetStateAction<number>>;
	activeCategory: string;
	setActiveCategory: Dispatch<SetStateAction<string>>;
}
