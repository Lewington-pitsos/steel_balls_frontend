import {EventEmitter} from 'events';

import dispatcher from '../dispatcher'
import TreeBuilder from './TreeStore/TreeBuilder'

class TreeStore extends EventEmitter {
  constructor() {
    // recede tracks whether the flash is coming or going
    super()
    this.tree = null
    this.node = null
    this.children = null

    this.builder = new TreeBuilder
    this.buildTree()
    this.setDeafultNodes()
  }

  buildTree() {
    this.builder.buildTree()
    this.tree = this.builder.tree
  }

  setDeafultNodes() {
    this.node = this.tree
    this.children = this.getChildren()
  }

  getChildren() {
    if (this.node['selections']) {
      return this.node['selections']
    } else if (this.node['states']) {
      return this.node['states']
    } else {
      return null
    }
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
