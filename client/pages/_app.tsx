import '../styles/globals.css';
// import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { AppProvider } from '../context/Context';
// import client from '../graphql/apollo-client';
import StrapiApolloProvider from '../graphql/apollo-client';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<MantineProvider withNormalizeCSS withGlobalStyles>
			<NotificationsProvider>
				<AppProvider>
					<StrapiApolloProvider>
						<Component {...pageProps} />
					</StrapiApolloProvider>
				</AppProvider>
			</NotificationsProvider>
		</MantineProvider>
	);
}

export default MyApp;
