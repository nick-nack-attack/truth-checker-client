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
import AdminLogin from '../../components/views/AdminLogin/AdminLogin';

// contexts
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
                    path={'/submit-fact'}
                    component={ AddFactForm }
                />
                <PublicRoute
                    path={'/admin-login'}
                    component={ AdminLogin }
                />
            </Switch>
        </AppWrapper>
        <Footer/>
        </AuthContextProvider>
    );
};

export default LoggedOut;
