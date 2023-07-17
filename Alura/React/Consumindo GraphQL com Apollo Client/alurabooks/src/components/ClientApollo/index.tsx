import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ReactNode } from 'react';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:9000/graphql',
});

export default function ClientApollo({ children }: { children: ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
