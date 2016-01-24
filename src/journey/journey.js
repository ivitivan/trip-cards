/**
 * Represents a list of cards where a card is a trip from one place to another
 * @constructor
 * @param {array} routes - The array of route cards. A route card should implement a {from, to} interface.
 */
const journey = (routes) => {
  const state = sort(routes)
  return Object.assign(
    {},
    toStringer(state)
  )
}

export default journey

const toStringer = (state) => ({
  /**
   * Convert the journey to string
   * @return {string} Journey in string format
   */
  toString: () => state.map(route => {
    return route.toString()
  }).join('\n')
})

/**
 * @return {type} The last item of the array
 * @private
 */
const lastItem = (arr) => arr[arr.length - 1]

/**
 * Sort cards
 * @private
 * @param {array} routes - The array of route cards. A card should implement a {from, to} interface
 * @return {array} Sorted array
 */
const sort = (routes) => {
  // Sort algorithm:
  // maintain to maps; first one is from-to, second is to-from
  // take first route from from-to map, push city changes into sorted
  // look up next city in from-to map
  // if no city, then switch to to-from map
  // and repeat the same but unshift sorted array instead of pushing

  // from-to map
  const routeMap = {}
  // from-route map; to lookup route object
  const routeMapOrder = {}
  // to-from map
  const routeMapReversed = {}
  // array of places (strings)
  const sorted = []

  routes.forEach(route => {
    // create from-to map
    routeMap[route.from] = route.to
    // create to-from map
    routeMapOrder[route.from] = route
    // create from-route map
    routeMapReversed[route.to] = route.from
  })

  let count = 0
  // trigger to switch to routeMapReversed
  let push = true
  while (count < routes.length) {
    if (count === 0) {
      // push from and to of the first route
      sorted.push(routes[0].from)
      sorted.push(routeMap[lastItem(sorted)])
    } else {
      // if no city, switch to routeMapReversed
      const temp = routeMap[lastItem(sorted)]
      if (!temp) push = false
      if (push) {
        sorted.push(temp)
      } else {
        sorted.unshift(routeMapReversed[sorted[0]])
      }
    }
    count++
  }

  // map route objects to sorted array
  return sorted.slice(0, sorted.length - 1).map(item => routeMapOrder[item])
}

