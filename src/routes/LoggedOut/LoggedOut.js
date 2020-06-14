// logged out router
import React from 'react';
import {Switch, Route} from 'react-router-dom';

// route check
import PublicRoute from '../../utils/PublicRoute';

// contexts

// structure
import AppWrapper from '../../structure/AppWrapper';
import Header from '../../structure/Header';
import Footer from '../../structure/Footer';

// Views
import MainFeed from '../../components/views/MainFeed/MainFeed';
import AddFactForm from '../../components/views/AddFactForm/AddFactForm';
import AuthContextProvider from '../../contexts/AuthContextProvider';

const LoggedOut = () => {
    return (
        <AuthContextProvider>
            <Header/>
        <AppWrapper>
            <Switch>
                <PublicRoute
                    exact path ={ '/' }
                    component={ MainFeed }
                />
                <PublicRoute
                    exact path={'/submit-fact'}
                    component={ AddFactForm }
                />
            </Switch>
        </AppWrapper>
        <Footer/>
        </AuthContextProvider>
    );
};

export default LoggedOut;
