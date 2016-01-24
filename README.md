# Trip cards

## Установка

Устанавливаем и компилируем:
```bash
git clone 
cd trip-cards
npm install
npm run build
```

Тесты:
```bash
npm test
```

Примеры:
```bash
node ./dist/example/example.js
node ./dist/example/example2.js
node ./dist/example/example3.js
```

## Использование

```js
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
```

## API

### TripCard

Создать новую карточку:
```js
import tripCard from './dist/trip-card'
const myCard = tripCard({transport: 'train', from: 'Moscow', to: 'Sochi'})
```

Конвертировать в строку:
```js
myCard.toString()
```

### Journey

Создать новое путешествие:
```js
import journey from './dist/journey'
const myJourney = journey([myCard, myCard2])
```

Конвертировать в строку:
```js
myJourney.toString()
```

### Добавление новых карточек

Необходимо реализовать объект с интерфейсом {from, to, toString()}. Проще не бывает:
```js
import journey from '../journey'

const myNewCard = {
  from: 'Mars', to: 'Venus',
  toString() {
    return 'from ' + this.from + ' to ' + this.to
  }
}

const myJourney = journey([myNewCard])
console.log(`myJourney + ''`, myJourney + '');

```
