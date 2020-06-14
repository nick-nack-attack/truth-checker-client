// ADMIN LOGIN COMPONENT
import React, { useContext, useEffect, useState } from 'react';

// contexts
import { UserContext } from '../../../contexts/UserContext';

// components
import { ErrorMessage } from '../../utils/ErrorMessage';
import { useHistory } from 'react-router-dom';
import { UseInputChange } from '../../utils/UseInputChange';

const Login = () => {
    
    let { dispatch } = useContext(UserContext);
    const [errors, setErrors] = useState({});
    
    // logs user in
    let login = (data) => dispatch({
        type: "login",
        data: data
    });

    const history = useHistory();

    // initialize input context
    const [input, handleInputChange] = UseInputChange;

    // validate form
    const validateAdminLoginForm = (e) => {
        e.preventDefault();
        let errors = {};
        if ( input["email"] === undefined || input["email"] === '' ) {
            errors.email = { message: "Email is required" }
        }
        if ( input["password"] === undefined || input["password"] === '' ) {
            errors.email = { message: "Password is required" }
        }

        if ( Object.keys(errors).length !== 0 ) {
            return (
                setErrors(errors)
            );
        } else {
            submitLogin();
        }
    };

}