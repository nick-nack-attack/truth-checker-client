// this file has all the contexts needs in the app
import React from 'react';

// here are the context providers
import {ItemsContextProvider} from './ItemsContext';
import {SessionContextProvider} from './SessionContext';

const AuthContextProvider = (props) => {
  return (
      <SessionContextProvider>
        <ItemsContextProvider>
          {props.children}
        </ItemsContextProvider>
      </SessionContextProvider>
  )
};

export default AuthContextProvider;