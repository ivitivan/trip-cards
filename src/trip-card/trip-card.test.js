import tripCard from './trip-card'
import {expect} from 'chai'

describe('TripCard', () => {

  it('should return an object', () => {
    const actual = tripCard({
      transport: 'train', from: 'Moscow', to: 'Sochi'
    })
    expect(actual).to.have.property('transport', 'train')
    expect(actual).to.have.property('from', 'Moscow')
    expect(actual).to.have.property('to', 'Sochi')
    expect(actual).to.have.property('toString')
      .that.is.a('function')
  });

  it('should convert to string', () => {
    const actual = tripCard({
      transport: 'plane', from: 'Sochi', to: 'Berlin'
    }).toString()
    const expected = 'Take plane from Sochi to Berlin. No seat assignment.'
    expect(actual).to.equal(expected)
  })

});

