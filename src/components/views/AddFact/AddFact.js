// Public user can submit a fact
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import config from '../../../config';

// contexts and hooks
import { ItemsContext } from '../../../contexts/ItemsContext';
import { UseInputChange } from '../../../hooks/UseInputChange';

// components
import Form from '../../utils/Form/Form';
import Error from '../../utils/Error/Error';

// service
import FactsApiService from '../../../services/facts-service';

// style
import './AddFact.scss'

const AddFact = () => {

    // initialize hooks and contexts
    const history = useHistory();
    const [ input, handleInputChange ] = UseInputChange();
    const itemsContext = useContext(ItemsContext);

    // set local state for form
    const [ isUSCitizen, setIsUSCitizen ] = useState(false);
    const [ isNotTerrorist, setIsNotTerrorist ] = useState(false);
    const [ hasReadTerms, setHasReadTerms ] = useState(false);
    const [ errors, setErrors ] = useState({});

    // validate submission before sending to server
    const validateAddFact = (e) => {
        e.preventDefault();
        let errors = {};
        if (input.title === undefined || input.title === '') {
            errors.title = {message: "Title is required"}
        } else if (!isUSCitizen || !isNotTerrorist || !hasReadTerms) {
            errors.title = { message: "Must select all checkboxes" }
        }

        if (Object.keys(errors).length !== 0) {
            return (setErrors(errors))
        } else {
            submitForm();
        }
    };

    // submit form if validation is passed
    const submitForm = () => {
        
        let errors = {};
        const factProperties = {
            ...input,
            user_id: 2
        };

        FactsApiService.addFact(factProperties)
            .then(() => {
                itemsContext.dispatch({
                    type: 'refetch'
                });
                history.push(config.FACTS_FEED);
            })
            .catch(() => {
                errors.title = { message: "Something went wrong!" };
                setErrors(errors)
            })
    };

    // return user to root (facts feed)
    const handleCancelClick = () => {
        history.push(config.FACTS_FEED);
    };

    return (

        <div className="add-fact-div">

            <div>
                <Form 
                    // this form is structured in Form.js
                    formType='Add-Fact'
                    // text input
                    handleInputChange={ handleInputChange }
                    // check boxes
                    isUSCitizen={ isUSCitizen }
                    setIsUSCitizen={ () => setIsUSCitizen(!isUSCitizen) }
                    isNotTerrorist={ isNotTerrorist }
                    setIsNotTerrorist={ () => setIsNotTerrorist(!isNotTerrorist) }
                    hasReadTerms={ hasReadTerms }
                    setHasReadTerms={ () => setHasReadTerms(!hasReadTerms) }
                    // handle submit and cancel buttons
                    validateAddFact={ (e) => validateAddFact(e) }
                    handleCancelClick={ handleCancelClick }
                />

                { errors.title 
                        ?   <Error
                                message={errors.title.message}
                            />
                    : ""
                    }
            </div>
        
            <ol className='terms-and-conditions'>
                <h3>Terms and Conditions</h3>
                <li>You relinquish any and/or all privacy for the puropse of community and/or national safety.</li>
                <li>Not Agreeing to these Terms and/or Conditions means you want to see the destruction of the U.S.A.</li>
                <li>All data submitted is the property of the U.S. Government.</li>
                <li>Any submission in violation of these Terms and/or Conidtions is punishable by death and/or $1,000,000 fine (whichever comes first).</li>
                <li>You agree that the United States is the best country in the world and<span className='strike'>/or </span> will never jepordize it's security in any way.</li>
                <li>Not agreeing to these Terms, even without a submission, means you are a Terrorist.</li>
                <li>If you are a Terrorist, you are an Enemy Combatant, and<span className='strike'>/or </span> do not have protection under U.S. law.</li>
                <li>Enemy Combatants have no rights and<span className='strike'>/or </span> relinquish all rights of safety, security, and<span className='strike'>/or </span> respect as a human being.</li>
                <li>If you are not with the U.S.A., you are with 'Them'. 'Them' being Terrorists. Terrorists being Enemy Combatants. Enemy Conbatants have no rights and are less-than-human and<span className='strike'>/or </span> want an unsafe community, women, and children.</li> 
                <li>This is all a joke. None of this is true.</li>
            </ol>
        
        </div>

    );

};

export default AddFact;