require("firebase-functions-test")();
import React from 'react'
import {fireEvent, render,} from '@testing-library/react-native'
import AddPetForm from '../../../app/components/Account/AddPetForm'
import MockedNavigation from '../../../__mocks__/MockedNavigator'
const firebase = require('@firebase/testing')
const assert = require("assert");
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
    button = component.getByTestId('button')
  })
  it('should display validation messages ', () => {
    fireEvent.press(button)
    expect(component.getByText(/La raza es requerida/i)).toBeDefined()
    expect(component.getByText(/El peso es requerido/i)).toBeDefined()
    expect(component.getByText(/La edad es requerida/i)).toBeDefined()
    expect(component.getByText(/El peso es requerido/i)).toBeDefined()
  })
})

describe('when the user submits the form', () => {
  beforeAll(async () => {
    this.timeout(0);
    await firebase.clearFirestoreData({projectId})
  })

  beforeEach(() => {
    component = render(<MockedNavigation component={AddPetForm} />)
    button = component.getByTestId('button')
    component.
  })

  it('screen must display a succes message ', async () => {
    fireEvent.changeText(component.getByTestId('pet-breed'), 'kira')
  })

  //it('submit button should be disabled until the request is done', () => {
  // expect(button).not.toBeDisabled()
  //fireEvent.press(button)
  //expect(button).toBeDisabled()
  //})
})
