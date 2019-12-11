import React from 'react';
import App from 'next/app';
import '../styles/styles.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import withData from '../util/apollo-client';

const client = new ApolloClient({ uri: 'http://localhost:4000/graphql' });

class MyApp extends App {
    render() {
        const { Component, pageProps, apollo } = this.props;
        return (
            <ApolloProvider client={client}>
                <Component {...pageProps} />
            </ApolloProvider>
        );
    }
}

export default withData(MyApp);