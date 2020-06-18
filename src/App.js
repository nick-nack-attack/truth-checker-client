import React, { useState, useRef } from 'react';
import { Switch } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import Burger from './components/utils/Burger';
import Menu from './components/utils/Menu';

import FocusLock from 'react-focus-lock';
import './App.css';
import PublicRoute from './utils/PublicRoute';
import PrivateRoute from './utils/PrivateRoute';
import MainFeed from './components/views/MainFeed/MainFeed';
import Header from './structure/Header';
import Footer from './structure/Footer';
import AddFactForm from './components/views/AddFactForm/AddFactForm';
import EditFactForm from './components/views/EditFactForm/EditFactForm';
import AdminLogin from './components/views/AdminLogin/AdminLogin';
import ViewFact from './components/views/ViewFact/ViewFact';

function App() {

  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  return (

    
      <>
         <Header/>
          <body>
          <Switch>
            <PublicRoute
              exact path ={ '/' }
              component={ MainFeed }
            />
            <PublicRoute
              path={'/admin-login'}
              component={ AdminLogin }
            />
            <PublicRoute
              path={'/submit-fact'}
              component={ AddFactForm }
            />
            <PublicRoute
              exact path={'/facts/id/:fact_id'}
              component={(props) => {
                return (
                  <ViewFact
                    fact_id={props.match.params.fact_id}
                  />
                )
              }}
            />
            <PrivateRoute
              exact path={'/facts/id/:fact_id/edit'}
              component={(props) => {
                return (
                  <EditFactForm
                    fact_id={props.match.params.fact_id}
                  />
                )
              }}
            />
          </Switch>
          </body>
          <Footer/>
      </>
    
  );
}

export default App;
