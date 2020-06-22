import React, { useState, useRef } from 'react';
import { Switch } from 'react-router-dom';

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
import ReportFeed from './components/views/ReportFeed/ReportFeed';

function App() {

  return (
    
      <>
         <Header/>
          <main>
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
            <PrivateRoute
              exact path={'/reports'}
              component={ ReportFeed }
            />
          </Switch>
          </main>
          <Footer/>
      </>
    
  );
}

export default App;
