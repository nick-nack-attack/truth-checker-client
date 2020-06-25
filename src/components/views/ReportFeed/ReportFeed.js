// a feed showing all reported facts for admin to review
import React, { useContext, useEffect, useState } from 'react';

// context
import { ItemsContext } from '../../../contexts/ItemsContext';

// helpers
import { prettyDate } from '../../../helpers/helpers'

// component
import Label from '../../utils/Label/Label';

// services
import FactsApiService from '../../../services/facts-service';

// styling
import './ReportFeed.scss'

const ReportFeed = () => {

    // set context
    let itemsContext = useContext(ItemsContext);

    // set local state 
    const [ reportedFacts, setReportedFacts ] = useState([]);

    // delete a reported fact
    const handleApproveReportClick = (fact_id) => {
        if (window.confirm(`Are you sure you want to disapprove of Fact #${fact_id}? It will be deleted immediately and will have never existed.`)) {
            FactsApiService.deleteFact(
                fact_id
            )
            .then(() => {
                window.alert("The Fact, which never existed, has been deleted. Which is impossible. But you don't know that.");
            })
        }
    };

    // set reported facts when fetched
    useEffect(() => {

        setReportedFacts(itemsContext.state.reports)
       
    }, [itemsContext.state.fetched, itemsContext.state.reports]);

    return (

        <div className="report-feed">
            <h2>
                Reported Facts
            </h2>
            <div className="list-of-reports">
                { reportedFacts
                    .sort((a,b) => b.number_of_reports - a.number_of_reports)
                    .map(ft => {
                        return (
                            <div className='report-conntainer'>
                                <p>
                                    <span className="report-label">
                                        Fact Id
                                    </span>
                                        { ft.fact_id }
                                </p>
                                <p>
                                    <span className="report-label">
                                        Title
                                    </span>
                                        { ft.title }
                                </p>
                                <p>
                                    <span className="report-label">
                                        Status
                                    </span>
                                        { ft.fact_status }
                                </p>
                                <p>
                                    <span className="report-label">
                                        Date Submitted
                                    </span>
                                        { prettyDate(ft.date_submitted) }
                                </p>
                                <p>
                                    <span className="report-label">
                                        Number of Reports
                                    </span>
                                        { ft.number_of_reports }
                                </p>
                                <div>
                                    <span>
                                        <button onClick={e => handleApproveReportClick(ft.fact_id)}>
                                            <Label type="delete"/>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );

};

export default ReportFeed;