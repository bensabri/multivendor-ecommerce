import { Enum_Product_Category } from '../generated';

// ProductList types //

export type IproductListVendeur = {
	name: string;
	email: string;
	delivery_price: number;
	suspended: boolean;
};

export type IProductList = {
	id: string | null | undefined;
	category: string;
	title: string;
	description: string;
	price: number;
	total: number;
	quantity: number;
	stock: number;
	image: string;
	vendeur: IproductListVendeur;
	seller_name: string;
	delivery_time: number;
	reference: number;
	[];
};

export type IProductsAttributes = {
	attributes?: {
		__typename?: 'Product';
		category: Enum_Product_Category;
		description: string;
		price: number;
		stock: number;
		slug?: string | null;
		seller_name: string;
		delivery_time?: number | null;
		title: string;
		reference: number | string;
		vendeur?: {
			__typename?: 'VendeurEntityResponse';
			data?: {
				__typename?: 'VendeurEntity';
				id?: string | null;
				attributes?: {
					__typename?: 'Vendeur';
					name?: string | null;
					email?: string | null;
					delivery_price?: number | null;
					suspended?: boolean | null;
				} | null;
			} | null;
		} | null;
		image: {
			__typename?: 'UploadFileRelationResponseCollection';
			data: Array<{
				__typename?: 'UploadFileEntity';
				id?: string | null;
				attributes?: {
					__typename?: 'UploadFile';
					name: string;
					url: string;
					width?: number | null;
					height?: number | null;
					formats?: any | null;
				} | null;
			}>;
		};
	} | null;
};

export const defaultState = {
	clients: '',
	// setClients: React.Dispatch<React.SetStateAction<string>>,
};
