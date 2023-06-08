import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from 'apollo-cache-inmemory'

const client = () => new ApolloClient({
    uri: 'https://serviciographql-production.up.railway.app/',
    cache: new InMemoryCache(),
    })

export default client