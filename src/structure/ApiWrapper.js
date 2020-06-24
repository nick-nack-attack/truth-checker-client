// this fetch wrapper will listen and regetch data if needed
import React, { useContext, useEffect } from 'react';

// services
import FactsApiService from '../services/facts-service';
import TokenService from '../services/token-service';

// contexts
import { ItemsContext } from '../contexts/ItemsContext';

// helpers
import { addAdditionalProperties as modifyQuery } from '../helpers/helpers';
import { UserContext } from '../contexts/UserContext';

import gif from '../assets/loading.gif';

import './ApiWrapper.scss';

const ApiWrapper = (props) => {
    let itemsContext = useContext(ItemsContext);
    let { dispatch } = useContext(UserContext);

    // log user in and set settings to session
    let login = (settings) => dispatch({
        type: 'login',
        data: settings
    });

    let logout = (settings) => dispatch({
      type: 'logout',
      data: settings
    })

    let checkUserLoggedIn = () => {
      return (
        TokenService.hasAuthToken()
        ? login() 
        : logout()
      );
    };

    useEffect(() => {
      Promise.all([
        FactsApiService.getFacts(),
        FactsApiService.getReports()
      ])
      .then(([facts, reports]) => {
        // set the contxt with the data that's returned
        itemsContext.dispatch({
          type: 'set-facts',
          payload: facts
        });
        itemsContext.dispatch({
          type: 'set-reports',
          payload: reports
        })
        checkUserLoggedIn()
      })
    }, [itemsContext.state.fetched])

  return (
  
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
              <div className='loading-div'>
                <img id="loading-gif" src={gif}/>
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