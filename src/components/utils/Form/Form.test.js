import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Form from './Form';

import { UserContextProvider } from '../../../contexts/UserContext'
import AuthContextProvider from '../../../contexts/AuthContextProvider';

it('renders without crashing', () => {
  const div = document.createElement('div');
  
  ReactDOM.render(
    <Router>
        <UserContextProvider>
            <AuthContextProvider>
                <Form/>
            </AuthContextProvider>
        </UserContextProvider>
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});