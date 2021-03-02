// 404 page for when user tries to go to a webpage that doesn't exist
import React from 'react';

// styling
import './NotFound.scss';

const NotFound = () => {
    return (
        <div className="not-found-div" >
            <h2>404</h2>
            <h3>There is nothing here for you to see.</h3>
            <p>Try going to a different page.</p>
        </div>
    )
}

export default NotFound;
