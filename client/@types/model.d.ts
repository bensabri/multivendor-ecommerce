import { Enum_Product_Category } from '../generated';

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
		reference: number;
	}[];
}

export interface IProductsAttributes {
	attributes?: {
		__typename?: 'Product';
		title: string;
		reference: any;
		delivery_time?: number | null;
		stock: number;
		description: string;
		price: number;
		slug: string;
		category: Enum_Product_Category;
		seller_name: string;
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
}

export const defaultState = {
	clients: '',
	// setClients: React.Dispatch<React.SetStateAction<string>>,
};
