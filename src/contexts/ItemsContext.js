// Contexts for all the content
import React, { createContext, useReducer } from 'react';

let ItemsContext = createContext();

let initialState = {
  fetched: false,
  facts: [],
  reports: [],
  all: [],
  error: null,
  notification: null,
};

// Allows dispatch actions to update state
let reducer = (state, action) => {
  switch (action.type) {
      // set facts from the response
    case 'set-items':
      return {
        ...state,
        fetched: true,
        facts: action.payload.facts,
        reports: action.payload.reports,
      }
      // update only the facts
    case 'set-facts':
      return {
        ...state,
        facts: action.payload,
        fetched: true,
      }
    case 'set-reports':
      return {
        ...state,
        reports: action.payload,
        fetched: true,
      }
      // set all items
    case 'set-all':
      return {
        ...state,
        all: action.payload,
      }
      // refetch items from database
    case 'refetch':
      return {
        ...state,
        fetched: false,
      }
      // set error in state
    case 'set-error':
      return {
        ...state,
        error: action.payload,
      }
      // clear notification
    case 'clear-notification':
      return {
        notification: '',
      }
    default:
      return initialState;
  }
};

const ItemsContextProvider = (props) => {
  let [state, dispatch] = useReducer(reducer, initialState);
  let value = {state, dispatch};
  return (
      <ItemsContext.Provider value={value}>
        { props.children }
      </ItemsContext.Provider>
  );
};

let ItemsContextConsumer = ItemsContext.Consumer;

export { ItemsContext, ItemsContextProvider, ItemsContextConsumer };
