function smallDog(number) {
  var myMap = new Map()
  myMap.set(1, 15)
  myMap.set(2, 23)
  myMap.set(3, 28)
  myMap.set(4, 32)
  myMap.set(5, 36)
  myMap.set(6, 40)
  myMap.set(7, 44)
  myMap.set(8, 48)
  myMap.set(9, 52)
  myMap.set(10, 56)
  myMap.set(11, 60)
  return myMap.get(number)
}

function mediumDog(number) {
  var myMap = new Map()
  myMap.set(1, 15)
  myMap.set(2, 24)
  myMap.set(3, 29)
  myMap.set(4, 34)
  myMap.set(5, 37)
  myMap.set(6, 42)
  myMap.set(7, 47)
  myMap.set(8, 51)
  myMap.set(9, 56)
  myMap.set(10, 60)
  myMap.set(11, 65)
  return myMap.get(number)
}

function largeDog(number) {
  var myMap = new Map()
  myMap.set(1, 14)
  myMap.set(2, 22)
  myMap.set(3, 29)
  myMap.set(4, 34)
  myMap.set(5, 40)
  myMap.set(6, 45)
  myMap.set(7, 50)
  myMap.set(8, 55)
  myMap.set(9, 61)
  myMap.set(10, 66)
  myMap.set(11, 72)
  return myMap.get(number)
}

export function calculateDogAge(age, size) {
  switch (size) {
    case 1:
      return smallDog(age)
    case 2:
      return mediumDog(age)
    case 3:
      return largeDog(age)
  }
}
