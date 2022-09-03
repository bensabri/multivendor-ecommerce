import '../styles/globals.css';
// import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { AppProvider } from '../context/Context';
// import client from '../graphql/apollo-client';
import StrapiApolloProvider from '../graphql/apollo-client';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AppProvider>
			<StrapiApolloProvider>
				<Component {...pageProps} />
			</StrapiApolloProvider>
		</AppProvider>
	);
}

export default MyApp;
