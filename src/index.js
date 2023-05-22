import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import client, { AppProvider } from './apollo';
import { AuthProvider } from './context/authContext';

ReactDOM.render(
  <AuthProvider>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AppProvider>
          <App />
        </AppProvider>
      </BrowserRouter>
    </ApolloProvider>
  </AuthProvider>
, document.getElementById('root'));

