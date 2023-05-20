import { ApolloClient, InMemoryCache, createHttpLink, ApolloLink } from '@apollo/client';
import { useEffect, useState } from 'react';
import { createContext } from 'react';

// Création du contexte
export const AppContext = createContext({});


// Création de l'instance de ApolloClient
const httpLink = createHttpLink({
  // uri: "http://app-8a84a013-ae4a-4e4f-9176-5e1c62e8a561.cleverapps.io/",
  uri: "http://localhost:4200/graphql",
});

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('token');

  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }));

  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    if (user) {
      setRole(user.role);
    }
  }, [user]);

  return (
    <AppContext.Provider value={{ user, setUser, role }}>
      {children}
    </AppContext.Provider>
  );
};

export default client;