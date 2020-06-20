import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { ItemsContext } from '../../../contexts/ItemsContext';

import './ReportFeed.scss'
import FactsApiService from '../../../services/facts-service';

const ReportFeed = () => {

    let itemsContext = useContext(ItemsContext);

    const factLabel = 'main-feed-fact-label';
    const reportLabel = 'report-label';

    const [ reportedFacts, setReportedFacts ] = useState([]);

    const handleDismissReportClick = (fact_id) => {
        if (window.confirm(`Are you sure you want to approve Fact #${fact_id}? It will remain public on the Facts feed.`)) {            
    }};

    const handleApproveReportClick = (fact_id) => {
        if (window.confirm(`Are you sure you want to disapprove of Fact #${fact_id}? It will be deleted immediately and will have never existed.`)) {
            FactsApiService.deleteFact(
                fact_id
            )
            .then(() => {
                window.alert("The Fact, which never existed, has been deleted. Which is impossible. But you don't know that.")
            })
        }
    };

    useEffect(() => {

        setReportedFacts(itemsContext.state.reports)
       
    }, [itemsContext.state.fetched]);

    console.log()

    return (

        <div
            className="main-feed"
        >
            <p>Number of Reports</p>
            { reportedFacts.sort((a,b) => b.number_of_reports - a.number_of_reports).map(ft => {
                return (
                    <div className='report-conntainer'>
                        <p><span className={reportLabel}>Fact Id</span>{ ft.fact_id }</p>
                        <p><span className={reportLabel}>Title</span>{ ft.title }</p>
                        <p><span className={reportLabel}>Text</span>{ ft.text }</p>
                        <p><span className={reportLabel}>User Id</span>{ ft.user_id }</p>
                        <p><span className={reportLabel}>Status</span>{ ft.fact_status }</p>
                        <p><span className={reportLabel}>Date Submitted</span>{ ft.date_submitted }</p>
                        <p><span className={reportLabel}>Number of Reports</span>{ ft.number_of_reports }</p>
                            <div>
                                <span>
                                    <button
                                        onClick={e => handleApproveReportClick(ft.fact_id)}
                                    >
                                        Delete Fact
                                    </button>
                                </span>
                            </div>
                    </div>
                )
            })}
        </div>
    )

};

export default ReportFeed;