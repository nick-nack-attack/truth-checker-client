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

const AppWrapper = (props) => {
    let itemsContext = useContext(ItemsContext);
    let { dispatch } = useContext(UserContext);

    // log user in and set settings to session
    let login = (settings) => dispatch({
        type: 'login',
        data: settings
    });

    let checkUserLoggedIn = () => {
      return (
        TokenService.getAuthToken
        ? login()
        : ''
      );
    };

    useEffect(() => {
      console.log(`USEEFFECT: Fetched in State?`, itemsContext.state.fetched)
      console.log(`FETCH IN STATE CHANGED! Running...`)
      Promise.all([
        FactsApiService.getFacts()
      ])
      .then(([facts]) => {
        // set the contxt with the data that's returned
        console.log(`Dispatching set-facts...`)
        itemsContext.dispatch({
          type: 'set-facts',
          payload: facts
        });
        checkUserLoggedIn()
      })
    }, [itemsContext.state.fetched])

  return (
    <>
    <div>
      { props.children }
    </div>
      {/* {ItemsContext.state.fetched
        ? (<main className="Main_wrapper">
            { props.children }
          </main>)
        : (<main className="Main_wrapper">
            <p className="fetching">Fetching data. Please wait...</p>
          </main>)
      } */}
    </>
  );
};

export default AppWrapper;