// fact component to display in feed
import React from 'react';

// assets
import DTF_logo from '../../../assets/DTF_logo.png';

// utils
import { prettyDate } from '../../../helpers/helpers';

// components
import Label from '../Label/Label';

// files
import './Fact.scss'

// Fact takes the argument 'fact'
// 'title', 'status', 'fact_id', and 'date'
const Fact = (props) => {

    let primaryDate = props.fact.status === 'Not True'
        ? props.fact.date_not_true
        : props.fact.status === 'Approved'
        ? props.fact.date_approved
        : props.fact.status === 'Under Review'
        ? props.fact.date_under_review
        : props.fact.status === 'Pending'
        ? props.fact.date_submitted
        : new Date();

    return (
        <div className="main-feed-fact">
            <p className="fact-title"> 
                "{ props.fact.title }"
            </p>
            <div>
                <Label type="status"/>
                { props.fact.status }
            </div>
            <div>
                <Label type="date"/>
                { prettyDate(primaryDate) }
            </div>
            <div>
                <Label type="id"/>
                { props.fact.fact_id }
            </div>
            <div>
                <img className = "fact-logo" src={DTF_logo} alt="dtf logo"/>
            </div>
        </div>
    )
};

export default Fact;