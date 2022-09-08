import { GetProductsQuery } from '../generated';
import Product from './Product/Product';

type Iprops = {
	data: GetProductsQuery;
};

const ProductFeed = ({ data }: Iprops) => {
	console.log(data.products?.data[0].attributes);
	return (
		<div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{data.products?.data.map(({ id, attributes }) => (
				<Product key={id} id={id} attributes={attributes} />
			))}
		</div>
	);
};

export default ProductFeed;
