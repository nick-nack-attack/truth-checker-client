import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import ApprovedFact from './ApprovedFact';

import {UserContextProvider} from '../../../contexts/UserContext'
import AuthContextProvider from '../../../contexts/AuthContextProvider';

describe('ApprovedFact Component', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <Router>
                <UserContextProvider>
                    <AuthContextProvider>
                        <ApprovedFact/>
                    </AuthContextProvider>
                </UserContextProvider>
            </Router>,
            div
        );

        ReactDOM.unmountComponentAtNode(div);
    });

});