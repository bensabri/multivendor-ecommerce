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

const AppContext = createContext({} as Icontext);

const AppProvider = ({ children }: Props) => {
	const [product, setProduct] = useState<IProductList['product']>([]);
	const [productList, setProductList] = useState<IProductList['product']>([]);
	const [activeTab, setActiveTab] = useState<boolean>(false);
	const [activePageProducts, setPageProducts] = useState<number>(1); // active page pagination products page
	const [activeCategory, setActiveCategory] = useState(
		// categories fetch at first load using lazyquery
		'Articles Religieux, Parfun'
	);
	const [activePageCategory, setPageCategory] = useState(1); // active page pagination category page

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
