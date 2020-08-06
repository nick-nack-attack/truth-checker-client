import React from 'react';
import {useHistory} from 'react-router-dom';

import config from '../../../config';

import Label from '../Label/Label';
import Button from '../Button/Button'

import './NoResult.scss';

const NoResult = (props) => {

  const history = useHistory();
  const addNewFact = <Label type="addFact"/>

  const handleAddNewFactClick = () => {
    history.push(config.SUBMIT_FACT_PAGE)
  };

  return (
      <div className="no-results-div">
        <Label type="noResults"/>
        <p className="cta-text"> Serve your country by submitting a fact about
          <span>"{props.searchTerm}"</span>
          to be approved by the Department of Truth and Facts!* </p>
        <Button
            className="add-fact"
            text={addNewFact}
            onClick={handleAddNewFactClick}
        >
          New fact
        </Button>
        <p className="disclaimer top-item">
          * excitement not included**
        </p>
        <p className="disclaimer">
          ** nothing exciting is included***
        </p>
        <p className="disclaimer">
          *** nothing is included
        </p>
      </div>
  )
}

export default NoResult;