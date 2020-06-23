import React from 'react';

import './Label.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faBook, faCalendarDay, faBars, faTimes, faPlusSquare, faEyeSlash, faLock, faTrash, faEdit, faFlag } from "@fortawesome/free-solid-svg-icons";

// this label takes in the argument 'type'
const Label = (props) => {
    return (
        props.type === 'status' 
                ? <span className="fact-label white status"><FontAwesomeIcon color="white" icon={faCheckSquare}/> Fact Status </span> 
            : props.type === 'date' 
                ? <span className="fact-label white date"><FontAwesomeIcon color="white" icon={faCalendarDay}/> Date </span> 
            : props.type === 'id' 
                ? <span className="fact-label white id"><FontAwesomeIcon color="white" icon={faBook}/> Fact id </span> 
            : props.type === 'openedMenu' 
                ? <span className="fact-label black menu"><FontAwesomeIcon color="black" icon={faBars}/> Menu </span>
            : props.type === 'closedMenu'
                ? <span className="fact-label black menu"><FontAwesomeIcon color="black" icon={faTimes}/> Menu </span>
            : props.type === 'addFact'
                ? <span className="fact-label black menu"><FontAwesomeIcon color="black" icon={faPlusSquare}/> New Fact </span>
            : props.type === 'noResults'
                ? <span className="fact-label black"><FontAwesomeIcon color="black" icon={faEyeSlash}/> No Results Found </span>
            : props.type === 'admin'
                ? <span><FontAwesomeIcon icon={faLock}/>{' '}Administrator Portal</span> 
            : props.type === 'delete'
                ? <span className="fact-label"><FontAwesomeIcon icon={faTrash}/> Delete Fact </span>
            : props.type === 'edit'
                ? <span className="fact-label"><FontAwesomeIcon icon={faEdit}/> Edit Fact </span>
            : props.type === "report"
                ? <span className="fact-label"><FontAwesomeIcon icon={faFlag}/> Report Fact </span>
            : <span></span>
    );
};

export default Label;