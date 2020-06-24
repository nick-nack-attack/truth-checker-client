// fact component to display in feed
import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// assets
import DTF_logo from '../../../assets/DTF_logo.png';

// utils
import { prettyDate } from '../../../helpers/helpers';

// contexts
import { UserContext } from '../../../contexts/UserContext';

// components
import Button from '../Button/Button';
import Label from '../Label/Label';
import Report from '../Report/Report';

// files
import './Fact.scss'

// Fact takes the argument 'fact'
// 'title', 'status', 'fact_id', and 'date'
const Fact = (props) => {

    // set context
    let userContext = useContext(UserContext);

    // set variables
    const [isAdmin, setIsAdmin] = useState();
    const history = useHistory();

    useEffect(() => {
        setIsAdmin(userContext.state.isLoggedIn)
    }, [userContext.state.isLoggedIn])

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

            { isAdmin ? 
                <Button
                    text={<Label type="edit"/>}
                    onClick={() => history.push(`/facts/id/${props.fact.fact_id}/edit`)}
                /> 
                :   
                <Report fact_id={props.fact.fact_id}/>
            }

        </div>
    )
};

export default Fact;