import tripCard from '../trip-card'
import journey from '../journey'
import {shuffle} from 'lodash'

const cards = []
cards.push(tripCard({
  transport: 'train', from: 'Moscow', to: 'Berlin', seat: '42'
}))
cards.push(tripCard({
  transport: 'car', from: 'Berlin', to: 'Frankfurt'
}))
cards.push(tripCard({
  transport: 'plane', from: 'Frankfurt', to: 'Paris'
}))

const shuffledCards = shuffle(cards)

const myJourney = journey(shuffledCards)

console.log(myJourney + '')
