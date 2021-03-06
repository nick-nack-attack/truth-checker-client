// context for the user
import React, {createContext, useReducer} from "react";

// service
import TokenService from '../services/token-service';

let UserContext = createContext();

let initialState = {
  name: 'Admin',
  isLoggedIn: false,
  fetched: false
};

let reducer = (state, action) => {
  switch (action.type) {
      // logs user in
    case "login":
      return {
        isLoggedIn: true,
        fetched: true
      };
    case "logout":
      TokenService.clearAuthToken();
      return {
        // logs user out
        name: '',
        isLoggedIn: false,
        fetched: false
      };
    default:
      return initialState
  }
};

const UserContextProvider = props => {
  let [state, dispatch] = useReducer(reducer, initialState);
  let value = {state, dispatch};
  return (
      <UserContext.Provider value={value}>
        {props.children}
      </UserContext.Provider>
  );
};

let UserContextConsumer = UserContext.Consumer;

export {UserContext, UserContextProvider, UserContextConsumer};
