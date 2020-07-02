// this component handles text that's passed in
import React from 'react';

import './Notification.scss';

const Notification = (props) => {

    const success = (txt, fv) => (
        <div className={`notification-div ${fv}`}>
            <span className="note-title">Success</span>
            <p>{ txt }</p>
        </div>
    )

    return (
        
        props.flavor === 'add-fact' 
            ? success('Fact has been submitted', 'success')

        : props.flavor === 'edit-fact'
            ? success('Fact has been updated', 'success')

        : props.flavor === 'delete-fact'
            ? success('Fact has been deleted', 'alert')

        : props.flavor === 'report-fact'
            ? success('Fact has been reported', 'alert')

        : props.flavor === 'log-in'
            ? success(`You've been logged in`, 'success')
            
        : props.flavor === 'log-out'
            ? success(`You've been logged out`, 'alert')
        : ''
    )

};

export default Notification;