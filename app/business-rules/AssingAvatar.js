export function assingAvatarToPet(type) {
  const dogAvatar = '../../assets/img/dog-avatar.jpeg'
  const catAvatar = '../../assets/img/cat-avatar.jpeg'
  return type === 'dog' ? dogAvatar : catAvatar
}
