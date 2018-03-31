import {EventEmitter} from 'events';

import dispatcher from '../dispatcher'

class PageStore extends EventEmitter {
  constructor() {
    // recede tracks whether the flash is coming or going
    super()
    this.titlePage = false
  }

  // ======= Component updating =========

  getPage() {
    return {titlePage: this.titlePage}
  }

  // ======= Dispatcher interaction =========

  handleActions(action) {
    switch(action.type) {
      case "TO_TITLE_PAGE": {
        this.toTitlePage()
        break
      } case "TO_DISPLAY_PAGE": {
        this.removeBucket(action.ball_number)
        break
      }
    }
  }

  toTitlePage() {
    this.titlePage = true
    this.emit('pageChange')
  }

  toDisplayPage(ball_number) {
    this.titlePage = false
    this.emit('pageChange')
  }

}

const pageStore = new PageStore;

dispatcher.register(pageStore.handleActions.bind(pageStore))
export default pageStore;
