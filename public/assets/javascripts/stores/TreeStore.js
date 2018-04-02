import {EventEmitter} from 'events';

import dispatcher from '../dispatcher'
import TreeBuilder from './TreeStore/TreeBuilder'

class TreeStore extends EventEmitter {
  constructor() {
    // recede tracks whether the flash is coming or going
    super()
    this.tree = null
    this.nodes = null
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
    if (this.nodes[this.index]['selections']) {
      return this.nodes[this.index]['selections']
    } else if (this.nodes[this.index]['states']) {
      return this.nodes[this.index]['states']
    } else {
      return null
    }
  }


  // ======= Component updating =========

  getInfo() {
    return {
      nodes: this.nodes,
      index: this.index,
      children: this.children,
      atStart: !this.breadcrumbs.length > 0,
      atState: this.atState(),
      key: this.breadcrumbs.length,
      lastSelection: this.finalSelection()
    }
  }

  atState() {
    return this.breadcrumbs.length % 2 == 0
  }

  finalSelection() {
    return (!this.atState()) && this.children.every(this.noGrandchildren)
  }

  noGrandchildren(child) {
    return child.selections == undefined
  }

  // ======= Dispatcher interaction =========

  handleActions(action) {
    switch(action.type) {
      case "BACK": {
        this.setNavigation(this.backOneNode)
        break
      } case "RESET": {
        this.setNavigation(this.resetNavigation)
        break
      } case "GO_TO": {
        this.setNavigation(this.goToNode, action.nodeIndex)
        break
      }
    }
  }
  // ======= Tree Navigating =========

  resetNavigation() {
    this.nodes = this.tree
    this.breadcrumbs = []
  }

  goToNode(index) {
    this.index = index
    this.breadcrumbs.push(this.newBreadcrumb())
    this.nodes = this.children
  }

  newBreadcrumb() {
    { nodes: this.nodes, index: this.index }
  }

  backOneNode() {
    this.nodes = this.breadcrumbs.pop().nodes
    this.index = this.breadcrumbs.pop().index
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
