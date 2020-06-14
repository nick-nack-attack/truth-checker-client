import React from 'react';

const ErrorMessage = (props) => {
    return (
        <div>
            <p className="form-error-label">
                { props.message }
            </p>
        </div>
    )
}

export default ErrorMessage;