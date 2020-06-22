// button component
import React from 'react';

// files
import './Button.scss';

const Button = (props) => {
    return (
        <button {...props}>
            { props.text }
        </button>
    );
};

export default Button;