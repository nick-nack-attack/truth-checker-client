// layer with nested contexts
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// set context providers
import AuthContextProvider from './contexts/AuthContextProvider';
import { UserContextProvider } from './contexts/UserContext';

// components
import ApiWrapper from './components/utils/ApiWrapper/ApiWrapper';
import App from './components/utils/App/App';

// styling
import './index.css';

ReactDOM.render(
  <Router>
    <ErrorBoundary>
    <AuthContextProvider>
      <UserContextProvider>
        <ApiWrapper>
          <App/>
        </ApiWrapper>
      </UserContextProvider>
    </AuthContextProvider>
    </ErrorBoundary>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
