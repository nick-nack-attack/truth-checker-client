import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Button from './Button';

import { UserContextProvider } from '../../../contexts/UserContext';
import AuthContextProvider from '../../../contexts/AuthContextProvider';
import { shallow, mount } from 'enzyme';

describe('Button Component', () => {

    it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <Router>
            <UserContextProvider>
                <AuthContextProvider>
                    <Button text={'test'}/>
                </AuthContextProvider>
            </UserContextProvider>
        </Router>,
        div
    );

    ReactDOM.unmountComponentAtNode(div);
    });

    it('renders with attributes', () => {
        expect(shallow(<Button type={"submit"}/>).contains(<button type="submit"/>)).toBe(true);
    });

    it('should mount in a full DOM', () => {
        expect(mount(<Button/>).find('button').length).toBe(1);
    });

    it('should render to static HTML', () => {
        expect(mount(<Button text={'Submit'}/>).text()).toEqual('Submit')
    });

    it('can be clicked', () => {
        const wrapper = shallow(<Button/>);
        wrapper.find('button').simulate('click', {preventDefault() {}})
    })

});
