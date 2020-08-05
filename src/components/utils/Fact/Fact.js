// fact component to display in feed
import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// assets
import logo from '../../../assets/logo-DTF.png';

// utils
import { prettyDate } from '../../../helpers/helpers';

// contexts
import { UserContext } from '../../../contexts/UserContext';

// components
import Button from '../Button/Button';
import Label from '../Label/Label';
import Report from '../Report/Report';

// files
import './Fact.scss';

// Fact takes the argument 'fact'
// 'title', 'status', 'fact_id', 'date', and 'serial'
const Fact = props => {

    // set context
    let userContext = useContext(UserContext);

    // set variables
    const [ isAdmin, setIsAdmin ] = useState();
    const [ approved, ] = useState(props.fact.date_approved);
    const [ notTrue, ] = useState(props.fact.date_not_true)
    const history = useHistory();

    useEffect(() => {
        setIsAdmin(userContext.state.isLoggedIn)
    }, [userContext.state.isLoggedIn])

    let primaryDate = props.fact.status === "Not True"
        ? props.fact.date_not_true
        : props.fact.status === "Approved"
        ? props.fact.date_approved
        : props.fact.status === "Under Review"
        ? props.fact.date_under_review
        : props.fact.status === "Pending"
        ? props.fact.date_submitted
        : new Date();

    return (
        <div className={`main-feed-fact`}>

            <p className="fact-title"> 
                "{ props.fact.title }"
            </p>
            <div>
                <Label type={ approved ? 'certifiedFact' : notTrue ? 'certifiedNotTrue' : 'status' }/>
                { approved || notTrue ? prettyDate(primaryDate) : props.fact.status }
            </div>
            <div>
              { approved || notTrue ? '' : <Label type="date"/> }
              { approved || notTrue ? '' : prettyDate(primaryDate) }
            </div>
            <div>
              { approved || notTrue ? '' : <Label type="id"/> }
              { approved || notTrue ? '' : props.fact.fact_id }
            </div>
          <div>
            { approved || notTrue ? <p className="center">U.S. Department of Truth and Facts</p> : '' }
            { approved || notTrue ? <p className="center serial-number">{props.fact.serial}</p>:'' }
          </div>
            <div>
              { isAdmin ?
                  <Button
                      text={<Label type="edit"/>}
                      onClick={() => history.push(`/facts/id/${props.fact.fact_id}/edit`)}
                  />
                  :
                  <Report
                      id={props.fact.fact_id}
                      onSuccess={ev => props.onSuccess(ev)}
                  />
              }
            </div>
            { approved || notTrue
                ? <img className = "fact-logo" src={logo} alt="dtf logo"/>
                : ''
            }
        </div>
    )
};

export default Fact;