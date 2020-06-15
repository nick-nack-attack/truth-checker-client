// this component is menu
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

// contexts
import { UserContext } from '../../contexts/UserContext';
import { SessionContext } from '../../contexts/SessionContext';

// etc
import './Menu.scss';

const Menu = () => {

    let userContext = useContext(UserContext);
    let { state, dispatch } = userContext(SessionContext);

    let closeMenu = () => dispatch({
        type: "logout"
    });

    let logOut = () => userContext.dispatch({
        type: "logout"
    });

    return (

        <div
            className="Menu_wrapper"
        >
            <nav
                className={`menu ${state.menu.open ? 'open': ''}`}
            >
                <NavLink>
                    Link
                </NavLink>
                <Link to="/" onClick={() => {
                        closeMenu();
                        logOut();
                    }}>
                    <span></span> Logout
                </Link>
            </nav>
        </div>

    )

}

export default Menu;