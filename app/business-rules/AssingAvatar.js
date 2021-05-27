export function imageSelect(type) {
  const images = {
    logos: {
      dog: require('../../assets/img/dog-avatar.jpeg'),
      cat: require('../../assets/img/cat-avatar.jpeg'),
    },
  }

  const avatarPetsArray = {
    dog: images.logos.dog,
    cat: images.logos.cat,
  }
  return avatarPetsArray[type]
}
