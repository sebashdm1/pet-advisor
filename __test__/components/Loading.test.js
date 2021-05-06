import React from 'react';
import { render } from '@testing-library/react-native';
import Loader from '../../app/components/Loading';


describe('Loader ', () => {
    
    it('Test Loader', () => {
        render( <Loader />)
    });
})