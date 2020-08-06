import React from 'react';

import './Error.scss';

const Error = (props) => {
  return (
      <div className="error-message">
        <p className="form-error-label">
          {props.message}
        </p>
      </div>
  )
}

export default Error;