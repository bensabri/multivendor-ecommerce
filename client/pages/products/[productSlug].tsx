import { ApolloClient, Context, InMemoryCache } from '@apollo/client'
import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import Head from 'next/head'
import { useRef, useState } from 'react'
import Header from '../../components/Header/Header'
import { useGlobalContext } from '../../context/Context'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
// import { ParsedUrlQuery } from 'querystring'
import { GetProductsDocument, GetProductsQuery, GetProductsQueryVariables } from '../../generated'

interface Idata {
  data: GetProductsQuery
}

const ProductDetail: NextPage<Idata> = ({data}) => {
  const { product, setProduct } = useGlobalContext();
  const [quantity, setQuantity] = useState<number>(1);
	const [readMore, setReadMore] = useState<boolean>(false);

  const galeryRef = useRef<ImageGallery>(null);

  const images = data.products?.data[0].attributes?.image.data.map((item) => {
    return {
			original: `${item.attributes?.url}`,
			thumbnail: `${item.attributes?.formats.thumbnail.url}`,
		};
  })
  
  return (
    <div className="bg-gray-100">
      <Head>
				<title>{data.products?.data[0].attributes?.title} </title>
				<link rel="icon" href="/croissant-de-lune.png" />
			</Head>
      <Header />
      <main className="lg:flex max-w-screen-xl mx-auto grid">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-5 flex-grow m-2 md:m-5">
          {/* Left */}
          <div className="lg:col-span-3 lg:p-3 xl:p-5 space-y-4 bg-white shadow-md rounded-md">
            <div className="pb-3 lg:flex">
              <div>
              <ImageGallery
                  items={images!}
									showFullscreenButton={false}
									showPlayButton={false}
									showNav={false}
									slideOnThumbnailOver={true}
									slideDuration={200}
									// thumbnailPosition="left"
									ref={galeryRef}
									onClick={() =>
										galeryRef.current?.fullScreen()
									}
								/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
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
    
     }
     

    export const getStaticProps: GetStaticProps = async (context) => {
        const client = new ApolloClient({
            uri: `http://localhost:1337/graphql`,
            cache: new InMemoryCache(),
        });
        const { params } = context;

        const { data } = await client.query<GetProductsQuery, GetProductsQueryVariables>({
            query: GetProductsDocument,
            variables: { slug: params?.productSlug?.toString() },
        });

        return {
          props: {
            data,
          },
          revalidate: 60,
        };
      };
