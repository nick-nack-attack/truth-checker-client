import React from 'react';

import './Label.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faCheckDouble,
    faEdit,
    faExclamationCircle,
    faEyeSlash,
    faFlag,
    faInfoCircle,
    faLock,
    faPlus,
    faSignInAlt,
    faSignOutAlt,
    faTimes,
    faTrash
} from "@fortawesome/free-solid-svg-icons";

// this label takes in the argument 'type'
const Label = (props) => {

    switch (props.type) {
        case "status":
            return <span className="fact-label bold white status">Fact Status</span>
        case "date":
            return <span className="fact-label bold white date">Date</span>
        case "id":
            return <span className="fact-label bold white id">Fact Id</span>
        case "certifiedFact":
            return <span className="fact-label bold white certifiedFact">Approved Fact</span>
        case "certifiedNotTrue":
            return <span className="fact-label bold white certifiedNotTrue">Certified False</span>
        // menu labels
        case "openedMenu":
            return <span className="black menu"><FontAwesomeIcon className='label-button' icon={faBars}/>Menu</span>
        case "closedMenu":
            return <span className="black menu"><FontAwesomeIcon className='label-button' icon={faTimes}/>Menu</span>
        // menu option labels
        case "about":
            return <span className="black menu"><FontAwesomeIcon className='label-button' icon={faInfoCircle}/>About Truth Checker</span>
        case "addFact":
            return <span className="black menu"><FontAwesomeIcon className='label-button' icon={faPlus}/>New Fact</span>
        case "view-facts":
            return <span className="black menu"><FontAwesomeIcon className='label-button' icon={faCheckDouble}/>View Facts</span>
        case "view-reports":
            return <span className="black menu"><FontAwesomeIcon className='label-button' icon={faExclamationCircle}/>View Reports</span>
        case "logout":
            return <span className="black menu"><FontAwesomeIcon className='label-button' icon={faSignOutAlt}/>Log out</span>
        case "login":
            return <span className="black menu"><FontAwesomeIcon className='label-button' icon={faSignInAlt}/>Admin Login</span>
        // info labels
        case "noResults":
            return <span className="fact-label black"><FontAwesomeIcon className='label-button'icon={faEyeSlash}/>No Results Found</span>
        case "admin":
            return <span><FontAwesomeIcon className='label-button' icon={faLock}/>Administrator Portal</span>
        case "classified":
            return <span className="classified-label"> CLASSIFIED </span>
        // action labels
        case "delete":
            return <span className="fact-label"><FontAwesomeIcon className='label-button' icon={faTrash}/>Delete Fact</span>
        case "edit":
            return <span className="fact-label"><FontAwesomeIcon className='label-button' icon={faEdit}/>Edit</span>
        case "report":
            return <span className="fact-label"><FontAwesomeIcon className='label-button' icon={faFlag}/>Report</span>
        default:
            return ''

    }

};

export default Label;
