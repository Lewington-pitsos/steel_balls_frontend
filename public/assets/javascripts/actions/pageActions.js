import dispatcher from '../dispatcher'

export default {
  toTitlePage() {
    dispatcher.dispatch({
      type: 'TO_TITLE_PAGE'
    })
  },

  toDisplayPage(ballNumber) {
    console.log(ballNumber);
    dispatcher.dispatch({
      type: 'TO_DISPLAY_PAGE',
      ballNumber: ballNumber
    })
  }
}
