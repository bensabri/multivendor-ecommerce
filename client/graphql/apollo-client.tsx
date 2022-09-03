import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client';
import { PropsWithChildren, useState } from 'react';
	
	const StrapiApolloProvider: React.FC<PropsWithChildren<{}>> = ({children}) => {
		const [authToken] = useState<string | undefined>(
			process.env.NEXT_PUBLIC_TOKEN
		);
	
		const getHeader = () => {
			if (!authToken) return null;
	
			return {
				authorization: `Bearer ${authToken}`,
			};
		};
	
		const link = new HttpLink({
			// uri: `${process.env.NEXT_PUBLIC_HOST}/graphql`,
			uri: 'http://localhost:1337/graphql',
			headers: getHeader(),
		});
	
		const client = new ApolloClient({
			link,
			cache: new InMemoryCache(),
		});

	return <ApolloProvider client={client}>
		{children}
	</ApolloProvider>

	};


export default StrapiApolloProvider;
