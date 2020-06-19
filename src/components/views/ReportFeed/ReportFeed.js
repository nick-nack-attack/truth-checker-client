import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { ItemsContext } from '../../../contexts/ItemsContext';

const ReportFeed = () => {

    let itemsContext = useContext(ItemsContext);

    const [ reportedFacts, setReportedFacts ] = useState([]);
    const [ reportedFactsArray, setReportedFactsArray ] = useState([])

    useEffect(() => {

        setReportedFacts(itemsContext.state.reports)
       
    }, [itemsContext.state.fetched])

    return (

        <div
            className="main-feed"
        >
            <p>Number of Reports</p>
            {reportedFacts.map(fact => {
                return (
                    <div>
                        <p>Fact Id</p>
                        { fact.fact_id }
                    </div>
                )
            })}
        </div>

    )

}

export default ReportFeed;