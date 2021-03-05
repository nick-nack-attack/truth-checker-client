import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "../../../helpers/test-utils";
import { screen } from '@testing-library/dom'
import Input from './Input';
import userEvent from "@testing-library/user-event";

describe('Input Component', () => {
    const div = document.createElement('div');

  it('renders without crashing', () => {
    render(<Input/>, div);

    ReactDOM.unmountComponentAtNode(div);
  });

  it('click input as a checkbox', () => {
      render(<Input label="Check" inputtype="checkbox"/>);

      userEvent.click(screen.getByText('Check'));
      expect(screen.getByLabelText('Check')).toBeChecked();
  });

  it('enter text into input as text', () => {
      render(<Input defaultValue={''} label='Enter text' inputtype='text' />);

      userEvent.type(screen.getByRole('textbox'), 'Hello');
      expect(screen.getByRole('textbox')).toHaveValue('Hello');
  });

});
