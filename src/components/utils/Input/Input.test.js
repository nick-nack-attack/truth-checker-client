import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Input from './Input';

import {UserContextProvider} from '../../../contexts/UserContext'
import AuthContextProvider from '../../../contexts/AuthContextProvider';

describe('Input Component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <Router>
          <UserContextProvider>
            <AuthContextProvider>
              <Input/>
            </AuthContextProvider>
          </UserContextProvider>
        </Router>,
        div
    );

    ReactDOM.unmountComponentAtNode(div);
  });

});