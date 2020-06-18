import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import AuthContextProvider from './contexts/AuthContextProvider';
import { UserContextProvider } from './contexts/UserContext';

import { Routes } from './Routes';
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import AppWrapper from './structure/AppWrapper';

ReactDOM.render(
  <Router>
    <AuthContextProvider>
      <UserContextProvider>
        <AppWrapper>
        {/* <Routes/> */}
          <App/>
        </AppWrapper>
      </UserContextProvider>
    </AuthContextProvider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
