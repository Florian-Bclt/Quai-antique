import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import client, { AppProvider } from './apollo';

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <AppProvider>
        <App />
      </AppProvider>
    </ApolloProvider>
  </BrowserRouter>
, document.getElementById('root'));

