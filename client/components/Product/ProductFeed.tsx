import { FC } from 'react';
import { GetProductsQuery } from '../../generated';
import Product from './Product';

type Iprops = {
	data: GetProductsQuery;
};

const ProductFeed: FC<Iprops> = ({ data }: Iprops) => {
	return (
		<div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{data.products?.data.map(({ id, attributes }) => (
				<Product key={id} id={id} attributes={attributes} />
			))}
		</div>
	);
};

export default ProductFeed;
