import React, { useState, useRef } from 'react';
import { Switch } from 'react-router-dom';

import config from './config';

import './App.css';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import FactFeed from './components/views/FactFeed/FactFeed';
import Header from './structure/Header';
import Footer from './structure/Footer';
import AddFact from './components/views/AddFact/AddFact';
import EditFact from './components/views/EditFact/EditFact';
import Login from './components/views/Login/Login';
import ReportFeed from './components/views/ReportFeed/ReportFeed';
import About from './components/views/About/About';

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
              exact path = { '/about-truth-checker' }
              component = { About }
            />
            <PublicRoute
              path={ config.LOGIN_PAGE }
              component={ Login }
            />
            <PublicRoute
              path={ config.SUBMIT_FACT_PAGE }
              component={ AddFact }
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
