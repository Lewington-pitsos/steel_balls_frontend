import {EventEmitter} from 'events';

import dispatcher from '../dispatcher'

class CarouselStore extends EventEmitter {
  constructor() {
    // recede tracks whether the flash is coming or going
    super()
    this.resetState()
  }

  handleActions(action) {
    switch(action.type) {
  
    }
  }

  // ======= Component updating =========
  /*
  getPage() {
    return {titlePage: this.titlePage}
  }

  // ======= Dispatcher interaction =========



  toTitlePage() {
    this.titlePage = true
    this.emit('pageChange')
  }

  toDisplayPage(ball_number) {
    this.titlePage = false
    this.emit('pageChange')
  }
  */
  resetState() {
    this.reverse = false
    this.index = 0
  }

}

const carouselStore = new CarouselStore;

dispatcher.register(carouselStore.handleActions.bind(carouselStore))
export default carouselStore;
