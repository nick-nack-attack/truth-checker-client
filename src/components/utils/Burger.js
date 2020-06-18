// hamburger menu
import React, { useContext } from 'react';
import { bool, func } from 'prop-types';

// contexts
import { SessionContext } from '../../contexts/SessionContext';

// styling
import { StyledBurger } from './Burger.styled';
//import './Burger.scss';

const Burger = ({open, setOpen}) => {

    // Using the session context to control menu state
    const { state, dispatch } = useContext(SessionContext);

    // Open or close menu
    let toggleMenu = () => dispatch({
        type: "toggle-menu"
    });

    return (

        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div/>
            <div/>
            <div/>
        </StyledBurger>

        // <div
        //     className="burger"
        //     open={open}
        //     onClick={() => {
        //         setOpen(!open)
        //     }}
        // >
        //     <div className={`row ${state.menu.open ? 'open' : ''}`} />
        //     <div className={`row ${state.menu.open ? 'open' : ''}`} />
        //     <div className={`row ${state.menu.open ? 'open' : ''}`} />
        // </div>

    );

};

Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired
};

export default Burger;