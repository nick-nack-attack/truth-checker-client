import React, { useState, useRef } from 'react';
import { Switch } from 'react-router-dom';

import config from './config';

import FocusLock from 'react-focus-lock';
import './App.css';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import FactFeed from './components/views/FactFeed/FactFeed';
import Header from './structure/Header';
import Footer from './structure/Footer';
import AddFact from './components/views/AddFact/AddFact';
import EditFact from './components/views/EditFact/EditFact';
import Login from './components/views/Login/Login';
import ViewFact from './components/views/ViewFact/ViewFact';
import ReportFeed from './components/views/ReportFeed/ReportFeed';

function App() {

  return (
    
      <div id="Truth-Checker">
         <Header/>
          <Switch>
            <PublicRoute
              exact path ={ '/' }
              component={ FactFeed }
            />
            <PublicRoute
              path={ config.LOGIN_PAGE }
              component={ Login }
            />
            <PublicRoute
              path={ config.SUBMIT_FACT_PAGE }
              component={ AddFact }
            />
            <PublicRoute
              exact path={ config.FACT_PAGE }
              component={(props) => {
                return (
                  <ViewFact
                    fact_id={props.match.params.fact_id}
                  />
                )
              }}
            />
            <PrivateRoute
              exact path={ config.EDIT_FACT_PAGE }
              component={(props) => {
                return (
                  <EditFact
                    fact_id={props.match.params.fact_id}
                  />
                )
              }}
            />
            <PrivateRoute
              exact path={ config.REPORTS_PAGE }
              component={ ReportFeed }
            />
          </Switch>
          <Footer/>
      </div>
    
  );
}

export default App;
