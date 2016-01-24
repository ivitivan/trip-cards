import pushable from './pushable'
import {expect} from 'chai'

const str = pushable()

describe('Pushable', () => {

  it('should return an object with items and push()', () => {
    const actual = pushable()
    expect(actual).to.have.property('items')
      .that.is.an('array')
    expect(actual).to.have.property('push')
      .that.is.an('function')
  })

  it('should push an item into items', () => {
    const actual = pushable().push('Take').items
    const expected = ['Take']
    expect(actual).to.deep.equal(expected)
  })

  it('should chain pushes', () => {
    const actual = pushable().push('Take').push('train').push('78A').items
    const expected = ['Take', 'train', '78A']
    expect(actual).to.deep.equal(expected)
  })

})

