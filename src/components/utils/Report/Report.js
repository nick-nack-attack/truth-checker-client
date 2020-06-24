// hamburger menu
import React, { useContext } from 'react';
import { bool, func } from 'prop-types';

// contexts
import { SessionContext } from '../../../contexts/SessionContext';
import FactsApiService from '../../../services/facts-service';

// styling
//import './Burger.scss';

const Report = (props) => {

    // Using the session context to control menu state
    const { state, dispatch } = useContext(SessionContext);
    const fact_id = props.fact_id;

    const handleReportClick = (id) => {
        if (window.confirm(`Are you sure you want to report Fact #${fact_id}?`)) {
            const reportedFact = {
                fact_id: id
            };
            FactsApiService.reportFact(
                reportedFact    
            )
            .then(result => {
                window.alert("Your report has been submitted")
            })
        }
    };

    return (
            <button
                onClick={e => handleReportClick(props.fact_id)}
            >
                Report Fact
            </button>
    );

};

export default Report;