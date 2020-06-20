// This is the app header
import React, { useContext, useEffect, useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

// User context
import { UserContext } from '../contexts/UserContext';

// Components
import Burger from '../components/utils/Burger';
import Menu from '../components/utils/Menu';

// Files
import './Header.scss';

import { useOnClickOutside } from '../components/utils/hooks';

const Header = () => {

    // set up use history
    const history = useHistory();

    // set up context as user context
    let userContext = useContext(UserContext);
    
    // redirect to admin login
    const handleLoginClick = () => {
        history.push("/admin-login")
    };

    const handleLogoutClick = () => {
        userContext.dispatch({
            type: "logout"
        })
    }

    // toggle header style if logged in or out
    return (

        <header 
            className={`header Header_wrapper ${!userContext.state.isLoggedIn ? "launch" : "" }`}
        >
            <div className='app-header-div'>
                <Link to="/">
                    <h1>TRUTH CHECKER</h1>
                </Link>
            </div>
            <div className='app-header-div'>
                { userContext.state.isLoggedIn 
                    ?   <>
                    <Link to='/'>
                        <p>View Facts</p>
                    </Link>
                    <Link to='/reports'>
                        <p>View Reports</p>
                    </Link>
                        <button
                            className='header-button'
                            onClick={handleLogoutClick}
                        >
                            Logout
                        </button>
                        </>
                    :   (
                            <button 
                                className='log-in'
                                onClick={handleLoginClick}
                            >
                                Admin Login
                            </button>
                        )
                }
            </div>
        </header>

    )

};

export default Header;