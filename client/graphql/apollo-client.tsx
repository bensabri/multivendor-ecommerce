import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { useState } from 'react';

const client = () => {
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

	return new ApolloClient({
		link,
		cache: new InMemoryCache(),
	});
};

export default client;
