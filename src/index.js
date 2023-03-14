import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
    uri: 'https://graphql.contentstack.com/stacks/blt774c40ef55b77751?environment=production&access_token=cs256078236b52b119e66b9b75',
    cache: new InMemoryCache(
    //   {
    //   typePolicies: {
    //     Query: {
    //       fields: {
    //         all_book: {
    //           keyArgs: [],
    //           merge(existing, incoming, { args: { skip = 0 }}) {
    //             // Slicing is necessary because the existing data is
    //             // immutable, and frozen in development.
    //             const merged = existing ? existing.slice(0) : [];
    //             for (let i = 0; i < incoming.length; ++i) {
    //               merged[skip + i] = incoming[i];
    //             }
    //             return merged;
    //           },
    //         }
    //       }
    //     }
    //   }
    // }
    ),
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
