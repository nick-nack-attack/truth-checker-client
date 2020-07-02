// login to the admin portal

import React, { useContext, useState } from 'react';
import config from '../../../config';

// contexts
import { UserContext } from '../../../contexts/UserContext';

// components
import  Error from '../../utils/Error/Error';
import Form from '../../utils/Form/Form';
import { useHistory } from 'react-router-dom';
import { UseInputChange } from '../../../hooks/UseInputChange';

// services
import UsersService from '../../../services/users-service';
import TokenService from '../../../services/token-service';

// styling and assets
import './Login.scss';
import stickynote from '../../../assets/sticky-note.png';

const Login = props => {
    
    // set variables
    let { dispatch } = useContext(UserContext);
    const history = useHistory();

    const [ helperText, setHelperText ] = useState('Welcome back!');
    const [ input, handleInputChange ] = UseInputChange();
    const [ errors, setErrors ] = useState('');
    
    // logs user in
    let login = (data) => dispatch({
        type: "login",
        data: data
    });

    // validate form submission
    const validateAdminLoginForm = (e) => {
        setErrors({});
        setHelperText('Validating form...');
        e.preventDefault();
        let errors = {};
        // email hard-coded to admin email
        // if ( input["email"] === undefined || input["email"] === '' ) {
        //     errors = { error: "Email is required" }
        // }
        if ( input["password"] === undefined || input["password"] === '' ) {
            errors = { error: "Password is required" }
        }

        if ( Object.keys(errors).length !== 0 ) {
            return (
                setErrors(errors)
            );
        } else {
            submitLogin();
        }
    };

    // return user to root on cancel login
    const handleCancelClick = () => {
        history.push(config.FACTS_FEED)
    };

    // submits form if validation is passed
    const submitLogin = () => {
        setErrors({});
        setHelperText('Submitting login...');

        // set login credentials
        const loginCreds = {
            email: "admin@dtf.gov",
            password: input["password"]
        };

        // use service to post the login
        UsersService.postLogin(loginCreds)
        .then(res => {
            TokenService.saveAuthToken(res.authToken, res.user_id);
            loginCreds.email = '';
            loginCreds.password = '';
        })
        .then(res => {
            // Once the token and id are posted
            // go to the root
            login(res);
            props.onSuccess('log-in');
            history.push(config.FACTS_FEED);
        })
        .catch((res) => {
            // update error text if there's an issue
            setErrors(res)
        })

        setTimeout(() => {
            setHelperText('Connection issue. Try again.');
        }, 6000)

    };

    // show login form, helper/error text, and disclaimer text
    return (
        <div className='login-page-div'>
            <Form
                formType="Login-Form"
                validateAdminLoginForm={e => validateAdminLoginForm(e)}
                handleInputChange={handleInputChange}
                handleCancelClick={handleCancelClick}
            />
            <div>
                <div className="helper-text-div">
                    { errors.error 
                        ? <Error message={errors.error}/> 
                        : helperText}
                </div>
                <p className="disclaimer-text">
                    <img id="stick_note" src={stickynote} alt="sticky note with 'admin@dtf.gov password' on it"/>
                        DISCLAIMER: ANY UNGRANTED ACCESS GAINED INTO THIS SYSTEM WILL RESULT IN VARIOUS TRIVIAL AND/OR ABITRARY PUNISHMENTS IN ORDER TO PUBLICLY SHAME YOU AND/OR RUIN YOUR LIFE TO MAKE IT LOOK LIKE JUSTICE IS BEING SERVED AND/OR WE'RE KEEPING OUR (NOT YOUR) COMMUNITY SAFE.
                </p>
            </div>
        </div>
    );
};

export default Login;