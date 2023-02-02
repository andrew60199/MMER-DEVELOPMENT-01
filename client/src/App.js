import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// Imports
import WebsiteHeader from './components/WebsiteHeader';

import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Careers from './pages/Careers'
import Legals from './pages/Legals';
import Portal from './pages/Portal';

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
          <Routes>
            {/* Website Routes */}
            <Route 
              path='/' 
              element={
                <>
                  <WebsiteHeader />
                  <Home /> 
                </>
              }   
            />
            <Route 
              path='/services' 
              element={
                <>
                  <WebsiteHeader />
                  <Services /> 
                </>
              }   
            />
            <Route 
              path='/contact' 
              element={
                <>
                  <WebsiteHeader />
                  <Contact /> 
                </>
              }   
            />
            <Route 
              path='/careers' 
              element={
                <>
                  <WebsiteHeader />
                  <Careers /> 
                </>
              }   
            />
            <Route 
              path='/legals' 
              element={
                <>
                  <WebsiteHeader />
                  <Legals /> 
                </>
              }   
            />
            {/* Development Portal Routes */}
            <Route 
              path='/portal' 
              element={
                <>
                  <Portal />
                </>
              } 
            />

            <Route 
              path='*'
              element={
                <>
                  <WebsiteHeader />
                  <div className='margin-1111 l-display-container'>
                    <h1 className='margin-4000'>Whoops this page doesn't exist.</h1>
                  </div>
                </>                
              }
            />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
