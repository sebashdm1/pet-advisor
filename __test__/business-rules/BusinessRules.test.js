import {calculateDogAge} from '../../app/business-rules/BusinessRules'

describe('Business rules test about age trasnformation of the pets', function () {
  describe('operations', function () {
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
})
