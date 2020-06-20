// ADMIN LOGIN COMPONENT
import React, { useContext, useEffect, useState } from 'react';

// contexts
import { UserContext } from '../../../contexts/UserContext';

// components
import  ErrorMessage from '../../utils/ErrorMessage';
import { useHistory } from 'react-router-dom';
import { UseInputChange } from '../../utils/UseInputChange'

import UsersService from '../../../services/users-service';
import TokenService from '../../../services/token-service';

const Login = () => {
    
    let { dispatch } = useContext(UserContext);
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

    // submits form if creds are provided
    const submitLogin = () => {
        
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

        <form
            onSubmit={e => validateAdminLoginForm(e)}
        >
            <legend>Login</legend>
            <br/>
            <br/>
            <label>Email</label>
            <input
                id="email-field"
                type="email"
                name="email"
                autoComplete="email"
                value ="admin@dtf.gov"
                onChange={handleInputChange}
            />
            <br/>
            <br/>
            <label>Password</label>
            <input
                id="password-field"
                type="password"
                name="password"
                autoComplete="current-password"
                onChange={handleInputChange}
            />
            <br/>
            <p>password is certainly not password</p>
            <br/>
            <button>Submit</button>
            { errors.error 
                ?   <ErrorMessage message={errors.error}
                    />
                :   ""
            }
            <br/>
            <br/>
            <button
                onClick={e => history.push('/')}
            >
                Cancel
            </button>
        </form>

    )

}

export default Login;