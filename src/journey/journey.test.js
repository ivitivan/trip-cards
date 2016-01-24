import journey from './journey'
import {expect} from 'chai'

// Mock tripCard
const trip = (from, to) => {
  const state = {from, to}
  return Object.assign(
    {},
    state,
    toStringer(state)
  )
}

const toStringer = (state) => ({
  toString: () => {
    return `from ${state.from} to ${state.to}`
  }
})

const trips = [
  trip('Madrid', 'Sochi'),
  trip('Berlin', 'Madrid'),
  trip('Moscow', 'Berlin'),
]

describe('Journey', () => {

  it('should return an object', () => {
    const actual = journey(trips)
    expect(actual).to.have.property('toString')
      .that.is.a('function')
  })

  it('should convert array to strings', () => {
    const actual = journey(trips).toString()
    const expected = `from Moscow to Berlin
from Berlin to Madrid
from Madrid to Sochi`
    expect(actual).to.equal(expected)
  })

})

