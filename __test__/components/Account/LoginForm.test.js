import React from 'react';
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure, mount } from 'enzyme';
import { cleanup, render, fireEvent } from '@testing-library/react-native';
import LoginForm from '../../../app/components/Account/LoginForm';
import { useGlobalState } from '../../../src/util/GlobalState';


configure({ adapter: new Adapter() });

jest.mock('../../../src/util/GlobalState');
jest.mock('../../../src/util/DeviceStorage');
jest.mock('../../../src/secure/Auth');


describe('LoginForm ', () => {

    beforeAll(() => {
        jest.mock('@react-native-community/async-storage');
    })

    it('should Render Login component', () => {
        const state = [];
        useGlobalState.mockReturnValueOnce([state]);
        const fakeNavigation = {
            navigate: jest.fn()
        }

        const wrapper = shallow(<LoginForm navigation={fakeNavigation}/>)
        expect(wrapper.exists()).toBeTruthy();
    });

});