// import '../styles/styles.css';

// function MyApp({ Component, pageProps }) {
//     return <Component {...pageProps} />
// }

// export default MyApp





// import React from 'react';
// import App from 'next/app';
// import { ApolloProvider } from '@apollo/react-hooks';
// import '../styles/styles.css';

// import withData from '../util/apollo-client';

// class MyApp extends App {
//     render() {
//         const { Component, pageProps, apollo } = this.props;
//         return (
//             <ApolloProvider client={apollo}>
//                 <Component {...pageProps} />
//             </ApolloProvider>
//         );
//     }
// }

// export default withData(MyApp);






import React from 'react';
import App from 'next/app';
import '../styles/styles.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import withData from '../util/apollo-client';

const client = new ApolloClient({ uri: 'http://192.168.1.185:3000/graphql' });

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