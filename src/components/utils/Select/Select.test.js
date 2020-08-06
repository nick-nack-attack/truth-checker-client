import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Select from './Select';

import {UserContextProvider} from '../../../contexts/UserContext'
import AuthContextProvider from '../../../contexts/AuthContextProvider';

describe('Select Component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    const arrayForSelect = ['All', 'Pending', 'Under Review', 'Approved', 'Not True'];
    ReactDOM.render(
        <Router>
          <UserContextProvider>
            <AuthContextProvider>
              <Select
                  array={arrayForSelect}
                  value='All'
                  onChange={() => {
                  }}
              />
            </AuthContextProvider>
          </UserContextProvider>
        </Router>,
        div
    );

    ReactDOM.unmountComponentAtNode(div);
  });

});