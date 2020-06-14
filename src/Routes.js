// Routes
import React, { useContext, useEffect } from 'react';

// Services
// import TokenService from 'services'

// contexts
import { UserContext } from './contexts/UserContext';
import { ItemsContext } from './contexts/ItemsContext';

import LoggedOut from './routes/LoggedOut/LoggedOut';

export const Routes = () => {
    let { state } = useContext(UserContext);

    useEffect(() => {

    }, [state] );
    return (
        <div className='Routes-div'>
            <LoggedOut/>
        </div>
    )
}