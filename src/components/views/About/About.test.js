import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import About from './About';

import {UserContextProvider} from '../../../contexts/UserContext'
import AuthContextProvider from '../../../contexts/AuthContextProvider';

describe('About Component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <Router>
          <UserContextProvider>
            <AuthContextProvider>
              <About/>
            </AuthContextProvider>
          </UserContextProvider>
        </Router>,
        div
    );

    ReactDOM.unmountComponentAtNode(div);
  });

});