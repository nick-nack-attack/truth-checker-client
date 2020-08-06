// this component handles a confirmation menu
import React from 'react';

import Button from '../Button/Button';

// pass in a function to handle confirm and cancel clicks
// pass in text for the label
const Menu = props => {

  return (

      <menu className="menu-confirm">
        <p>{props.text}</p>
        <Button
            className="warning"
            text="Yes"
            onClick={ev => props.handleConfirm(ev)}
        />
        <Button
            className="outline"
            text="Cancel"
            onClick={ev => props.handleCancel(ev)}
        />
      </menu>

  )

}

export default Menu;