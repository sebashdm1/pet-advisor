import {assingAvatarToPet} from '../../app/business-rules/AssingAvatar'

describe('avatar assignment test', () => {
  test('when a user add a dog, app should assing a dog avatar to pet card', () => {
    let avatar = assingAvatarToPet('dog')
    expect(avatar).toMatch('../../assets/img/dog-avatar.jpeg')
  })
  test('when a user add a Cat, app should assing a Cat avatar to pet card', () => {
    let avatar = assingAvatarToPet('cat')
    expect(avatar).toMatch('../../assets/img/cat-avatar.jpeg')
  })
})
