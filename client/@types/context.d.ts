import { iInitialState } from '../context/Context';
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
	currentColor: string;
	setCurrentColor: Dispatch<SetStateAction<string>>;
	currentMode: string;
	setCurrentMode: Dispatch<SetStateAction<string>>;
	themeSettings: boolean;
	setThemeSettings: Dispatch<SetStateAction<boolean>>;
	activeMenu: boolean;
	setActiveMenu: Dispatch<SetStateAction<boolean>>;
	isClicked: iInitialState;
	setIsClicked: Dispatch<SetStateAction<iInitialState>>;
	screenSize: number | undefined;
	setScreenSize: Dispatch<SetStateAction<number | undefined>>;
	handleClick: (clicked: string | number | symbol) => void;
	initialState: iInitialState;
}
