import dispatcher from '../dispatcher'

export default {
  toTitlePage() {
    dispatcher.dispatch({
      type: 'TO_TITLE_PAGE'
    })
  },

  toDisplayePage(ball_number) {
    dispatcher.dispatch({
      type: 'TO_DISPLAY_PAGE',
      ball_number: ball_number
    })
  }
}
