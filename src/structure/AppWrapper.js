// this fetch wrapper will listen and regetch data if needed
import React, { useContext, useEffect } from 'react';

// services
import FactsApiService from '../services/facts-service';

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

    useEffect(() => {
      Promise.all([
        FactsApiService.getFacts()
      ])
      .then(([facts]) => {
        // set the contxt with the data that's returned
        itemsContext.dispatch({
          type: 'set-facts',
          payload: facts
        })
      })
    }, [itemsContext.state.fetched])

  return (
    <>
    <main>
      {props.children}
    </main>
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