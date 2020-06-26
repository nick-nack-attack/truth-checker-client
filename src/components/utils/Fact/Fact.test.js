import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Fact from './Fact';

import { UserContextProvider } from '../../../contexts/UserContext'
import AuthContextProvider from '../../../contexts/AuthContextProvider';

describe('Fact Component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    let fact = {
        title: 'title',
        fact_id: 1,
        status: 'Pending',
        date_submitted: new Date()
    }
    ReactDOM.render(
      <Router>
          <UserContextProvider>
              <AuthContextProvider>
                  <Fact fact={fact}/>
              </AuthContextProvider>
          </UserContextProvider>
      </Router>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });

});