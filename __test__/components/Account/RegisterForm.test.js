import React from 'react';
import { render } from '@testing-library/react-native';
import RegisterForm from '../../../app/components/Account/RegisterForm';
import MockedNavigation from '../../../__mocks__/MockedNavigator'



let component;

describe('when the form is mounted', () => {
    beforeEach( () => {
        component = render(<MockedNavigation component={RegisterForm} />);
    })

    it('there must be render a register form', () => {
       expect(component).toBeDefined();
    });

    it('should exist following fields: email, password, confirm password', () => {
       expect(component.getByTestId('email')).toBeDefined();
       expect(component.getByTestId('password')).toBeDefined();
       expect(component.getByTestId('repeat-password')).toBeDefined(); 
    });

    it('should exist the submit button', () => {
        expect(component.getByRole('button')).toBeDefined(); 
    });

});


