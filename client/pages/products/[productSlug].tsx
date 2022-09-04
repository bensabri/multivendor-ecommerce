import { ApolloClient, Context, InMemoryCache } from '@apollo/client'
import { GetStaticProps, GetStaticPaths, GetServerSideProps , NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { GetProductsDocument, GetProductsQuery, GetProductsQueryVariables } from '../../generated'


const ProductDetail: NextPage  = () => {
  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail

export const getStaticPaths = async () => {
      const client = new ApolloClient({
		uri: `http://localhost:1337/graphql`,
		cache: new InMemoryCache(),
	});

      const { data } = await client.query<GetProductsQuery, GetProductsQueryVariables>({
		query: GetProductsDocument,
		variables: { limit: 1000 },
	});

     const paths = data.products?.data.map((item) => {
      return {
        params: {productSlug: item.attributes?.slug.toString()}
      }
     })
  
  return {
    paths,
    fallback: 'blocking',
  };
};

    export const getStaticProps: GetStaticProps = async (context) => {
        const client = new ApolloClient({
            uri: `http://localhost:1337/graphql`,
            cache: new InMemoryCache(),
        });
        const { params } = context!;

        const { data } = await client.query<GetProductsQuery, GetProductsQueryVariables>({
            query: GetProductsDocument,
            variables: { slug: params?.productSlug?.toString() },
        });

        return {
          props: {
            data,
          },
        };
      };
