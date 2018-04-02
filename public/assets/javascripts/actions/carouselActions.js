import dispatcher from '../dispatcher'

export default {
  nextNode() {
    dispatcher.dispatch({
      type: 'NEXT_NODE'
    })
  },

  previousNode() {
    dispatcher.dispatch({
      type: 'PREVIOUS_NODE'
    })
  },

  newCarousel(number) {
    dispatcher.dispatch({
      type: 'NEW_CAROUSEL'
    })
  }
}
