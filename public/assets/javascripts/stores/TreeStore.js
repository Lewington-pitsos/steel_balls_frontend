import {EventEmitter} from 'events';

import dispatcher from '../dispatcher'

class TreeStore extends EventEmitter {
  constructor() {
    // recede tracks whether the flash is coming or going
    super()
    this.titlePage = true
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
        this.toDisplayPage(action.ball_number)
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

const treeStore = new TreeStore;

dispatcher.register(treeStore.handleActions.bind(treeStore))
export default treeStore;
