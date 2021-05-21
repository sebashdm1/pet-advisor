export function QuantityFoodToDog(weight) {
  var foodMap = new Map()
    .set(1, 50)
    .set(4, 150)
    .set(7, 200)
    .set(10, 250)
    .set(15, 325)
    .set(20, 400)
    .set(25, 450)
    .set(30, 550)
    .set(40, 650)
    .set(60, 850)
    .set(70, 950)
    .set(80, 1.125)
  return foodMap.get(weight)
}

export function QuantityFoodToCat(weight) {
  let morthan
  if (weight >= 6) {
    morthan = weight
  }
  var foodMap = new Map()
  foodMap
    .set(1, '30 a 40')
    .set(3, '40 a 55')
    .set(4, '45 a 65')
    .set(5, '55 a 75')
    .set(morthan, '11g por Kg')
  return foodMap.get(weight)
}
