import { gql, useLazyQuery } from '@apollo/client';
import { useState } from 'react';
import { useGlobalContext } from '../../context/Context';

const Category = () => {
	const { activeCategory } = useGlobalContext();
	const [itemPerPages] = useState(10); // Set the item showen per page

	const [getCategory, { data, loading }] = useLazyQuery(gql`
		query getCategories(
			$id: ID
			$title: String
			$pageSize: Int
			$page: Int
			$limit: Int
			$suspended: Boolean
		) {
			categories(
				pagination: { limit: $limit, pageSize: $pageSize, page: $page }
				filters: {
					id: { eq: $id }
					title: { eq: $title }
					products: { vendeur: { suspended: { eq: $suspended } } }
				}
			) {
				meta {
					pagination {
						total
					}
				}
				data {
					id
					attributes {
						title
						slug
						products {
							data {
								id
								attributes {
									category
									description
									image {
										data {
											id
											attributes {
												url
											}
										}
									}
									price
									stock
									slug
									seller_name
									delivery_time
									title
									reference
									vendeur {
										data {
											id
											attributes {
												name
												email
												delivery_price
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	`);

	return <div>index</div>;
};

export default Category;
