import React from 'react';
import { render } from '@testing-library/react-native';
import Register from '../../../app/screens/Account/Register';
import MockedNavigation from '../../../__mocks__/MockedNavigator'



let component;

describe('when the form is mounted', () => {
    beforeEach( () => {
        component = render(<MockedNavigation component={Register} />);
    })

    it('there must be a create a register form screen ', () => {
        console.log(component)
    });

});