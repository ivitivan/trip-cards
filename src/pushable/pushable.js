const pushable = () => {
  const state = []
  return init(state)
}

export default pushable

const init = (state) => {
  return Object.assign(
    {},
    {items: state},
    pusher(state)
  )
}

const pusher = (state) => ({
  push: (val) => {
    state.push(val)
    return init(state)
  }
})

