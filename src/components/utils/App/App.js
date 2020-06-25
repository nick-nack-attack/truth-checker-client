// holds all the routes for the app
import React from 'react';
import { Switch } from 'react-router-dom';

// get app routes from config file
import config from '../../../config';

// get public and private routes
import PrivateRoute from '../../../routes/PrivateRoute';
import PublicRoute from '../../../routes/PublicRoute';

// get app views
import About from '../../views/About/About';
import AddFact from '../../views/AddFact/AddFact';
import EditFact from '../../views/EditFact/EditFact';
import FactFeed from '../../views/FactFeed/FactFeed';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../../views/Login/Login';
import ReportFeed from '../../views/ReportFeed/ReportFeed';

// styling 
import './App.css';

function App() {

  return (
    
      <div id="Truth-Checker">
         <Header/>
          <Switch>
            <PublicRoute
              exact path ={ config.FACTS_FEED }
              component={ FactFeed }
            />
            <PublicRoute
              exact path = { config.ABOUT_PAGE }
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
