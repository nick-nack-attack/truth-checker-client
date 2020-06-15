// Routes
import React, { useContext, useEffect } from 'react';

// Services
import TokenService from './services/token-service';

// contexts
import { UserContext } from './contexts/UserContext';

// secondary routers for logged out or logged in
import LoggedIn from './routes/LoggedOut/LoggedIn';
import LoggedOut from './routes/LoggedOut/LoggedOut';

// styling
import './index.css';

export const Routes = () => {
    
    let { state } = useContext(UserContext);

    useEffect(() => {

    }, [state] );
    return (
        <div className='Routes-div'>
            { TokenService.hasAuthToken() 
                ?   <LoggedIn/>
                :   <LoggedOut/>
            }
            <LoggedOut/>
        </div>
    )
}