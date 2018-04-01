import dispatcher from '../dispatcher'

export default {
  back() {
    dispatcher.dispatch({
      type: 'BACK'
    })
  },

  resetNavigation() {
    dispatcher.dispatch({
      type: 'RESET'
    })
  },

  goTo(index) {
    dispatcher.dispatch({
      type: 'GO_TO',
      nodeIndex: index
    })
  }
}
