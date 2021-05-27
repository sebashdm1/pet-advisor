import {
  smallDog,
  largeDog,
  mediumDog,
  catAge,
  calculateSquare,
  calculateDogAge,
  calculateCatAge,
} from '../../app/business-rules/AgeConverter'

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
    let result = calculateDogAge(2, 2)
    expect(result).toBe(24)
  })
  test('Human age of Large dogs: result should be 56 years when age is 9 years ', () => {
    let result = calculateDogAge(11, 3)
    expect(result).toBe(72)
  })
  test('When small Dog age is more than 11 year his human age should be more than 60 year ', () => {
    let result = calculateDogAge(12, 1)
    expect(result).toMatch(/mas de 60/)
  })
  test('When Medium Dog age is more than 11 year his human age should be more than 65 year ', () => {
    let result = calculateDogAge(16, 2)
    expect(result).toMatch(/mas de 65/)
  })
  test('When Large Dog age is more than 11 year his human age should be more than 72 year ', () => {
    let result = calculateDogAge(14, 3)
    expect(result).toMatch(/mas de 72/)
  })
})

describe('Business rules test about Cat age trasnformation', () => {
  test('When cat age is 1 his human age should be 15 ', () => {
    let result = calculateCatAge(1)
    expect(result).toBe(15)
  })
  test('When cat age is more than 11 years and less than 16 years his human age should be more than 60 year ', () => {
    let result = calculateCatAge(16)
    expect(result).toMatch(/mas de 60/)
  })
})

describe('Calculate cat age exceptions', () => {
  test('should throw an error if called with a number > 16', () => {
    expect(() => {
      calculateCatAge(17)
    }).toThrow('submited age is not parametrized')
  })

  test('should throw an error if called without an arg', () => {
    expect(catAge).toThrow('submited age is not parametrized')
  })
})
