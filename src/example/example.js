import journey from '../journey'
import faker from 'faker'
import {shuffle} from 'lodash'
import tripCard from '../trip-card'

// fake cities
let n = 10000
const cities = []
let city = faker.address.city()
for (let i = 0; i < n; i++) {
  const trip = {}
  trip.transport = 'car'
  trip.from = city
  city = faker.address.city()
  trip.to = city
  cities.push(tripCard(trip))
}

// Shuffle cities
const shuffledCities = shuffle(cities)

// Create journey
const ourJourney = journey(shuffledCities)

console.log(ourJourney + '');

