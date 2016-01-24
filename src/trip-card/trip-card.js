import pushable from '../pushable'

/*
 * Represents transport type
 * @constructor
 * @param {Object} options - Transport type parameters
 * @param {string} options.transport - The transport
 * @param {string} [options.transportNumber] - The transport number
 * @param {string} options.from - The from
 * @param {string} options.to - The to
 * @param {string} [options.gate] - The gate
 * @param {string} [options.seat] - The seat
 * @param {string} [options.baggage] - The baggage
 */
const tripCard = (state) => {
  // Compose a transport type from toStringer
  return Object.assign(
    {},
    state,
    toStringer(state)
  )
}

const toStringer = (state) => ({
  /**
   * Convert the transport type to string
   * @return {string} Transport type in string format
   */
  toString: () => {
    const str = pushable()
    // Transport
    str.push('Take').push(state.transport)
    // Transport number
    if (state.gate) str.push(state.transportNumber)
    // from, to
    str.push('from').push(state.from).push('to').push(state.to + '.')
    // Gate
    if (state.gate) str.push('Gate').push(state.gate + '.')
    // Seat
    if (state.seat) str.push('Seat').push(state.seat + '.')
    else str.push('No seat assignment.')
    // Baggage
    if (state.baggage) str.push('Baggage').push(state.baggage + '.')

    return str.items.join(' ')
  }
})

export default tripCard

