// this is the app footer
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import config from '../config';

import dtf_logo_alt from '../assets/DTF-logo-alt.png'
import './Footer.scss';

const Footer = () => {
    return (
        <footer className='Footer_wrapper'>
            <div className="Footer">
                <img id="dtf_logo_alt" src={dtf_logo_alt} />
                <Link to={config.LOGIN_PAGE}>
                    <div className='footer-label'>Admin Login</div>
                </Link>
            </div>
        </footer>
    )
}

export default Footer;