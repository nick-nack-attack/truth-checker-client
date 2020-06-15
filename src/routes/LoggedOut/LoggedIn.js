// logged in router for user
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// context
import AuthContextProvider from '../../contexts/AuthContextProvider';

// route check - direct when user is logged in
import PrivateRoute from '../../utils/PrivateRoute';

// app structure
import AppWrapper from '../../structure/AppWrapper';
import Header from '../../structure/Header';
import Footer from '../../structure/Footer';

// views
import MainFeed from '../../components/views/MainFeed/MainFeed';

// styling
import '../../index.css'

const LoggedIn = () => {

    return (
        <AuthContextProvider>
            <Header/>
            <AppWrapper>
                <Switch>
                    <PrivateRoute
                        exact path={''}
                        component={ MainFeed }
                    />
                </Switch>
            </AppWrapper>
        </AuthContextProvider>
    )

}

export default LoggedIn;