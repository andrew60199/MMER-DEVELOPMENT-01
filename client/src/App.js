import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// Imports
import Navigation from './components/Navigation';
import Header from './components/Header';

import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Careers from './pages/Careers'

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>  
          <div className='flex space-between border-bottom width-100 padding-1111 pinned-top bg-white m-display-padding-0111 l-display-container l-display-padding-1000'>
            <Header />
            <Navigation />
          </div>

          <Routes>
            <Route 
                path='/' 
                element={<Home />} 
            />

            <Route 
              path='/services' 
              element={<Services />} 
            />

            <Route 
              path='/contact' 
              element={<Contact />} 
            />

            <Route 
              path='/careers' 
              element={<Careers />} 
            />

            <Route 
              path='*'
              element={<h1 className=''>Wrong page!</h1>}
            />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
