// to add a fact
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

// contexts and hooks
import { ItemsContext } from '../../../contexts/ItemsContext';
import { UseInputChange } from '../../utils/UseInputChange'

// utils
import { inputDateFormat, findFactById } from '../../../helpers/helpers';

// components
import ErrorMessage from '../../utils/ErrorMessage'
import Form from '../../utils/Form/Form';

// service
import FactsApiService from '../../../services/facts-service';

import './EditFact.scss'

const EditFact = (props) => {

    // bring in itemsContext
    const itemsContext = useContext(ItemsContext);

    // initialize history
    const history = useHistory();

    const currentFact = findFactById(props.fact_id, itemsContext.state.facts)

    const [ input, handleInputChange ] = UseInputChange({
        //...currentFact
    });

    const [title, setTitle] = useState();
    const [text, setText] = useState();
    const [factId, setFactId] = useState();
    const [submitted, setSubmitted] = useState();
    const [underReview, setUnderReview] = useState();
    const [approved, setApproved] = useState();
    const [notTrue, setNotTrue] = useState();
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if ( itemsContext.state.fetched ) {
            setTitle(currentFact.title);
            setFactId(currentFact.fact_id);
            setText(currentFact.text || '');
            setSubmitted( currentFact.date_submitted ? inputDateFormat(currentFact.date_submitted) : null )
            setUnderReview( currentFact.date_under_review ? inputDateFormat(currentFact.date_under_review) : null )
            setApproved( currentFact.date_approved ? inputDateFormat(currentFact.date_approved) : null )
            setNotTrue( currentFact.date_not_true ? inputDateFormat(currentFact.date_not_true) : null )
        }
    }, [itemsContext.state.fetched]);

    const handleClickDelete = (fact_id, e) => {
        e.preventDefault()
        if (window.confirm(`Are you sure you want to delete this Fact?`)) {
            FactsApiService.deleteFact(fact_id)
                .then(res => {
                    itemsContext.dispatch({
                        type: 'refetch'
                    });
                    history.push('/')
                })
        }
    }

    // validate form
    const validateEditFactForm = (event) => {
        event.preventDefault();
        let errors = {};

        // if title isn't set then set error
        if ( title.length !== 0 && input.title !== undefined && input.title !== '' ) {
            errors.title = { message: "Title is required" }
        };
        
        // if there is more than zero errors, set them
        // otherwise submit the form
        if (Object.keys(errors).length !== 0) {
            return (setErrors(errors))
        } else {
            submitForm()
        }

    };

    // submit form when validation is passed
    const submitForm = () => {

        const factFields = {
            ...input,
            // since public user, hard code it to 2 
            user_id: 2
        };

        FactsApiService.updateFact(props.fact_id, factFields)
            .then(res => {
                itemsContext.dispatch({
                    type: 'refetch'
                });
                history.push('/')
            })

    };

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
            handleCancelClick={() => history.push('/')}
            handleClickDelete={e => handleClickDelete(factId, e)}
        />

        { errors.title 
                ?   <ErrorMessage
                        message={errors.title.message}
                    />
            : ""
            }

        </>
    )

}

export default EditFact;