import {EventEmitter} from 'events';

import dispatcher from '../dispatcher'
import TreeBuilder from './TreeStore/TreeBuilder'
import treeObject from './TreeStore/tree.json'

class TreeStore extends EventEmitter {
  constructor() {
    // recede tracks whether the flash is coming or going
    super()
    this.class = 'forwards'
    this.loaded = false
    this.index = 0
    this.tree = null
    this.nodes = null
    this.children = null
    this.breadcrumbs = []

    this.builder = new TreeBuilder

    // temporary fix

    if (global.TEST_ENV) {
      this.setupForTesting()
    }
  }

  removeTree() {
    this.loaded = false
    this.emit('change')
  }

  newTree(num) {
    this.buildTree(num)
  }

  buildTree(num) {
    var self = this
    this.builder.buildTree(num).then(function(result) {
      self.tree = self.builder.tree
      self.loaded = true
      self.setNavigation(self.resetNavigation)
    })

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
      atStart: this.atStart(),
      atState: this.atState(),
      key: this.breadcrumbs.length,
      lastSelection: this.finalSelection(),
      navigationClass: this.class,
      loaded: this.loaded
    }
  }

  atStart() {
    return !this.breadcrumbs.length > 0
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

  navigatorInfo() {
    return { atStart: this.atStart() }
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
      } case "TO_DISPLAY_PAGE": {
        this.newTree(action.ballNumber)
        break
      } case "TO_TITLE_PAGE": {
        this.removeTree()
        break
      }
    }
  }
  // ======= Tree Navigating =========

  resetNavigation() {
    this.index = 0
    this.nodes = this.tree
    this.breadcrumbs = []
    this.class= 'reset'
  }

  goToNode(index) {
    this.breadcrumbs.push(this.newBreadcrumb())
    this.class = 'forwards'
    this.index = index
    this.nodes = this.children
  }

  newBreadcrumb() {
    return { nodes: this.nodes, index: this.index }
  }

  backOneNode() {
    const nodeState = this.breadcrumbs.pop()
    this.class= 'backwards'
    this.nodes = nodeState.nodes
    this.index = nodeState.index
  }

  setNavigation(callback, argument) {
    callback.call(this, argument)
    this.children = this.getChildren()
    this.emit('change')
  }


  // ======= Temporary and Bad =========

  setupForTesting() {
    this.tree = treeObject
    this.loaded = true
    this.setNavigation(this.resetNavigation)
  }

}

const treeStore = new TreeStore;

dispatcher.register(treeStore.handleActions.bind(treeStore))
export default treeStore;
