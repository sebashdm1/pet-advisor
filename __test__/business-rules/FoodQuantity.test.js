import {
  QuantityFoodToDog,
  QuantityFoodToCat,
} from '../../app/business-rules/FoodQuantity'

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

describe('amount of food that cat should eat', () => {
  test('if cat weigth is 1kg, should eat 30 to 40g of food', () => {
    let result = QuantityFoodToCat(1)
    expect(result).toMatch(/30 a 40/)
  })
  test('if cat weigth is 3kg, should eat 40 to 55g of food ', () => {
    let result = QuantityFoodToCat(3)
    expect(result).toMatch(/40 a 55/)
  })
  test('if cat weigth is 6kg or more than 6, should eat 11g each Kg of food', () => {
    let result = QuantityFoodToCat(11)
    expect(result).toMatch(/11g por Kg/)
  })
  test('if cat weigth is 6kg or more than 6, should eat 11g each Kg of food', () => {
    let result = QuantityFoodToCat(15)
    expect(result).toMatch(/11g por Kg/)
  })
  test('if cat weigth is 6kg or more than 6, should eat 11g each Kg of food', () => {
    let result = QuantityFoodToCat(20)
    expect(result).toMatch(/11g por Kg/)
  })

  test('if cat weigth is 1kg, shouldnt eat 11g por Kg of food', () => {
    let result = QuantityFoodToCat(3)
    expect(result).not.toMatch(/30 a 40/)
  })
})
