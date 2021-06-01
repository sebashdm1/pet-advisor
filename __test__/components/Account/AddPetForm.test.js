import React from 'react'
import {fireEvent, render, waitFor} from '@testing-library/react-native'
import AddPetForm from '../../../app/components/Account/AddPetForm'
import MockedNavigation from '../../../__mocks__/MockedNavigator'
const firebase = require('@firebase/testing')
const admin = require('firebase-admin')

const projectId = 'pet-advisor-94a75'
process.env.GCLOUD_PROJECT = projectId
process.env.FIRESTORE_EMULATOR = 'localhost:8080'
let app = admin.initializeApp()
let db = firebase.firestore(app)
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
    button = component.getByText('Agregar Mascota')
  })
  it('should display validation messages ', async () => {
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

describe('when the user submits the form', () => {
  beforeAll(async () => {
    await firebase.clearFirestoreData({projectId})
  })

  beforeEach(() => {
    component = render(<MockedNavigation component={AddPetForm} />)
    button = component.getByText('Agregar Mascota')
  })

  it('submit button should be disabled until the request is done', async () => {
    expect(button).not.toBeDisabled()
    fireEvent.press(button)
    expect(button).toBeDisabled()

    await waitFor(() => expect(button).not.toBeDisabled())
  })
})
