import React from 'react';

import './Label.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faBook, faCalendarDay, faBars, faTimes, faPlusSquare } from "@fortawesome/free-solid-svg-icons";

// this label takes in the argument 'type'
const Label = (props) => {
    return (
        props.type === 'status' 
            ? <span className="fact-label white status"><FontAwesomeIcon color="white" icon={faCheckSquare}/> Fact Status</span> 
            : props.type === 'date' 
            ? <span className="fact-label white date"><FontAwesomeIcon color="white" icon={faCalendarDay}/> Date</span> 
            : props.type === 'id' 
            ? <span className="fact-label white id"><FontAwesomeIcon color="white" icon={faBook}/> Fact id</span> 
            : props.type === 'openedMenu' 
            ? <span className="fact-label black menu"><FontAwesomeIcon color="black" icon={faBars}/> Menu</span>
            : props.type === 'closedMenu'
            ? <span className="fact-label black menu"><FontAwesomeIcon color="black" icon={faTimes}/> Menu</span>
            : props.type === 'addFact'
            ? <span className="fact-label black menu"><FontAwesomeIcon color="black" icon={faPlusSquare}/> New Fact</span>
            : <span></span>
    );
};

export default Label;