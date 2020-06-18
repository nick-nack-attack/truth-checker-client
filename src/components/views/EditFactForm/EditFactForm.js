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

// service
import FactsApiService from '../../../services/facts-service';

import './EditFactForm.scss'

const EditFactForm = (props) => {

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

    const handleClickDelete = (fact_id) => {
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
        /*
        if ( title.length !== 0 && input.title !== undefined && input.title !== '' ) {
            errors.title = { message: "Title is required" }
        }
        */

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
        <form
            id="Add_Fact_Form"
            onSubmit={e => validateEditFactForm(e)}
        >
            <legend><h2>Edit Fact Form</h2></legend>
            <p>Fact id: {factId}</p>
            <label htmlFor="title-field">Title </label>
            <input
                type="text"
                id="title-field"
                name="title"
                onChange={handleInputChange}
                defaultValue={title}
                placeholder="Title"
            />
            <br/>
            <label htmlFor="text-field">Text </label>
            <input
                type="text"
                id="text-field"
                name="text"
                onChange={handleInputChange}
                defaultValue={text}
                placeholder="additional text (optional) "
            />
            <br/>
            <p> Today is { inputDateFormat(new Date()) } </p>
            <p> Dates below are dd/mm/yyyy </p>
            <label>Submitted </label>
            <input 
                type="date" 
                name="date_submitted"
                onChange={handleInputChange}
                defaultValue={submitted}
            />
            <br/>
            <label>Under Review </label>
            <input 
                type="date" 
                name="date_under_review"
                onChange={handleInputChange}
                defaultValue={underReview}
            />
            <br/>
            <label>Approved </label>
            <input 
                type="date" 
                name="date_approved"
                onChange={handleInputChange}
                defaultValue={approved}
            />
            <br/>
            <label>Not True </label>
            <input 
                type="date" 
                name="date_not_true"
                onChange={handleInputChange}
                defaultValue={notTrue}
            />
            <br/>
            <br/>
            <br/>
            { errors.title 
                ?   <ErrorMessage
                        message={errors.title.message}
                    />
            : ""
            }
            <br/>
            <button type='submit'>Update</button>
            <br/>
            <br/>
            <button 
                onClick={() => history.push('/')}
            >
                Cancel
            </button>
            <br/>
            <br/>
        </form>
        <button
                onClick={e => handleClickDelete(factId)}
            >
                Delete
        </button>
        </>
    )

}

export default EditFactForm;