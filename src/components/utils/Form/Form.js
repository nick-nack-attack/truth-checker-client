import React from 'react';

import { inputDateFormat } from '../../../helpers/helpers';

import Input from '../Input/Input';
import Label from '../Label/Label';
import Select from '../Select/Select';
import Button from '../Button/Button';

import './Form.scss'

const Form = (props) => {

    const arrayForSelect = ['All', 'Pending', 'Under Review', 'Approved', 'Not True'];

    // PROPS:
    // [1] searchValue
    // [2] searchOnChange
    // [3] valueSelect
    // [4] selectOnChange  
    // [5] arrayForSelect
    const mainFeedForm = (
        <form 
            id="main-feed-form"
            onSubmit={e => e.preventDefault()}
        >
            <Input
                inputtype="text"
                label='Search for Fact'
                placeholder="ex. The Sun is a star"
                type="text"
                value={props.searchValue}
                onChange={props.searchOnChange}
            />
            <Select
                value={props.selectValue}
                onChange={props.selectOnChange}
                array={arrayForSelect}
            />
        </form>
    );

    // PROPS:
    // [1] validateAddFact 
    // [2] handleInputChange 
    // [3] handleCancelClick
    // [4] 3 isChecked and onChange each
    const addFactForm = (
        <form
            id="Add_Fact_Form"
            onSubmit={props.validateAddFact}
        >
            <Input
                inputtype="text"
                label="Fact"
                placeholder="ex. All firetrucks are red"
                type="text"
                id="title-field"
                name="title"
                onChange={props.handleInputChange}
            />

            <div className="checkbox-title">
                To Submit, you must agree to the following
            </div>

            <div className="checkboxes-div">
                <Input
                    inputtype="checkbox"
                    type="checkbox"
                    className="checkbox"
                    label="I am a U.S. Citizen"
                    checked={props.isUSCitizen}
                    onChange={props.setIsUSCitizen}
                />
                <Input
                    inputtype="checkbox"
                    type="checkbox"
                    className="checkbox"
                    label="I am not a Terrorist"
                    checked={props.isNotTerrorist}
                    onChange={props.setIsNotTerrorist}
                />
                <Input
                    inputtype="checkbox"
                    type="checkbox"
                    className="checkbox"
                    label="I agree to Terms and Conditions"
                    checked={props.hasReadTerms}
                    onChange={props.setHasReadTerms}
                /> 
            </div>

            <Button
                type="submit"
                text="Submit"
            />
            <Button
                text="Cancel"
                onClick={e=> props.handleCancelClick()}
            />
    

        </form>
    );

    // PROPS:
    // [1] validateEditFactForm 
    // [2] handleInputChange 
    // [3] title, submitted, underReview, approved, notTrue
    // [4] handleCancelClick
    // [5] handleClickDelete
    const editFactForm = (
        <form
            id="Add_Fact_Form"
            onSubmit={props.validateEditFactForm}
        >
            <legend className="center">Edit Fact Form</legend>
            <Input
                label="Title"
                inputtype="text"
                name="title"
                id="title-field"
                onChange={props.handleInputChange}
                defaultValue={props.title}
                placeholder="Fact title"
            />
            <p className="todays-date"> Today is { inputDateFormat(new Date()) } </p>
            <Input
                label="Submitted"
                inputtype="text"
                type="date"
                name="date_submitted"
                onChange={props.handleInputChange}
                defaultValue={props.submitted}
            />
            <Input
                label="Under Review"
                inputtype="text"
                type="date"
                name="date_under_review"
                onChange={props.handleInputChange}
                defaultValue={props.underReview}
            />
            <Input
                label="Approved"
                inputtype="text"
                type="date"
                name="date_approved"
                onChange={props.handleInputChange}
                defaultValue={props.approved}
            />
            <Input
                label="Not True"
                inputtype="text"
                type="date"
                name="date_not_true"
                onChange={props.handleInputChange}
                defaultValue={props.notTrue}
            />
            <Button
                type="submit"
                text="Update"
            />
            <Button
                text="Cancel"
                onClick={props.handleCancelClick}
            />
            <Button
                text={<Label type="delete"/>}
                onClick={props.handleClickDelete}
            />
        </form>
        
    );

    const loginForm = (
        <form
            id="Login_Form"
            onSubmit={props.validateAdminLoginForm}
        >
            <legend className="center">Admin Login</legend>
            <Input
                inputtype="text"
                id="email-field"
                type="email"
                name="email"
                label="Email"
                autoComplete="email"
                value="admin@dtf.gov"
                onChange={props.handleInputChange}
            />
            <Input
                inputtype='text'
                id="password-field"
                type="password"
                name="password"
                label="Password"
                autoComplete="current-problem"
                onChange={props.handleInputChange}
            />
            <Button
                type="submit"
                text="Submit"
            />
            <Button
                text="Cancel"
                onClick={props.handleCancelClick}
            />
            <p></p>
        </form>
    );

    return (

        props.formType === 'Main-Feed' 
            ? mainFeedForm 
            : props.formType === 'Add-Fact'
            ? addFactForm
            : props.formType === 'Login-Form' 
            ? loginForm
            : props.formType === 'Edit-Fact'
            ? editFactForm
            : <div>"Unsupported formType"</div>

    );

};

export default Form;