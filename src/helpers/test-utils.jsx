import React from 'react';
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { UserContextProvider } from "../contexts/UserContext";
import AuthContextProvider from "../contexts/AuthContextProvider";

const AllProviders = ({ children }) => {
    return (
        <Router>
            <UserContextProvider>
                <AuthContextProvider>
                    { children }
                </AuthContextProvider>
            </UserContextProvider>
        </Router>
    );
};

const customRender = (ui, options) =>
    render(ui, { wrapper: AllProviders, ...options });

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
