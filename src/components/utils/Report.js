// hamburger menu
import React, { useContext } from 'react';
import { bool, func } from 'prop-types';

// contexts
import { SessionContext } from '../../contexts/SessionContext';

// styling
//import './Burger.scss';

const Report = (props) => {

    // Using the session context to control menu state
    const { state, dispatch } = useContext(SessionContext);
    const fact_id = props.fact_id;

    const handleReportClick = (fact_id) => {
        console.log(`Report fact:`, fact_id)
    };

    return (
            <button
                onClick={e => handleReportClick(fact_id)}
            >
                Report Fact # {fact_id}
            </button>
    );

};

export default Report;