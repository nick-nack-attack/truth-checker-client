// button component
import React from 'react';

// files
import './Input.scss';

const Input = (props) => {
    return (
        <div className="input-div">
            <label>{ props.label }</label>
            <input {...props}>
                { props.text }
            </input>
        </div>
    );
};

export default Input;