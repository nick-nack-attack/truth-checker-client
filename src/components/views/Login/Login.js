// ADMIN LOGIN COMPONENT
import React, { useContext, useEffect, useState } from 'react';

// contexts
import { UserContext } from '../../../contexts/UserContext';

// components
import  Error from '../../utils/Error/Error';
import Form from '../../utils/Form/Form';
import { useHistory } from 'react-router-dom';
import { UseInputChange } from '../../utils/UseInputChange'

import UsersService from '../../../services/users-service';
import TokenService from '../../../services/token-service';

import sticky_note from '../../../assets/sticky_note.png';

import './Login.scss'

const Login = () => {
    
    let { dispatch } = useContext(UserContext);
    const [ helperText, setHelperText ] = useState('Welcome back!');
    const [ errors, setErrors ] = useState({});
    
    // logs user in
    let login = (data) => dispatch({
        type: "login",
        data: data
    });

    const history = useHistory();

    // initialize input context
    const [ input, handleInputChange ] = UseInputChange();

    // validate form
    const validateAdminLoginForm = (e) => {
        setErrors({});
        setHelperText('Validating form...');
        e.preventDefault();
        let errors = {};
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

    const handleCancelClick = () => {
        history.push('/')
    };

    // submits form if creds are provided
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
            login(res)
            history.push('/');
        })
        .catch(res => {
            // update error text if there's an issue
            setErrors(res)
        })

    };

    return (
        <div className='login-page-div'>
            <Form
                formType="Login-Form"
                validateAdminLoginForm={e => validateAdminLoginForm(e)}
                handleInputChange={handleInputChange}
                handleCancelClick={handleCancelClick}
            />
            <div>
                <div className="helper-text-div">{ errors.error ? <Error message={errors.error}/> : helperText}</div>

                <p className="disclaimer-text">
                    <img id="stick_note" src={sticky_note} alt="sticky note with 'admin@dtf.gov password' on it"/>
                        DISCLAIMER: ANY UNGRANTED ACCESS GAINED INTO THIS SYSTEM WILL RESULT IN VARIOUS TRIVIAL AND/OR ABITRARY PUNISHMENTS IN ORDER TO PUBLICLY SHAME YOU AND/OR RUIN YOUR LIFE TO MAKE IT LOOK LIKE JUSTICE IS BEING SERVED AND/OR WE'RE KEEPING OUR (NOT YOUR) COMMUNITY SAFE.
                </p>
            </div>
        </div>
    );

};

export default Login;