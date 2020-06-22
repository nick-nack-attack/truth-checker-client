// This is the app header
import React, { useContext, useEffect, useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

// components
import Button from '../components/utils/Button/Button';
import Label from '../components/utils/Label/Label';

// User context
import { UserContext } from '../contexts/UserContext';
import dtf_logo from '../assets/DTF_logo.png';

// Files
import './Header.scss';

const Header = () => {

    // set up use history
    const history = useHistory();

    // set up context as user context
    let userContext = useContext(UserContext);

    const [open, setOpen] = useState(true)
    
    // redirect to admin login
    const handleLoginClick = () => {
        history.push("/admin-login")
    };

    const handleLogoutClick = () => {
        userContext.dispatch({
            type: "logout"
        })
    };

    // context labels
    const menuButtonLabel = open ? <Label type="openedMenu"/> : <Label type="closedMenu"/>
    const addNewFact = <Label type="addFact"/>


    const handleGotoRootClick = () => {
        history.push("/")
    }

    // toggle header style if logged in or out
    return (

        <header 
            className={`header Header_wrapper ${!userContext.state.isLoggedIn ? "launch" : "" }`}
        >
            <div className='header-div main-dtf-logo' onClick={handleGotoRootClick}>
                <img src={dtf_logo} alt="dtf logo"/>
                <h1 className='title-text'>DEPARTMENT OF TRUTH AND FACTS</h1>
            </div>
            <div className='header-div'>
                <h2>Truth Checker</h2>
                <Button
                    className={`menu-button ${open ? 'on' : 'off'}`}
                    text={menuButtonLabel}
                    onClick={e=> setOpen(!open)}
                />
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
                    :   ( <>
                            <Button 
                                className={`menu-item ${open ? 'open' : 'closed'}`}
                                text='About Truth Checker'
                                onClick={handleGotoRootClick}
                            />
                            <Button 
                                className={`menu-item ${open ? 'open' : 'closed'}`}
                                text='View Facts'
                                onClick={handleGotoRootClick}
                            />
                            <Button 
                                className={`menu-item last ${open ? 'open' : 'closed'}`}
                                text='Admin Login'
                                onClick={handleLoginClick}
                            />
                            <Button
                                className={`menu-item last ${open ? 'open' : 'closed'}`}
                                text={addNewFact}
                            />
                            </>
                        )
                }
            </div>
        </header>

    )

};

export default Header;