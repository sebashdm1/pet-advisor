import {imageSelect} from '../../app/business-rules/AssingAvatar'

describe('avatar assignment test', () => {
  test('when a user add a dog, app should assing  dog avatar ', () => {
    let avatar = imageSelect('dog')
    expect(avatar).toMatch(require('../../assets/img/dog-avatar.jpeg'))
  })
  test('when a user add a Cat, app should assing Cat avatar ', () => {
    let avatar = imageSelect('cat')
    expect(avatar).toMatch(require('../../assets/img/dog-avatar.jpeg'))
  })
})
