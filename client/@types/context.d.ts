import { IProductList } from './model';

export interface Icontext {
	activeTab: boolean;
	setActiveTab: Dispatch<SetStateAction<boolean>>;
	productList: IProductList[];
	setProductList: Dispatch<SetStateAction<IProductList[]>>;
	product: IProductList[];
	setProduct: Dispatch<SetStateAction<IProductList[]>>;
	activePageProducts: number;
	setPageProducts: Dispatch<SetStateAction<number>>;
	activeCategory: string;
	setActiveCategory: Dispatch<SetStateAction<string>>;
	activePageCategory: number;
	setPageCategory: Dispatch<SetStateAction<number>>;
}
