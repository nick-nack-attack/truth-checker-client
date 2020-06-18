// this component is menu
import React, { useContext } from 'react';
import { bool } from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

// contexts
import { UserContext } from '../../contexts/UserContext';
import { SessionContext } from '../../contexts/SessionContext';

// etc
// import './Menu.scss';
import { StyledMenu } from './Menu.styled';

const Menu = ({open}) => {

    let userContext = useContext(UserContext);
    let { state, dispatch } = useContext(SessionContext);

    let closeMenu = () => dispatch({
        type: "toggle-menu"
    });

    let logOut = () => userContext.dispatch({
        type: "logout"
    });

    return (

        <StyledMenu
            open={open}
        >
            <a href="/">
                <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
                    About us
            </a>
            <a href="/">
                <span role="img" aria-label="price">&#x1f4b8;</span>
                    Pricing
            </a>
            <a href="/">
                <span role="img" aria-label="contact">&#x1f4e9;</span>
                    Contact
            </a>
        </StyledMenu>

        // <div className="Menu_wrapper">
        //     <nav
        //         className={`menu ${state.menu.open ? 'open': ''}`}
        //     >
        //         <NavLink>
        //             Link
        //         </NavLink>
        //         <Link to="/" onClick={() => {
        //                 closeMenu();
        //                 logOut();
        //             }}>
        //             <span></span> Logout
        //         </Link>
        //     </nav>
        // </div>

    )

}

Menu.propTypes = {
    open: bool.isRequired
}

export default Menu;