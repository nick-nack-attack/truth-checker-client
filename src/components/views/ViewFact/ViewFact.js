import React, { useContext, useEffect, useState } from 'react';
import { ItemsContext } from '../../../contexts/ItemsContext';
import { useHistory } from 'react-router-dom';
import { findFactById } from '../../../helpers/helpers';

const ViewFact = (props) => {
    // bring in itemsContext
    const [fact, setFact] = useState({})
    const itemsContext = useContext(ItemsContext);
    // init history
    const history = useHistory();

    // set fact info when page reloads
    useEffect(() => {
        // get current fact data
        if ( itemsContext.state.fetched ) {
            let fact =
            itemsContext.state.facts.find(fact => {
                let factIdInt = parseInt(props.fact_id);
                return fact.fact_id === factIdInt
            });
        setFact(fact)
        }
    }, [itemsContext.state.fetched]);
    return (
        <div> 
            <p>Title: {fact.title}</p>
            <p>Text: {fact.text}</p>
            <p>Fact Id: {fact.fact_id}</p>
            <p>Status: {fact.status}</p>
            <p>Submitted: {fact.date_submittd}</p>
            <p>Under Review: {fact.date_under_review}</p>
            <p>Date Approved: {fact.date_approved}</p>
            <p>Not True: {fact.date_not_true}</p>
            <button
                onClick={() => history.push('/')}
            >
                Back
            </button>
        </div>
    )
}

export default ViewFact;