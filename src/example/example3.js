import journey from '../journey'

const myNewCard = {
  from: 'Mars', to: 'Venus',
  toString() {
    return 'from ' + this.from + ' to ' + this.to
  }
}

const myJourney = journey([myNewCard])
console.log(`myJourney + ''`, myJourney + '');

