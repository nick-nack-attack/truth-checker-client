import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ApiWrapper from './ApiWrapper';

import { UserContextProvider } from '../../../contexts/UserContext'
import AuthContextProvider from '../../../contexts/AuthContextProvider';

describe('Api Wrapper Component', () => {

it('renders without crashing', () => {

    const div = document.createElement('div');

    ReactDOM.render(
        <Router>
            <UserContextProvider>
                <AuthContextProvider>
                    <ApiWrapper/>
                </AuthContextProvider>
            </UserContextProvider>
        </Router>,
        div

    );

    ReactDOM.unmountComponentAtNode(div);

});

})