import React, { useContext, useState }  from 'react';
import { useHistory }                   from 'react-router-dom';

// import app routes from config file
import config from '../../../config';

// components
import Button from '../Button/Button';
import Label  from '../Label/Label';
import Menu   from '../Menu/Menu';

// User context
import { UserContext }  from '../../../contexts/UserContext';
import logo             from '../../../assets/logo-DTF.png';

// styling
import './Header.scss';

const Header = (props) => {

  // set variables
  const history = useHistory();
  // track if menu is open or closed
  const [open, setOpen] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  // set contexts
  let userContext = useContext(UserContext);

  // if user clicks cancel on log out confirmation
  const handleCancel = (ev) => {
    ev.preventDefault();
    setShowMenu(false);
  };

  // show log out confirmation to user
  // timeout if no action is taken
  const handleClickLogout = (ev) => {
    ev.preventDefault();
    setShowMenu(true);
    setTimeout(() => {
      setShowMenu(false);
    }, 7000);
  };

  // logs user out after confirmation
  const handleLogout = (ev) => {
    ev.preventDefault();
    userContext.dispatch({
      type: "logout"
    });
    props.onSuccess('log-out');
    setOpen(!open);

  };

  // redirect user to selected page using endpoints
  // in config file
  const handleMenuClick = (url) => {
    history.push(url);
    setOpen(!open);
  };

  // context labels
  const menuButtonLabel = open
      ? <Label type="openedMenu"/>
      : <Label type="closedMenu"/>

  // header will change color and menu options if user logs in as admin
  return (

      <header
          className={`header Header_wrapper ${userContext.state.isLoggedIn ? "admin" : ""}`}
      >
        <div className="header-without-menu-items">
          <div className="header-div main-dtf-logo" onClick={() => handleMenuClick(config.ROOT)}>
            <img src={logo} alt="dtf logo"/>
            <h1 className="title-text">
              DEPARTMENT OF TRUTH AND FACTS
            </h1>
          </div>
          <div className="header-div">
            <h2>
              Truth Checker
            </h2>
            <Button
                className={`menu-button ${open ? "on" : "off"}`}
                text={menuButtonLabel}
                onClick={() => setOpen(!open)}
            />
          </div>
        </div>
        <div className={`app-header-div ${userContext.state.isLoggedIn ? "admin-header-div" : ""}`}>
          {userContext.state.isLoggedIn
              // if the user is logged in as admin, show admin buttons
              ? <>
                <Button
                    className={`menu-item ${open ? "open" : "closed"}`}
                    text={<Label type="view-facts"/>}
                    onClick={() => handleMenuClick(config.FACTS_FEED)}
                />
                <Button
                    className={`menu-item ${open ? "open" : "closed"}`}
                    text={<Label type="view-reports"/>}
                    onClick={() => handleMenuClick(config.REPORTS_PAGE)}
                />
                <div>
                  <Button
                      className={`menu-item ${open ? "open" : "closed"}`}
                      text={<Label type="logout"/>}
                      onClick={ev => handleClickLogout(ev)}
                  />
                  <div className={showMenu ? "show" : "hide"}>
                    <Menu
                        text='Are you sure you want to log out?'
                        handleConfirm={ev => handleLogout(ev)}
                        handleCancel={ev => handleCancel(ev)}
                    />
                  </div>
                </div>
                <Button
                    className={`menu-item ${open ? "open" : "closed"}`}
                    text={<Label type="addFact"/>}
                    onClick={() => handleMenuClick(config.SUBMIT_FACT_PAGE)}
                />
                <div className='admin-header-label'><Label type="admin"/></div>
              </>
              :
              // else, if user is not admin, show public-facing buttons
              <>
                <Button
                    className={`menu-item ${open ? "open" : "closed"}`}
                    text={<Label type="about"/>}
                    onClick={() => handleMenuClick(config.ABOUT_PAGE)}
                />
                <Button
                    className={`menu-item ${open ? "open" : "closed"}`}
                    text={<Label type="view-facts"/>}
                    onClick={() => handleMenuClick(config.FACTS_FEED)}
                />
                <Button
                    className={`menu-item last ${open ? "open" : "closed"}`}
                    text={<Label type="login"/>}
                    onClick={() => handleMenuClick(config.LOGIN_PAGE)}
                />
                <Button
                    className={`menu-item add-fact last ${open ? "open" : "closed"}`}
                    text={<Label type="addFact"/>}
                    onClick={() => handleMenuClick(config.SUBMIT_FACT_PAGE)}
                />
              </>

          }
        </div>
      </header>

  )

};

export default Header;
