
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { typePolicies } from './typePolicies'
const APP_API_KEY = process.env.REACT_APP_APIKEY
const DELIVERY_TOKEN = process.env.REACT_APP_DELIVERY_TOKEN
const ENVIRONMENT = process.env.REACT_APP_ENVIRONMENT

const client = new ApolloClient({
    uri: `https://graphql.contentstack.com/stacks/${APP_API_KEY}?environment=${ENVIRONMENT}`,
    headers: {
      access_token: DELIVERY_TOKEN,
    },
    cache: new InMemoryCache({ typePolicies }),
})

export default client