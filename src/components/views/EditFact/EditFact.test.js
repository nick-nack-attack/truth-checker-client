import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import EditFact from './EditFact';

import { UserContextProvider } from '../../../contexts/UserContext'
import AuthContextProvider from '../../../contexts/AuthContextProvider';

it('renders without crashing', () => {
  const div = document.createElement('div');
  let fact_id = 1;
  ReactDOM.render(
    <Router>
        <UserContextProvider>
            <AuthContextProvider>
                <EditFact 
                  fact_id={fact_id}
                />
            </AuthContextProvider>
        </UserContextProvider>
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});