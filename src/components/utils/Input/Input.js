// button component
import React from 'react';

// files
import './Input.scss';

const Input = (props) => {

  // props needed are
  // [1] text [2] label
  const textInput = (
      <div className="input-div">
        <label>{props.label}</label>
        <input {...props}>
          {props.text}
        </input>
      </div>
  );

  // props are included, NEEDED are
  // [1] label
  const checkBox = (
      <div className="checkbox-div">
        <label>
          <input type="checkbox" {...props}/>
          {props.label}
        </label>
      </div>
  )

  return (

      props.inputtype === 'text'
          ? textInput
          : props.inputtype === 'checkbox'
          ? checkBox
          : <div>Unsupported input type</div>

  );
};

export default Input;