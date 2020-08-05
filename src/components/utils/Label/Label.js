import React from 'react';

import './Label.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faSignOutAlt, 
    faExclamationCircle, 
    faCheckDouble, 
    faBars, 
    faTimes, 
    faPlus, 
    faEyeSlash, 
    faLock, 
    faTrash, 
    faEdit, 
    faFlag ,
    faInfoCircle,
    faSignInAlt
} from "@fortawesome/free-solid-svg-icons";

// this label takes in the argument 'type'
const Label = (props) => {
    return (
        // fact item labels
              props.type === "status"
                ? <span className="fact-label bold white status"> Fact Status</span> 
            : props.type === "date" 
                ? <span className="fact-label bold white date"> Date</span> 
            : props.type === "id" 
                ? <span className="fact-label bold white id"> Fact Id</span>
            : props.type === 'certifiedFact'
                ? <span className="fact-label bold white certifiedFact">Approved Fact</span>
            : props.type === 'certifiedNotTrue'
                ? <span className="fact-label bold white certifiedNotTrue">Certified False</span>
        // menu labels
            : props.type === "openedMenu"
                ? <span className="black menu"><FontAwesomeIcon icon={faBars}/> Menu </span>
            : props.type === "closedMenu"
                ? <span className="black menu"><FontAwesomeIcon icon={faTimes}/> Menu </span>
        // menu option labels
            : props.type === "about" 
                ? <span className="black menu"><FontAwesomeIcon icon={faInfoCircle}/> About Truth Checker </span>
            : props.type === "addFact"
                ? <span className="black menu"><FontAwesomeIcon icon={faPlus}/> New Fact </span>
            : props.type === "view-facts"
                ? <span className="black menu"><FontAwesomeIcon icon={faCheckDouble}/> View Facts </span>
            : props.type === "view-reports"
                ? <span className="black menu"><FontAwesomeIcon icon={faExclamationCircle}/> View Reports </span>
            : props.type === "logout"
                ? <span className="black menu"><FontAwesomeIcon icon={faSignOutAlt}/> Log out </span>
            : props.type === "login"
                ? <span className="black menu"><FontAwesomeIcon icon={faSignInAlt}/> Admin Login </span>
        // info labels
            : props.type === 'noResults'
                ? <span className="fact-label black"><FontAwesomeIcon icon={faEyeSlash}/> No Results Found </span>
            : props.type === "admin"
                ? <span><FontAwesomeIcon icon={faLock}/>{' '}Administrator Portal</span> 
            : props.type === "classified"
                ? <span className="classified-label"> CLASSIFIED </span>
        // action labels
            : props.type === "delete"
                ? <span className="fact-label"><FontAwesomeIcon icon={faTrash}/> Delete Fact </span>
            : props.type === "edit"
                ? <span className="fact-label"><FontAwesomeIcon icon={faEdit}/> Edit </span>
            : props.type === "report"
                ? <span className="fact-label"><FontAwesomeIcon icon={faFlag}/> Report </span>
            : ''
    );
};

export default Label;