// admin can edit a fact on this page
import React, {useContext, useState} from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';

// contexts and hooks
import {ItemsContext} from '../../../contexts/ItemsContext';
import {UseInputChange} from '../../../hooks/UseInputChange';

// helpers
import config from '../../../config';

// components
import Error from '../../utils/Error/Error';
import Form from '../../utils/Form/Form';

// service
import FactsApiService from '../../../services/facts-service';

const EditFact = props => {

  // initialize variables
  const itemsContext = useContext(ItemsContext);
  const history = useHistory();
  const [input, handleInputChange] = UseInputChange({});
  const [errors, setErrors] = useState({});
  const [fact,] = useState(props.fact);

  const validateEditFactForm = (e) => {
    let errors = {};
    e.preventDefault();
    const numOfValues = Object.values(input).filter(Boolean).length;
    if (numOfValues === 0) {
      errors.title = {message: 'Must change at least one value to update'};
      setErrors(errors);
    } else {
      setErrors({});
      submitForm();
    }
  };

  const submitForm = () => {
    const fact_id = fact.fact_id;
    const fields = {
      ...input,
      // public user is hardcoded to 2
      user_id: 2
    };
    FactsApiService.updateFact(fact_id, fields)
        .then(() => {
          itemsContext.dispatch({
            type: 'refetch'
          });
          // on success, pass up to notification
          // and push to fact feed
          props.onSuccess('edit-fact');
          history.push(config.FACTS_FEED);
        })
  };

  const handleClickDelete = (id, e) => {
    e.preventDefault();
    if (window.confirm(`Are you sure you want to delete this Fact?`)) {
      FactsApiService.deleteFact(id)
          .then(() => {
            itemsContext.dispatch({
              type: 'refetch'
            });
            props.onSuccess('delete-fact');
            history.push(config.FACTS_FEED);
          });
    }
  };

  // return form
  return (
      <>
        <Form
            formType="Edit-Fact"
            validateEditFactForm={validateEditFactForm}
            handleInputChange={handleInputChange}
            title={fact.title}
            submitted={fact.date_submitted}
            underReview={fact.date_under_review}
            approved={fact.date_approved}
            notTrue={fact.date_not_true}
            handleCancelClick={() => history.push(config.FACTS_FEED)}
            handleClickDelete={e => handleClickDelete(fact.fact_id, e)}
        />
        {errors.title
            ? <Error
                message={errors.title.message}
            />
            : ""
        }
      </>
  )

};

EditFact.propTypes = {
  title: PropTypes.string,
  fact_id: PropTypes.number,
  date_submitted: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  date_under_review: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  date_approved: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  date_not_true: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export default EditFact;