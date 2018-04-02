import {EventEmitter} from 'events';

import dispatcher from '../dispatcher'

class CarouselStore extends EventEmitter {
  constructor() {
    // recede tracks whether the flash is coming or going
    super()
    this.resetState()
  }

  // ======= Component updating =========

  getState() {
    return { index: this.index, reverse: this.reverse }
  }

  // ======= Dispatcher interaction =========

  handleActions(action) {
    switch(action.type) {
      case "NEXT_NODE": {
        this.toNextNode()
        break
      } case "PREVIOUS_NODE": {
        this.toPreviousNode()
        break
      } case "NEW_CAROUSEL": {
        this.saveNodeuNumber(action.number)
        break
      }
    }
  }

  saveNodeuNumber(number) {
    this.number = number
    this.resetState()
  }

  toNextNode() {
    this.reverse = false
    this.index += 1
    this.emit('changeState')
  }

  toPreviousNode() {
    this.reverse = true
    this.index -= 1
    this.emit('changeState')
  }

  resetState() {
    this.reverse = false
    this.index = 0
  }
}

const carouselStore = new CarouselStore;

dispatcher.register(carouselStore.handleActions.bind(carouselStore))
export default carouselStore;
