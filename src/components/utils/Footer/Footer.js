// footer for the app
import React from 'react';
import { Link } from 'react-router-dom';

// import app routes in config
import config from '../../../config';

// styling and assets
import './Footer.scss';
import logo from '../../../assets/logo-DTF-alt.png';

const Footer = () => {

    // return DTF logo and link to admin page
    return (
        <footer className='Footer_wrapper'>
            <div className="Footer">
                <img id="dtf_logo_alt" src={logo} alt="dtf logo"/>
                <Link to={config.LOGIN_PAGE}>
                    <div className='footer-label'>Admin Login</div>
                </Link>
            </div>
            <div>
                <p className="footer-disclaimer">
                    This work is licensed under a 
                    <a 
                        href="http://creativecommons.org/licenses/by-sa/3.0/" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Creative Commons Attribution-ShareAlike 3.0 Unported License.
                    </a>
                </p>
            </div>
        </footer>
    );

};

export default Footer;