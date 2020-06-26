import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'
import { BrowserRouter as Router } from 'react-router-dom';
import EditFact from './EditFact';

import { UserContextProvider } from '../../../contexts/UserContext'
import AuthContextProvider from '../../../contexts/AuthContextProvider';

const context = React.createContext({
  rmbrArray: []
});

export class testContext extends Component {
  state = {
      rmbrArray: ['One item']
  }
  render() {
      const value = {
          rmbrArray: this.state.rmbrArray
      }
      return (
          <testContext.Provider value={value}>
              { this.props.children }
          </testContext.Provider>
      )
  }
}

describe('Edit Fact Component', () => {

  it('renders without crashing', () => {
    let fact_id = 1;
    const wrapper = shallow(
      <AuthContextProvider>
        <testContext>
          <EditFact 
            fact_id={fact_id}
            context={context}
          />
        </testContext>
      </AuthContextProvider>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })

});