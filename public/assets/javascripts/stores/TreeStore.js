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
    this.breadcrumbs = []

    this.builder = new TreeBuilder
    this.buildTree()
    this.setNavigation(this.resetNavigation)
  }

  buildTree() {
    this.builder.buildTree()
    this.tree = this.builder.tree
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

  getInfo() {
    return {
      node: [this.node],
      children: this.children,
      atStart: !this.breadcrumbs.length > 0,
      atState: this.atState()
    }
  }

  atState() {
    return this.breadcrumbs.length % 2 == 0
  }

  // ======= Dispatcher interaction =========

  handleActions(action) {

  }

  // ======= Tree Navigating =========

  resetNavigation() {
    this.node = this.tree
    this.breadcrumbs = []
  }

  goToNode(index) {
    this.breadcrumbs.push(this.node)
    this.node = this.children[index]
  }

  backOneNode() {
    this.node = this.breadcrumbs.pop()
  }

  setNavigation(callback, argument) {
    callback.call(this, argument)
    this.children = this.getChildren()
    this.emit('change')
  }

}

const treeStore = new TreeStore;

dispatcher.register(treeStore.handleActions.bind(treeStore))
export default treeStore;
