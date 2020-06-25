import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

// import app routes from config file
import config from '../../../config';

// components
import Button from '../Button/Button';
import Label from '../Label/Label';

// User context
import { UserContext } from '../../../contexts/UserContext';
import logo from '../../../assets/logo-DTF.png';

// styling
import './Header.scss';

const Header = () => {

    // set variables
    const history = useHistory();
    // track if menu is open or closed
    const [open, setOpen] = useState(true);

    // set contexts
    let userContext = useContext(UserContext);
    
    // redirect user to admin login page
    const handleLoginClick = () => {
        history.push(config.LOGIN_PAGE);
        setOpen(!open);
    };

    // logs user out after confirmation
    const handleLogoutClick = () => {
        if (window.confirm(`Are you sure you want to log out?`)) {
            userContext.dispatch({
                type: "logout"
            });
            setOpen(!open);
        };
    };

    // return to root 
    const handleGotoRootClick = () => {
        history.push("/");
        setOpen(!open);
    };

    // redirect user to reports page
    const handleReportsClick = () => {
        history.push(config.REPORTS_PAGE);
        setOpen(!open);
    };

    // redirect user to about page
    const handleClickAbout = () => {
        history.push(config.ABOUT_PAGE);
        setOpen(!open);
    };

    // Go to Add Fact Page
    const handleAddFactClick = () => {
        history.push(config.SUBMIT_FACT_PAGE);
        setOpen(!open);
    };

    // context labels
    const menuButtonLabel = open 
        ? <Label type="openedMenu"/> 
        : <Label type="closedMenu"/>

    // header will change color and menu options if user logs in as admin
    return (

        <header 
            className={`header Header_wrapper ${userContext.state.isLoggedIn ? 'admin' : '' }`}
        >
            <div className="header-without-menu-items">
            <div className='header-div main-dtf-logo' onClick={handleGotoRootClick}>
                <img src={logo} alt="dtf logo"/>
                <h1 className='title-text'>
                    DEPARTMENT OF TRUTH AND FACTS
                </h1>
            </div>
            <div className='header-div'>
                <h2>
                    Truth Checker
                </h2>
                <Button
                    className={`menu-button ${open ? 'on' : 'off'}`}
                    text={menuButtonLabel}
                    onClick={e=> setOpen(!open)}
                />
            </div>
            </div>
            <div className={`app-header-div ${userContext.state.isLoggedIn ? 'admin-header-div' : '' }`}>
                { userContext.state.isLoggedIn 
                // if the user is logged in as admin, show admin buttons
                    ?   <>
                            <Button 
                                className={`menu-item ${open ? 'open' : 'closed'}`}
                                text={<Label type="view-facts"/>}
                                onClick={handleGotoRootClick}
                            />
                            <Button 
                                className={`menu-item ${open ? 'open' : 'closed'}`}
                                text={<Label type="view-reports"/>}
                                onClick={handleReportsClick}
                            />
                            <Button 
                                className={`menu-item ${open ? 'open' : 'closed'}`}
                                text={<Label type="logout"/>}
                                onClick={handleLogoutClick}
                            />
                            <Button
                                className={`menu-item ${open ? 'open' : 'closed'}`}
                                text={<Label type="addFact"/>}
                                onClick={handleAddFactClick}
                            />
                            <div class='admin-header-label'><Label type="admin"/></div>
                        </>
                    :   
                        // else, if user is not admin, show public-facing buttons
                        <>
                            <Button 
                                className={`menu-item ${open ? 'open' : 'closed'}`}
                                text={<Label type="about"/>}
                                onClick={handleClickAbout}
                            />
                            <Button 
                                className={`menu-item ${open ? 'open' : 'closed'}`}
                                text={<Label type="view-facts"/>}
                                onClick={handleGotoRootClick}
                            />
                            <Button 
                                className={`menu-item last ${open ? 'open' : 'closed'}`}
                                text={<Label type="login"/>}
                                onClick={handleLoginClick}
                            />
                            <Button
                                className={`menu-item add-fact last ${open ? 'open' : 'closed'}`}
                                text={<Label type="addFact"/>}
                                onClick={handleAddFactClick}
                            />
                        </>
                        
                }
            </div>
        </header>

    )

};

export default Header;