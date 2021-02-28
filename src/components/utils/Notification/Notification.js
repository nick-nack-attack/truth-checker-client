// notification component
// handles text that's passed in
import React from 'react';

import './Notification.scss';

const Notification = (props) => {

  const success = (txt, fv) => (
      <div className={`notification-div ${fv}`}>
        <span className="note-title">Success</span>
        <p>{txt}</p>
      </div>
  );

    switch(props.flavor) {
        case "add-fact":
            return success('Fact has been submitted', 'success');
        case "edit-fact":
            return success('Fact has been updated', 'success');
        case "delete-fact":
            return success('Fact has been deleted', 'alert');
        case "report-fact":
            return success('Fact has been reported', 'alert');
        case "log-in":
            return success(`You've been logged in`, 'success');
        case "log-out":
            return success(`You've been logged out`, 'alert');
        default:
            return '';
    }

};

export default Notification;
