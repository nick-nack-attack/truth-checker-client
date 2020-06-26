import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Label from './Label';

import { UserContextProvider } from '../../../contexts/UserContext'
import AuthContextProvider from '../../../contexts/AuthContextProvider';

describe('Label Component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    
    ReactDOM.render(
      <Router>
          <UserContextProvider>
              <AuthContextProvider>
                  <Label/>
              </AuthContextProvider>
          </UserContextProvider>
      </Router>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });

});