import React from 'react';

import './ErrorMessage.scss';

const ErrorMessage = (props) => {
    return (
        <div className="error-message">
            <p className="form-error-label">
                { props.message }
            </p>
        </div>
    )
}

export default ErrorMessage;