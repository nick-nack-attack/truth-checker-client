// handle when user reports a specific fact
import React from 'react';
import PropTypes from 'prop-types';

// components
import Label from '../Label/Label';

// contexts
import FactsApiService from '../../../services/facts-service';

// send report after user confirms
const Report = (props) => {

    // submit report of a particular fact to be reviewed by an admin
    const handleReportClick = (id) => {
        if (window.confirm(`Are you sure you want to report Fact #${props.fact_id}?`)) {
            const reportedFact = {
                fact_id: id
            };
            // send report to server
            FactsApiService.reportFact(
                reportedFact    
            )
            .then(() => {
                // let user know when report has been submitted
                window.alert("Your report has been submitted")
            })
            .catch(() => {
                // handle error if some issue happens
                window.alert("An error has occured when sending your report.")
            })
        };
    };

    return (
            <button onClick={e => handleReportClick(props.fact_id)}>
                <Label type="report"/>
            </button>
    );

};

Report.propTypes = {
    fact_id: PropTypes.number,
};

export default Report;