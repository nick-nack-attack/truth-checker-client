// this is the app header
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <div className='app-header-div'><h1>TRUTH CHECKER</h1></div>
            <div className='app-header-div'><button className='log-in'>Admin Login</button></div>
        </header>
    )
}

export default Header;