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
        this.startThrottle(1200)
        break
      } case "TO_DISPLAY_PAGE": {
        this.startThrottle(1200)
        break
      } case "BACK": {
        this.startThrottle(1500)
        break
      } case "RESET": {
        this.startThrottle(1500)
        break
      } case "GO_TO": {
        this.startThrottle(1500)
        break
      } case "NEXT_NODE": {
        this.startThrottle(600)
        break
      } case "PREVIOUS_NODE": {
        this.startThrottle(600)
        break
      }
    }
  }

  startThrottle(duration) {
    // unless we're already in the process of throttling, set throttling to true
    // start a timeoput to set it back to false again when the animation is done
    // after both changes, emit a change
    if (!this.throttle) {
      this.throttle = true
      this.emit('change')
      var self = this
      setTimeout(function() {
        self.throttle = false
        self.emit('change')
      }, duration)
    }
  }
}

const throttleStore = new ThrottleStore;

dispatcher.register(throttleStore.handleActions.bind(throttleStore))
export default throttleStore;
