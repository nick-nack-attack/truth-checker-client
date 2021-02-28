// holds all the routes for the app
import * as React               from 'react';
import { useContext, useState } from 'react';
import { Switch }               from 'react-router-dom';

// get app routes from config file
import config from '../../../config';

// get public and private routes
import PrivateRoute from '../../../routes/PrivateRoute';
import PublicRoute  from '../../../routes/PublicRoute';

// get app views
import About        from '../../views/About/About';
import AddFact      from '../../views/AddFact/AddFact';
import EditFact     from '../../views/EditFact/EditFact';
import FactFeed     from '../../views/FactFeed/FactFeed';
import Footer       from '../Footer/Footer';
import Header       from '../Header/Header';
import Notification from '../../utils/Notification/Notification';
import LandingPage  from '../../views/LandingPage/LandingPage';
import Login        from '../../views/Login/Login';
import ReportFeed   from '../../views/ReportFeed/ReportFeed';
import NotFound     from '../../views/NotFound/NotFound';

// styling
import './App.scss';
import { findFactById } from "../../../helpers/helpers";
import { ItemsContext } from "../../../contexts/ItemsContext";

const App = () => {

  const itemsContext = useContext(ItemsContext);
  const [notification, setNotification] = useState(null);

  const handleNotification = notification => {
    setNotification(notification);
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  return (

      <div id="Truth-Checker">
        <Header
            onSuccess={ev => handleNotification(ev)}
        />

        <div className={notification ? "show" : "hide"}>
          {notification
              ? <Notification flavor={notification}/>
              : ''
          }
        </div>

        <Switch>
          <PublicRoute
              exact path={ config.ROOT }
              component={ LandingPage }
          />
          <PublicRoute
              exact path={ config.FACTS_FEED }
              component={ () => {
                return (
                    <FactFeed
                        onSuccess={ (ev) => handleNotification(ev) }
                    />
                )
              }}
          />
          <PublicRoute
              exact path={ config.ABOUT_PAGE }
              component={ About }
          />
          <PublicRoute
              path={ config.LOGIN_PAGE }
              component={ () => {
                return (
                    <Login
                        onSuccess={ (ev) => handleNotification(ev) }
                    />
                )
              }}
          />
          <PublicRoute
              path={ config.SUBMIT_FACT_PAGE }
              component={ () => {
                return (
                    <AddFact
                        onSuccess={ (ev) => handleNotification(ev) }
                    />
                )
              }}
          />
          <PrivateRoute
              exact path={ config.EDIT_FACT_PAGE }
              component={ (props) => {
                return (
                    <EditFact
                        fact={ findFactById(props.match.params.fact_id, itemsContext.state.facts) }
                        onSuccess={ (ev) => handleNotification(ev) }
                    />
                )
              }}
          />
          <PrivateRoute
              exact path={ config.REPORTS_PAGE }
              component={ () => {
                return (
                    <ReportFeed
                        onSuccess={ (ev) => handleNotification(ev) }
                    />
                )
              }}
          />
          <PublicRoute
            component={ NotFound }
          />
        </Switch>
        <Footer/>
      </div>

  );
}

export default App;
