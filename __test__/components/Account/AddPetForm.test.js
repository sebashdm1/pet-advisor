import React from 'react'
import {fireEvent, render} from '@testing-library/react-native'
import AddPetForm from '../../../app/components/Account/AddPetForm'
import MockedNavigation from '../../../__mocks__/MockedNavigator'

let component

describe('add new pet form tests', () => {
  beforeEach(() => {
    component = render(<MockedNavigation component={AddPetForm} />)
  })
  test(' when component is mounted there must be render an add pet form ', () => {
    expect(component).toBeDefined()
  })

  test('should exist following fields: Kind of pet, Breed, pet name, age, weight', () => {
    expect(component.getByTestId('pet-breed')).toBeDefined()
    expect(component.getByTestId('pet-name')).toBeDefined()
    expect(component.getByTestId('pet-age')).toBeDefined()
    expect(component.getByTestId('pet-weight')).toBeDefined()
  })

  test('should exist sumit buttom', () => {
    expect(component.getByTestId('button')).toBeDefined()
  })
})

describe('when the user sumits the form without values', () => {
  beforeEach(() => {
    component = render(<MockedNavigation component={AddPetForm} />)
  })
  it('should display validation messages ', () => {
    const button = component.getByText('Agregar Mascota')

    expect(component.queryByText(/La raza es requerida/i)).toBeNull()
    expect(component.queryByText(/El nombre es requerido/i)).toBeNull()
    expect(component.queryByText(/La edad es requerida/i)).toBeNull()
    expect(component.queryByText(/El peso es requerido/i)).toBeNull()

    fireEvent.press(button)
    expect(component.queryByText(/La raza es requerida/i)).toBeDefined()
    expect(component.queryByText(/El nombre es requerido/i)).toBeDefined()
    expect(component.queryByText(/La edad es requerida/i)).toBeDefined()
    expect(component.queryByText(/El peso es requerido/i)).toBeDefined()
  })
})
