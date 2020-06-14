// this file has all the contexts needs in the app
import React from 'react';

// here are the context providers
import { ItemsContextProvider } from './ItemsContext'

const AuthContextProvider = (props) => {
    return (
        <ItemsContextProvider>
            { props.children }
        </ItemsContextProvider>
    )};

export default AuthContextProvider;