// this fetch wrapper will listen and refetch data if needed
import React, {useContext, useEffect} from 'react';

// services
import FactsApiService from '../../../services/facts-service';
import TokenService from '../../../services/token-service';

// contexts
import {ItemsContext} from '../../../contexts/ItemsContext';
import {UserContext} from '../../../contexts/UserContext';

// assets and styling
import './ApiWrapper.scss';

// interacts with api and fetching content when needed
const ApiWrapper = (props) => {

    let itemsContext = useContext(ItemsContext);
    let {dispatch, state: {isLoggedIn}} = useContext(UserContext);

    // logs the user in via context
    let login = (settings) => {
        dispatch({
            type: 'login',
            data: settings
        });
        return isLoggedIn;
    }

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
            FactsApiService.getReports(),
        ])
            .then(([facts, reports]) => {
                // set the context with the returned data
                itemsContext.dispatch({
                    type: 'set-items',
                    payload: {facts, reports}
                })
            })
            .catch((err) => {
                console.log(`catch ran`, err);
            })
    }, [itemsContext.state.fetched]);

    useEffect(() => {
        checkUserLoggedIn();
    }, [])

    return (
        // when data is fetched, hide loading screen and show App
        <div>
            <div className="wrapper">
                { props.children }
            </div>
        </div>
    );
};

export default ApiWrapper;
