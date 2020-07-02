// a feed showing all reported facts for admin to review
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import config from '../../../config'

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

const ReportFeed = props => {

    // set context
    let itemsContext = useContext(ItemsContext);

    // initialize history
    const history = useHistory();

    // set local state 
    const [ reportedFacts, setReportedFacts ] = useState([]);

    // delete a reported fact
    const handleApproveReportClick = (ev, fact_id) => {
        if (window.confirm(`Are you sure you want to disapprove of Fact #${fact_id}? It will be deleted immediately and will have never existed.`)) {
            FactsApiService.deleteFact(
                fact_id
            )
            .then(() => {
                itemsContext.dispatch({
                    type: 'refetch'
                });
                props.onSuccess('delete-fact');
                history.push(config.FACTS_FEED);
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
                                        <button onClick={ev => handleApproveReportClick(ev, ft.fact_id)}>
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