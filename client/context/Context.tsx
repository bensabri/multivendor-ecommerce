import { IProductList } from '../@types/model';
import { Icontext } from '../@types/context';
import {
	createContext,
	useContext,
	useState,
	ReactNode,
	useEffect,
} from 'react';

type Props = {
	children: ReactNode;
};

export interface iInitialState {
	chat: boolean;
	cart: boolean;
	userProfile: boolean;
	notification: boolean;
}

const AppContext = createContext({} as Icontext);

const initialState = {
	chat: false,
	cart: false,
	userProfile: false,
	notification: false,
};

const AppProvider = ({ children }: Props) => {
	const [product, setProduct] = useState<IProductList[]>([]);
	const [productList, setProductList] = useState<IProductList[]>([]);
	const [activeTab, setActiveTab] = useState<boolean>(false);
	const [activePageProducts, setPageProducts] = useState<number>(1); // active page pagination products page
	const [activeCategory, setActiveCategory] = useState(
		// categories fetch at first load using lazyquery
		'Articles Religieux, Parfun'
	);
	const [activePageCategory, setPageCategory] = useState(1); // active page pagination category page

	{
		/* Dashboard state */
	}
	const [activeMenu, setActiveMenu] = useState<boolean>(false);
	const [isClicked, setIsClicked] = useState<iInitialState>(initialState);
	const [screenSize, setScreenSize] = useState<number | undefined>(undefined);
	{
		/* Theme State */
	}
	const [currentColor, setCurrentColor] = useState<string>('#03C9D7');
	const [currentMode, setCurrentMode] = useState<string>('Light');
	const [themeSettings, setThemeSettings] = useState<boolean>(false);

	const contextValue: Icontext = {
		activeTab,
		setActiveTab,
		productList,
		setProductList,
		product,
		setProduct,
		activePageProducts,
		setPageProducts,
		activeCategory,
		setActiveCategory,
		activePageCategory,
		setPageCategory,
		currentColor,
		setCurrentColor,
		currentMode,
		setCurrentMode,
		themeSettings,
		setThemeSettings,
		activeMenu,
		setActiveMenu,
		isClicked,
		setIsClicked,
		screenSize,
		setScreenSize,
	};

	useEffect(() => {
		setProductList(
			Array.from(new Set(product?.map((item) => item.title))).map(
				(title) => {
					return product.find((item) => item.title === title)!;
				}
			)
		);
	}, [product]);

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
