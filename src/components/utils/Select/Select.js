// button component
import React from 'react';

import './Select.scss';

const Select = (props) => {

  return (
      <div className="select-div">
        <label>Filter By Status</label>
        <select
            value={props.value}
            onChange={props.onChange}
        >
          {
            props.array.map((option) => {
              return (
                  <option key={option} value={option}>{option}</option>
              )
            })
          }
        </select>
      </div>
  );

};

export default Select;
