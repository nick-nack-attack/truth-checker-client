import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NotFound from "./NotFound";

import { UserContextProvider } from '../../../contexts/UserContext'
import AuthContextProvider from '../../../contexts/AuthContextProvider';

describe('NotFound Component', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <Router>
                <UserContextProvider>
                    <AuthContextProvider>
                        <NotFound/>
                    </AuthContextProvider>
                </UserContextProvider>
            </Router>,
            div
        );

        ReactDOM.unmountComponentAtNode(div);
    });

});
