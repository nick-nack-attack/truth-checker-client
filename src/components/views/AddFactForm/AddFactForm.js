// to add a fact
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

// contexts and hooks
import { ItemsContext } from '../../../contexts/ItemsContext';
import { UseInputChange } from '../../utils/UseInputChange'

// utils
import { prettyDate } from '../../../helpers/helpers';

// components
import ApprovedFact from '../../utils/ApprovedFact';
import ErrorMessage from '../../utils/ErrorMessage'

// service
import FactsApiService from '../../../services/facts-service';

const AddFactForm = () => {

    const history = useHistory();

    const [ input, handleInputChange ] = UseInputChange();

    const itemsContext = useContext(ItemsContext);

    const [ isUSCitizen, setIsUSCitizen ] = useState(false);
    const [ isNotTerrorist, setIsNotTerrorist ] = useState(false);
    const [ hasReadTerms, setHasReadTerms ] = useState(false);
    const [ errors, setErrors ] = useState({});

    const validateAddFact = (e) => {
        e.preventDefault();
        let errors = {};
        if (input.title === undefined || input.title === '') {
            errors.title = {message: "Title is required"}
        } else if (!isUSCitizen || !isNotTerrorist || !hasReadTerms) {
            errors.title = {message: "Must select all checkboxes"}
        }

        if (Object.keys(errors).length !== 0) {
            return (setErrors(errors))
        } else {
            submitForm()
        }
    }

    // submit form is validation is passed
    const submitForm = () => {
        const factProperties = {
            ...input,
            user_id: 2
        };
        FactsApiService.addFact(factProperties)
        .then(res => {
            itemsContext.dispatch({
                type: 'refetch'
            });
            history.push('/');
        });
    };

    return (

        <form 
            id="Add_Fact_Form"
            onSubmit={e => validateAddFact(e)}
        >
            <legend><h2>Fact Submission Page</h2></legend>
            <label htmlFor="title-field">Fact</label>
            <br/>
            <input
                type="text"
                id="title-field"
                name="title"
                onChange={handleInputChange}
                placeholder="All firetrucks are red"
            />

            { errors.title 
                ?   <ErrorMessage
                        message={errors.title.message}
                    />
            : ""
            }

            <label>Reference/Citation (Not Applicable)</label>
            <br/>
            <br/>
                <div className="align-left">
                <label>To Submit, you must agree to the following</label>
                <br/>
                <input 
                    name="citizen"
                    type="checkbox" 
                    checked={isUSCitizen}
                    onChange={e => setIsUSCitizen(!isUSCitizen)}
                />
                <label>
                    I am a U.S. Citizen
                </label>
                <br/>
                <input 
                    name="not-terrorist-1"
                    type="checkbox" 
                    checked={isNotTerrorist}
                    onChange={e => setIsNotTerrorist(!isNotTerrorist)}
                />
                <label>
                    I am not a Terrorist
                </label>
                <br/>
                <input 
                    name="terms-conditions"
                    type="checkbox" 
                    checked={hasReadTerms}
                    onChange={e => setHasReadTerms(!hasReadTerms)}
                />
                <label>
                    I agree to Terms and Conditions
                </label>
                </div>
            <br/>
            <button type='submit'>Submit</button>
            <br/>
            <br/>
            <button onClick={() => history.push('/')}>Cancel</button>
            <br/>
            <p>Terms and Conditions</p>
            <ul className='terms-and-conditions'>
                <li>You relinquish any and all privacy for the puropse of community and national safety. <ApprovedFact/></li>
                <li>Not Agreeing to these Terms and Conditions means you want to see the destruction of the U.S.A. <ApprovedFact/></li>
                <li>All data submitted is the property of the U.S. Government. <ApprovedFact/></li>
                <li>Any submission in violation of these Terms and Conidtions is punishable by death and/or $1,000,000 fine (whichever comes first). <ApprovedFact/></li>
                <li>You agree that the United States is the best country in the world and will never jepordize it's security in any way. <ApprovedFact/></li>
                <li>Not agreeing to these Terms, even without a submission, means you are a Terrorist. <ApprovedFact/></li>
                <li>If you are a Terrorist, you are an Enemy Combatant, and do not have protection under U.S. law. <ApprovedFact/></li>
                <li>Enemy Combatants have no rights and relinquish all rights of safety, security, and respect as a human being. <ApprovedFact/></li>
                <li>If you are not with the U.S.A., you are with 'Them'. 'Them' being Terrorists. Terrorists being Enemy Combatants. Enemy Conbatants have no rights and are less-than-human and want an unsafe community, women, and children. <ApprovedFact/></li>
                <li>This is all a joke. None of this is true.</li>
            </ul>
        </form>

    )

}

export default AddFactForm;