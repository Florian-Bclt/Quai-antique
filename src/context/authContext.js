import React, { useReducer, createContext } from "react";
import jwtDecode from "jwt-decode"

const initialState = {
  user: null
}

if(localStorage.getItem("token")) {
  try {

      const decodeToken = jwtDecode(localStorage.getItem("token"));
    
      if(decodeToken.exp * 1000 < Date.now()) {
        localStorage.removeItem("token");
      } else {
        initialState.user = decodeToken;
      }
    } catch {
      console.error("Invalid token:");
      localStorage.removeItem("token");
    }
  }

const AuthContext = createContext ({
  user: null,
  login: (userData) => {},
  logout: () => {}
});

function authReducer(state, action) {
  switch(action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload.user,
        role: action.payload.role
      };
    case 'LOGOUT':
    return {
      ...state,
      user: null,
      role: null
    }
    default:
      return state;
  }
}

function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (userData) => {
    localStorage.setItem("token", userData.token);
    dispatch({
      type: 'LOGIN',
      payload: {
        user: userData,
        role: userData.role
      }
    })
  }

  function logout() {
    localStorage.removeItem("token");
    dispatch({ type: 'LOGOUT '});
  }

  return (
    <AuthContext.Provider 
      value={{
        user: state.user,
        role: state.role,
        login,
        logout
      }}
      {...props}
    />
  )
}

export { AuthContext, AuthProvider };