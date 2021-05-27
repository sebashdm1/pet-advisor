export function smallDog(number) {
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
  if (number >= 16) {
    throw new Error('submited age cant be more than 16')
  } else if (number === undefined) {
    throw new Error('Number cant be undefined')
  }
  return myMap.get(number)
}

export function mediumDog(number) {
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
  if (number >= 16) {
    throw new Error('submited age cant be more than 16')
  } else if (number === undefined) {
    throw new Error('Number cant be undefined')
  }
  return myMap.get(number)
}

export function largeDog(number) {
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

  if (number >= 16) {
    throw new Error('submited age cant be more than 16')
  } else if (number === undefined) {
    throw new Error('Number cant be undefined')
  }
  return myMap.get(number)
}

export function catAge(number) {
  let morthan
  if (number >= 6) {
    morthan = number
  }
  var myMap = new Map()
  myMap.set(1, 15)
  myMap.set(2, 24)
  myMap.set(3, 28)
  myMap.set(4, 32)
  myMap.set(5, 36)
  myMap.set(6, 40)
  myMap.set(7, 44)
  myMap.set(8, 48)
  myMap.set(9, 52)
  myMap.set(10, 56)
  myMap.set(11, 60)
  myMap.set(morthan, 'mas de 60')

  if (number >= 16 || number === undefined) {
    throw new Error('Number cant be undefined')
  }
  return myMap.get(number)
}

export function calculateDogAge(ageDog, size) {
  switch (size) {
    case 1:
      return ageDog > 11 ? 'mas de 60' : smallDog(ageDog)
    case 2:
      return ageDog > 11 ? 'mas de 65' : mediumDog(ageDog)
    case 3:
      return ageDog > 11 ? 'mas de 72' : largeDog(ageDog)
  }
}

export function calculateCatAge(ageCat) {
  return catAge(ageCat)
}
