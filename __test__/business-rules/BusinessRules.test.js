import {
  smallDog,
  largeDog,
  mediumDog,
  calculateDogAge,
} from '../../app/business-rules/BusinessRules'

describe('Business rules test about DOGS age trasnformation', function () {
  test('when user set 6 function should return 40', () => {
    let number = smallDog(6)
    expect(number).toBe(40)
  })
  test('when user set 7 function should return 47', () => {
    let number = mediumDog(7)
    expect(number).toBe(47)
  })
  test('when user set 8 function should return 55', () => {
    let number = largeDog(8)
    expect(number).toBe(55)
  })
  test('Human age of small dogs: result should be 32 years when age is 4 years ', () => {
    let result = calculateDogAge(4, 1)
    expect(result).toBe(32)
  })
  test('Human age of Medium dogs: result should be 56 years when age is 9 years ', () => {
    let result = calculateDogAge(9, 2)
    expect(result).toBe(56)
  })
  test('Human age of Large dogs: result should be 56 years when age is 9 years ', () => {
    let result = calculateDogAge(11, 3)
    expect(result).toBe(72)
  })
})
