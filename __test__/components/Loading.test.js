import React from 'react';
import Adapter from 'enzyme-adapter-react-16.1'
import { shallow, configure } from 'enzyme';
import Loader from '../../app/components/Loading';

configure({ adapter: new Adapter() });


describe('Loader ', () => {
    it('Test Loader', () => {
        const wrapper = shallow(
            <Loader />
        );
        expect(wrapper.exists()).toBe(true);
    });
})