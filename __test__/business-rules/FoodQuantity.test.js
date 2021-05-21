import {QuantityFoodToDog} from '../../app/business-rules/FoodQuantity'

describe('amount of food that dog should eat', () => {
  test('if dog weigth is 10kg he should eat 250g of food  ', () => {
    let result = QuantityFoodToDog(10)
    expect(result).toBe(250)
  })
  test('if dog weigth is 20kg he should eat 400g of food  ', () => {
    let result = QuantityFoodToDog(20)
    expect(result).toBe(400)
  })
  test('if dog weigth is 60kg he should eat 850g of food  ', () => {
    let result = QuantityFoodToDog(60)
    expect(result).toBe(850)
  })

  test('if dog weigth is 50kg he shouldnt eat 850g of food  ', () => {
    let result = QuantityFoodToDog(50)
    expect(result).not.toBe(850)
  })
})
