import { ApolloClient, InMemoryCache, createHttpLink, ApolloLink } from '@apollo/client';
import { useEffect, useState, createContext } from 'react';

// Création du contexte
export const AppContext = createContext({});

// Création de l'instance de ApolloClient
const httpLink = createHttpLink({
  uri: "https://quai-antique-api.cleverapps.io/",
});

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('token') || '';

    localStorage.setItem('token', token);

  if(token) {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      },
    }));
  }

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