import React from 'react'
import {fireEvent, render, View} from '@testing-library/react-native'
import AddPetForm from '../../../app/components/Account/AddPetForm'
import MockedNavigation from '../../../__mocks__/MockedNavigator'
import {Input} from 'react-native-elements'
let component
let button

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
    button = component.getByTestId('button')
  })
  it('should display validation messages ', () => {
    fireEvent.press(button)
    expect(component.getByText(/La raza es requerida/i)).toBeDefined()
    expect(component.getByText(/El peso es requerido/i)).toBeDefined()
    expect(component.getByText(/La edad es requerida/i)).toBeDefined()
    expect(component.getByText(/El peso es requerido/i)).toBeDefined()
  })

  it('should change input age pet', () => {
    const onChangeTextMock = jest.fn()
    const CHANGE_TEXT = '23'

    const {getByTestId} = render(
      <Input testID="pet-age" onChangeText={onChangeTextMock} />,
    )
    fireEvent.changeText(getByTestId('pet-age'), CHANGE_TEXT)
    expect(onChangeTextMock).toHaveBeenCalledWith('23')
    fireEvent.press(button)
    expect(component.getByText(/La raza es requerida/i)).toBeDefined()
  })
})

describe('when user submits the form', () => {
  beforeEach(() => {
    component = render(<MockedNavigation component={AddPetForm} />)
    button = component.getByTestId('button')
  })
  test('should the submit button be disabled until the request is done ', () => {
    expect(button).not.toBeDisabled()
    fireEvent.press(button)
    expect(button).not.toBeDisabled()
  })
})
