import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from 'apollo-cache-inmemory'

const client = () => new ApolloClient({
    uri: 'http://192.168.1.6:4000/graphql',
    cache: new InMemoryCache(),
    })

export default client