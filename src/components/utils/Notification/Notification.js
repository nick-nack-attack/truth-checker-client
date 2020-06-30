// this component handles text that's passed in
import React, { useState, useEffect } from 'react';

import './Notification.scss';

const Notification = (props) => {

    const success = (txt) => (
        <div className="notification-div">
            <span className="note-title">Success</span>
            <p>{ txt }</p>
        </div>
    )

    return (
        
        props.flavor === 'added-fact' 
            ? success('Fact has been submitted!')

        : props.flavor === 'deleted-fact'
            ? success('Fact has been deleted.')

        : props.flavor === 'logged-in'
            ? success(`You've been logged in`)
            
        : props.flavor === 'logged-out'
            ? success(`You've been logged out`)
        : ''
    )

};

export default Notification;