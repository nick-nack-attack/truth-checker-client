import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Error from './Error';

import {UserContextProvider} from '../../../contexts/UserContext'
import AuthContextProvider from '../../../contexts/AuthContextProvider';

describe('Error Component', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <Router>
                <UserContextProvider>
                    <AuthContextProvider>
                        <Error/>
                    </AuthContextProvider>
                </UserContextProvider>
            </Router>,
            div
        );

        ReactDOM.unmountComponentAtNode(div);
    });

});