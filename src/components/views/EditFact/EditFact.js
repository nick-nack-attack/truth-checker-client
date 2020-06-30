// admin can edit a fact on this page
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

// contexts and hooks
import { ItemsContext } from '../../../contexts/ItemsContext';
import { UseInputChange } from '../../../hooks/UseInputChange'

// helpers
import config from '../../../config';
import { inputDateFormat, findFactById } from '../../../helpers/helpers';

// components
import Error from '../../utils/Error/Error'
import Form from '../../utils/Form/Form';

// service
import FactsApiService from '../../../services/facts-service';

//styling
import './EditFact.scss'

// fact is passed in as a prop
const EditFact = (props) => {

    // bring in itemsContext
    const itemsContext = useContext(ItemsContext);

    // initialize history
    const history = useHistory();

    // set hooks
    const [ input, handleInputChange ] = UseInputChange({});

    // set fact variables
    const currentFact = findFactById(props.fact_id, itemsContext.state.facts) || {title: ''};
    const [ title, setTitle ] = useState();
    const [ factId, setFactId ] = useState();
    const [ submitted, setSubmitted ] = useState();
    const [ underReview, setUnderReview ] = useState();
    const [ approved, setApproved ] = useState();
    const [ notTrue, setNotTrue ] = useState();
    
    // set errors
    const [ errors, setErrors ] = useState({});

    // when facts are fetched, set the current fact data
    useEffect(() => {
        if ( itemsContext.state.fetched ) {
            setTitle(currentFact.title);
            setFactId(currentFact.fact_id);
            setSubmitted( currentFact.date_submitted ? inputDateFormat(currentFact.date_submitted) : null )
            setUnderReview( currentFact.date_under_review ? inputDateFormat(currentFact.date_under_review) : null )
            setApproved( currentFact.date_approved ? inputDateFormat(currentFact.date_approved) : null )
            setNotTrue( currentFact.date_not_true ? inputDateFormat(currentFact.date_not_true) : null )
        }
    }, 
        [
            currentFact.title,
            currentFact.fact_id,
            currentFact.date_submitted,
            currentFact.date_under_review,
            currentFact.date_approved,
            currentFact.date_not_true,
            itemsContext.state.fetched
        ]
    );

    // delete fact after user confirmation
    const handleClickDelete = (fact_id, e) => {
        e.preventDefault()
        if (window.confirm(`Are you sure you want to delete this Fact?`)) {
            FactsApiService.deleteFact(
                fact_id
            )
            .then(() => {
                itemsContext.dispatch({
                    type: 'refetch'
                });
                history.push(config.FACTS_FEED)
            });
        };
    };

    // validate edit fact form submission
    const validateEditFactForm = (e) => {

        e.preventDefault();
        let errors = {};

        // if title isn't set then set error
        if ( title.length !== 0 && input.title !== undefined && input.title !== '' ) {
            errors.title = { message: "Title is required" }
        };
        
        // set errors if there are any
        // otherwise submit the form
        if (Object.keys(errors).length !== 0) {
            return (setErrors(errors))
        } else {
            submitForm()
        };

    };

    // submit form when validation is passed
    const submitForm = () => {

        const factFields = {
            ...input,
            // since public user, hard code it to 2 
            user_id: 2
        };

        // update fact on server then refetch facts
        FactsApiService.updateFact(props.fact_id, factFields)
            .then(() => {
                itemsContext.dispatch({
                    type: 'refetch'
                });
                // return user to facts feed
                history.push(config.FACTS_FEED);
            });

    };

    // return form with fact data as default
    return (
        
        <>
            <Form
                formType="Edit-Fact"
                validateEditFactForm={e => validateEditFactForm(e)}
                handleInputChange={handleInputChange}
                title={title}
                submitted={submitted}
                underReview={underReview}
                approved={approved}
                notTrue={notTrue}
                handleCancelClick={() => history.push(config.FACTS_FEED)}
                handleClickDelete={e => handleClickDelete(factId, e)}
            />

            { errors.title 
                ?   <Error
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