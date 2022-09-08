import { IProductsAttributes } from '../../@types/model';

type Iprops = {
	id: string | null | undefined;
	attributes: IProductsAttributes['attributes'];
};

const Product = ({ id, attributes }: Iprops) => {
	return <div></div>;
};

export default Product;
