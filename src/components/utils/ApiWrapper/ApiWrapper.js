// this fetch wrapper will listen and refetch data if needed
import React, { useContext, useEffect } from 'react';

// services
import FactsApiService from '../../../services/facts-service';
import TokenService from '../../../services/token-service';

// contexts
import { ItemsContext } from '../../../contexts/ItemsContext';
import { UserContext } from '../../../contexts/UserContext';

// assets and styling
import gif from '../../../assets/loading.gif';
import './ApiWrapper.scss';

// interacts with api and fetching content when needed
const ApiWrapper = (props) => {

  let itemsContext = useContext(ItemsContext);
  let { dispatch } = useContext(UserContext);

  // logs the user in via context
  let login = (settings) => dispatch({
    type: 'login',
    data: settings
  });

  // logs the user out via context
  let logout = (settings) => dispatch({
    type: 'logout',
    data: settings
  });

  // check to see if the user is logged in or not
  let checkUserLoggedIn = () => {
    return (
      TokenService.hasAuthToken()
        ? login() 
        : logout()
      );
    };

  // get facts and reports from server
  useEffect(() => {
    Promise.all([        
      FactsApiService.getFacts(),
      FactsApiService.getReports()
    ])
    .then(([facts, reports]) => {
      // set the contxt with the returned data
      itemsContext.dispatch({
        type: 'set-facts',
        payload: facts
      });
      itemsContext.dispatch({
        type: 'set-reports',
        payload: reports
      })
        checkUserLoggedIn();
    })
  }, [itemsContext.state.fetched] );

  return (
  
    // when data is fetched, hide loading screen and show App
    <div>
      { itemsContext.state.fetched 
          ? 
            ( <div className="wrapper">
                { props.children }
              </div>
            )
          : 
            ( 
              <div className="wrapper">
                <div className="loading-div">
                  <img id="loading-gif" src={gif} alt="loading gif"/>
                  <h1>Department of Truth and Facts</h1>
                  <p className="fetching">Fetching data. Please wait...</p>
                </div>
              </div>
            )
      }
    </div>
   
  );
};

export default ApiWrapper;