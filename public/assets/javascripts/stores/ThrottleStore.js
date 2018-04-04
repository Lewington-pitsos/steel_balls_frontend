import {EventEmitter} from 'events';

import dispatcher from '../dispatcher'

class ThrottleStore extends EventEmitter {
  constructor() {
    // recede tracks whether the flash is coming or going
    super()
    this.throttle = false
  }

  // ======= Component updating =========

  getInfo() {
    return {throttle: this.throttle}
  }

  // ======= Dispatcher interaction =========

  handleActions(action) {
    switch(action.type) {
      case "TO_TITLE_PAGE": {
        this.startThrottle(1100)
        break
      } case "TO_DISPLAY_PAGE": {
        this.startThrottle(1100)
        break
      }
    }
  }

  startThrottle(duration) {
    this.throttle = true
    this.emit('change')
    var self = this
    setTimeout(function() {
      self.throttle = false
      self.emit('change')
    }, duration)
  }

}

const throttleStore = new ThrottleStore;

dispatcher.register(throttleStore.handleActions.bind(throttleStore))
export default throttleStore;
